'use client';
import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Paperclip } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';
import config from '../../config';

interface JoinTeamProps {
  title?: string;
  className?: string;
  jobTitle?: string;
}

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ 
  options, 
  value, 
  onChange, 
  placeholder,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div 
    id='joinTeamForm'
      ref={selectRef}
      className={`relative ${className}`}
    >
      <div
        className={`flex justify-between items-center w-full p-2 border-b ${
          value ? 'border-[#00a974]' : 'border-gray-300'
        }  cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`subheading font-source font-thin ${
          value ? 'text-title' : 'text-white'
        }`}>
          {value || placeholder}
        </span>
        <ChevronDown className={`h-4 w-4 text-white transition-transform duration-200 ${
          isOpen ? 'transform rotate-180' : ''
        }`} />
      </div>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-[#FFFFFF] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2),0_4px_5px_0_rgba(0,0,0,0.14),0_1px_10px_0_rgba(0,0,0,0.12)] rounded-md py-1 max-h-100 overflow-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className={`px-4 min-h-[57px] cursor-pointer content-center transition-all duration-300 ${
                value === option ? 'bg-[rgba(0,0,0,.04)]' : 'hover:bg-[rgba(0,0,0,.04)]'
              }`}
              style={{ 
                opacity: 0,
                animation: `fadeIn 0.3s ease-in-out forwards`,
                animationDelay: `${index * 0.05}s`
              }}
              onClick={() => handleOptionClick(option)}
            >
              <span className="block text-title font-[400] subheading font-source ">
                {option}
              </span>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default function JoinTeam({ title = 'Join Our Team', className, jobTitle }: JoinTeamProps) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentLocation: '',
    qualification: '',
    experience: '',
    noticePeriod: '',
    referredBy: '',
    jobTitle: jobTitle || '',
    job_title: '',
    resume: null as File | null,
  });

  const [defaultCountry, setDefaultCountry] = useState<string>('IN');
  const [isLoading, setIsLoading] = useState(true);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>({});

  // Detect user's country based on IP
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country) {
          setDefaultCountry(data.country);
        }
      } catch (error) {
        console.error('Could not detect country, using default:', error);
      } finally {
        setIsLoading(false);
      }
    };
    detectCountry();
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
    } else {
      const numericPhone = formData.phone.replace(/\D/g, '');
      if (numericPhone.length > 0 && numericPhone.length < 8) {
        newErrors.phone = 'Mobile number should be at least 8 digits.';
      }
    }

    if (!formData.currentLocation.trim()) {
      newErrors.currentLocation = 'Current location is required.';
    }

    if (!formData.resume) {
      newErrors.resume = 'Please attach your resume.';
    }

    return newErrors;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Validate form whenever formData changes, but only show errors for touched fields
  useEffect(() => {
    const validationErrors = validateForm();

    // Only show errors for fields that have been touched
    const filteredErrors: { [key: string]: string } = {};
    Object.keys(validationErrors).forEach((key) => {
      if (touchedFields[key]) {
        filteredErrors[key] = validationErrors[key];
      }
    });

    setErrors(filteredErrors);
    setIsFormValid(Object.keys(validationErrors).length === 0);
  }, [formData, touchedFields]);

  const experienceOptions = ['Fresher', '1 year', '2 years', '3 years', '4 years', '5+ years'];
  const noticePeriodOptions = [
    'Immediately',
    '15 days',
    '1 month',
    '2 months',
    '3 months',
    'More than 3 months',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Mark field as touched if it had content and now it's empty, or if it has content
    if (value === '' && formData[name as keyof typeof formData]) {
      setTouchedFields((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Mark phone field as touched if it becomes empty after having content
    if (name === 'phone' && value === '' && formData.phone) {
      setTouchedFields((prev) => ({ ...prev, phone: true }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
    // Mark resume as touched when file input is used
    setTouchedFields((prev) => ({ ...prev, resume: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    if (!captchaToken) {
      alert("Please verify that you're not a robot.");
      return;
    }

    setIsSubmitting(true);
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone || '');
    formDataToSend.append('url', window.location.pathname);
    formDataToSend.append('current_location', formData.currentLocation);
    formDataToSend.append('qualification', formData.qualification);
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('notice_period', formData.noticePeriod);
    formDataToSend.append('job_title', formData.jobTitle || '');
    formDataToSend.append('referred_by', formData.referredBy || '');
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    try {
      const response = await fetch(`${config.API_BASE_URL}/sendemail.php/`, {
        method: 'POST',
        body: formDataToSend,
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit:', response.status);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAttachmentClick = () => {
    setTouchedFields((prev) => ({ ...prev, resume: true }));
    fileInputRef.current?.click();
  };

  if (isLoading) {
    return <div className="max-w-[800px] mx-auto px-4 p-6 text-center"> 
      <svg
        style={{
          left: '50%',
          top: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)',
        }}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 187.3 93.7"
        height="150px"
        width="200px"
      >
        <path
          d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="4"
          fill="none"
          id="outline"
          stroke="#009999"
        />
        <path
          d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="4"
          stroke="#009999"
          fill="none"
          opacity="0.05"
          id="outline-bg"
        />
      </svg>
    </div>;
  }

  if (isSubmitted) {
    return (
      <div
        className={`${className ?? ''} max-w-[800px] mx-auto px-4 md:pt-[90px] pt-[70px] text-center`}
      >
        <p className="text-[#009999] text-[20px] font-roboto">
          Thank you {formData.name} for your job application!
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${className ?? ''} max-w-[800px] mx-auto md:pt-[90px] pt-[70px] relative`}
      id="joinTeamForm"
    >
      {/* Loading overlay */}
      {isSubmitting && (
        <div className="absolute inset-0 bg-transparent bg-opacity-90 flex flex-col items-center justify-center z-10 rounded-lg">
          <svg
            style={{
              left: '50%',
              top: '50%',
              position: 'absolute',
              transform: 'translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)',
            }}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 187.3 93.7"
            height="150px"
            width="200px"
          >
            <path
              d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
              strokeMiterlimit="10"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="4"
              fill="none"
              id="outline"
              stroke="#009999"
            />
            <path
              d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
              strokeMiterlimit="10"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="4"
              stroke="#009999"
              fill="none"
              opacity="0.05"
              id="outline-bg"
            />
          </svg>
        </div>
      )}

      <h2 className="title text-title font-semibold font-source text-center mb-8">{title}</h2>

      <form
        onSubmit={handleSubmit}
        className={`space-y-8 ${isSubmitting ? 'pointer-events-none opacity-70' : ''}`}
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div
            className={`flex items-end gap-4 border-b relative ${
              errors.name
                ? 'border-red-500'
                : formData.name
                  ? 'border-[#00a974]'
                  : 'border-gray-300'
            }`}
          >
            <div className="flex-1">
              <input
                autoComplete="new-text-2"
                readOnly
                onFocus={(e) => e.target.removeAttribute('readOnly')}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 text-title subheading font-source font-thin focus:outline-none bg-transparent"
                onBlur={() => setTouchedFields((prev) => ({ ...prev, name: true }))}
              />
            </div>
            {errors.name && (
              <p className="error-text whitespace-nowrap">
                {errors.name}
              </p>
            )}
          </div>

          <div
            className={`flex items-end gap-4 relative border-b pb- ${
              errors.email
                ? 'border-red-500'
                : formData.email
                  ? 'border-[#00a974]'
                  : 'border-gray-300'
            }`}
          >
            <div className="flex-1">
              <input
                autoComplete="new-text-2"
                readOnly
                onFocus={(e) => e.target.removeAttribute('readOnly')}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 text-title subheading font-source font-thin focus:outline-none bg-transparent"
                onBlur={() => setTouchedFields((prev) => ({ ...prev, email: true }))}
              />
            </div>
            {errors.email && (
              <p className="error-text whitespace-nowrap">
                {errors.email}
              </p>
            )}
          </div>

          <div
            className={`relative flex gap-2 border-b ${
              errors.phone
                ? 'border-red-500'
                : formData.phone
                  ? 'border-[#00a974]'
                  : 'border-gray-300'
            }`}
          >
            <PhoneInput
              international
              defaultCountry={defaultCountry as any}
              countryCallingCodeEditable={false}
              value={formData.phone}
              onChange={(value) => {
                if (!value) {
                  handleInputChange('phone', '');
                  return;
                }
                const digitsOnly = value.replace(/\D/g, '');
                if (digitsOnly.length <= 17) {
                  handleInputChange('phone', value);
                }
              }}
              onKeyDown={(e: React.KeyboardEvent) => {
                const digitsOnly = formData.phone.replace(/\D/g, '');
                const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
                if (digitsOnly.length >= 15 && !allowedKeys.includes(e.key) && /^\d$/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              placeholder="Mobile number (optional)"
              autoComplete="new-text-852"
              className="!border-none gap-[12px] subheading font-roboto w-full !p-0 [&>input]:!text-title [&>input]:!subheading [&>input]:font-source [&>input]:font-thin [&>input]:focus:!outline-none [&>input]:!py-2 [&>input]:!flex-1 [&>input]:placeholder-[#2A2A2A]"
              onBlur={() => setTouchedFields((prev) => ({ ...prev, phone: true }))}
            />
            {!formData.phone && (
              <p className="text-white absolute top-[9px] subheading left-[120px] whitespace-nowrap font-[100] pointer-events-none">
                Mobile number
              </p>
            )}
            {errors.phone && (
              <p className="error-text whitespace-nowrap">
                {errors.phone}
              </p>
            )}
          </div>

          <div
            className={`flex items-end gap-4 relative border-b ${
              errors.currentLocation
                ? 'border-red-500'
                : formData.currentLocation
                  ? 'border-[#00a974]'
                  : 'border-gray-300'
            }`}
          >
            <input
              autoComplete="new-text-754"
              readOnly
              onFocus={(e) => e.target.removeAttribute('readOnly')}
              type="text"
              name="currentLocation"
              placeholder="Current Location"
              value={formData.currentLocation}
              onChange={handleChange}
              className="flex-1 text-title subheading p-2 sm:subheading font-source font-thin focus:outline-none bg-transparent"
              onBlur={() => setTouchedFields((prev) => ({ ...prev, currentLocation: true }))}
            />
            {errors.currentLocation && (
              <p className="error-text whitespace-nowrap">
                {errors.currentLocation}
              </p>
            )}
          </div>

          <div className={`border-b ${
          formData.qualification ? 'border-[#00a974]' : 'border-gray-300'
        } relative`}>
            <input
              autoComplete="new-text-99"
              readOnly
              onFocus={(e) => e.target.removeAttribute('readOnly')}
              type="text"
              name="qualification"
              placeholder="Qualification (Optional)"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full p-2 text-title subheading font-source font-thin focus:outline-none"
            />
          </div>

          {/* Custom Select for Experience */}
          <CustomSelect
            options={experienceOptions}
            value={formData.experience}
            onChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
            placeholder="Years of experience (Optional)"
          />

          {/* Custom Select for Notice Period */}
          <CustomSelect
            options={noticePeriodOptions}
            value={formData.noticePeriod}
            onChange={(value) => setFormData(prev => ({ ...prev, noticePeriod: value }))}
            placeholder="Notice Period (Optional)"
          />

          <div className={`border-b ${
          formData.referredBy ? 'border-[#00a974]' : 'border-gray-300'
        } relative`}>
            <input
              autoComplete="new-text-452"
              readOnly
              onFocus={(e) => e.target.removeAttribute('readOnly')}
              type="text"
              name="referredBy"
              placeholder="Referred By (Optional)"
              value={formData.referredBy}
              onChange={handleChange}
              className="w-full p-2 text-title subheading font-source font-thin focus:outline-none"
            />
          </div>
        </div>

        {/* File input section */}
        <div className="pt-[10px] relative">
          <input
            type="file"
            name="resume"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
          <div
            className={`flex items-center gap-3 border-b ${
              errors.resume && touchedFields.resume
                ? 'border-red-500'
                : formData.resume
                  ? 'border-[#00a974]'
                  : 'border-gray-300'
            }`}
          >
            <button
              type="button"
              onClick={handleAttachmentClick}
              className="flex items-center gap-2 pb-[5px] text-white subheading font-source font-thin"
            >
              <Paperclip style={{ stroke: formData.resume ? '#00a974' : 'currentColor' }} className="w-5 h-5" />
              <span className={`${ formData.resume ? 'text-title' : '' }`}>{formData.resume ? formData.resume.name : 'Attach your CV/Resume'}</span>
            </button>
          </div>
          {errors.resume && <p className="error-text">{errors.resume}</p>}
        </div>

        <div className="flex flex-col items-center justify-center md:pt-6 pt-2 gap-2">
          {/* ReCAPTCHA */}
          {isFormValid && (
            <ReCAPTCHA
              sitekey="6LdSzGEUAAAAABG0EhsRTOkyJUyTqwFz6gpNX8g1"
              onChange={(token) => setCaptchaToken(token)}
              className="mb-4"
            />
          )}
          <button
            type="submit"
            className={`bg-green-btn text-primary-white font-medium py-2 px-28 rounded transition duration-200 text-center ${
              !isFormValid || !captchaToken ? 'opacity-[0.65] cursor-not-allowed' : ''
            }`}
            disabled={!isFormValid || !captchaToken}
          >
            Send
          </button>
          {/* Privacy Policy */}
          <p className="text-white text-center font-roboto text-[10px]">
            By clicking "Send", you agree to our{' '}
            <Link href="/privacy-policy" target='_blank' className=" text-till hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}