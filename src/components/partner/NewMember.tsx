'use client';

import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import config from '../../../config';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const BecomePartner = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');
  const [defaultCountry, setDefaultCountry] = useState('IN');
  const [isSuccess, setIsSuccess] = useState(false);

  // Detect user's country
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
      }
    };

    detectCountry();
  }, []);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Name validation (required)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation (required)
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Phone validation (optional - only validate if provided)
    if (formData.phone && !/^\+?[\d\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message is optional - no validation needed

    return newErrors;
  };

  useEffect(() => {
    const validationErrors = validateForm();

    // Only show errors for fields that have been touched
    const filteredErrors: FormErrors = {};
    Object.keys(validationErrors).forEach((key) => {
      if (touchedFields[key]) {
        filteredErrors[key as keyof FormErrors] = validationErrors[key as keyof FormErrors];
      }
    });

    setErrors(filteredErrors);
  }, [formData, touchedFields]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Mark field as touched if it had content and now it's empty
    if (value === '' && formData[name as keyof FormData]) {
      setTouchedFields((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handlePhoneChange = (value?: string) => {
    setFormData({ ...formData, phone: value || '' });

    // Mark phone field as touched if it becomes empty after having content
    if (!value && formData.phone) {
      setTouchedFields((prev) => ({ ...prev, phone: true }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Mark all fields with errors as touched
      const touchedUpdate: { [key: string]: boolean } = {};
      Object.keys(validationErrors).forEach((key) => {
        touchedUpdate[key] = true;
      });
      setTouchedFields((prev) => ({ ...prev, ...touchedUpdate }));
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch(`${config.API_BASE_URL}/partnersSendEmail.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        } as Record<string, string>).toString(),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if form is valid (only required fields: name and email)
  const isFormValid =
    formData.name.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  if (isSuccess) {
    return (
      <section
        className="become-partner-area lg:max-w-[500px] max-w-full mx-auto md:py-[77px] py-[55px]"
        id="become-a-partner"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 grid-cols-1 font-source">
            <div className="">
              <div className="become-partner-title-area flex-col flex lg:grid lg:grid-cols-[auto_1fr] md:text-left  text-center lg:gap-[30px] gap-0 lg:items-center md:items-start items-center">
                <div className="become-partner-circle">
                  <svg
                    fill="none"
                    height="64"
                    viewBox="0 0 80 64"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M68 31.0002V31.4127L76.7125 22.7002C79.45 19.9627 79.45 15.5377 76.7125 12.8002L66.95 3.05019C64.2125 0.312695 59.7875 0.312695 57.05 3.05019L52.0375 8.06269C51.7 8.02519 51.35 8.00019 51 8.00019H37C32.3625 8.00019 28.55 11.5002 28.05 16.0002H28V31.0002C28 33.7627 30.2375 36.0002 33 36.0002C35.7625 36.0002 38 33.7627 38 31.0002V20.0002H58C63.525 20.0002 68 24.4752 68 30.0002V31.0002ZM42 24.0002V31.0002C42 35.9752 37.975 40.0002 33 40.0002C28.025 40.0002 24 35.9752 24 31.0002V16.1752C19.5125 16.9502 15.775 20.2127 14.5 24.7002L12.4375 31.9002L3.2875 41.0502C0.55 43.7877 0.55 48.2127 3.2875 50.9502L13.05 60.7127C15.7875 63.4502 20.2125 63.4502 22.95 60.7127L27.6625 56.0002C27.775 56.0002 27.8875 56.0127 28 56.0127H48C51.3125 56.0127 54 53.3252 54 50.0127C54 49.3127 53.875 48.6377 53.6625 48.0127H54C57.3125 48.0127 60 45.3252 60 42.0127C60 40.4127 59.375 38.9627 58.35 37.8877C61.5625 37.2627 63.9875 34.4377 64 31.0377V30.9877C63.9875 27.1377 60.8625 24.0127 57 24.0127H42V24.0002Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="">
                  <h2 className="font-[600] text-3xl text-title font-source title lg:py-[0] md:py-[25px] text-title py-[15px]">
                    Become a Partner
                  </h2>
                </div>
              </div>
            </div>
            <div className="md:mt-10 mt-0">
              <div className="become-partner-form-area bg-[#1a1a1a] p-6 rounded-lg h-full min-h-[400px] flex items-center justify-center">
                <div className="text-white text-center rounded w-full">
                  <p className="subheading font-[700] font-source">
                    Thank You for connecting with us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="become-partner-area lg:max-w-[500px] max-w-full mx-auto md:py-[77px] py-[55px]"
      id="become-a-partner"
    >
      <div className="grid lg:grid-cols-1 md:grid-cols-2">
        {/* Icon & Heading Section (Above) */}
        <div className="flex-col flex lg:grid lg:grid-cols-[auto_1fr] md:text-left  text-center lg:gap-[30px] gap-0 lg:items-center md:items-start items-center md:mb-10">
          <div className="mt-0 become-partner-circle">
            <svg
              fill="none"
              height="64"
              viewBox="0 0 80 64"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68 31.0002V31.4127L76.7125 22.7002C79.45 19.9627 79.45 15.5377 76.7125 12.8002L66.95 3.05019C64.2125 0.312695 59.7875 0.312695 57.05 3.05019L52.0375 8.06269C51.7 8.02519 51.35 8.00019 51 8.00019H37C32.3625 8.00019 28.55 11.5002 28.05 16.0002H28V31.0002C28 33.7627 30.2375 36.0002 33 36.0002C35.7625 36.0002 38 33.7627 38 31.0002V20.0002H58C63.525 20.0002 68 24.4752 68 30.0002V31.0002ZM42 24.0002V31.0002C42 35.9752 37.975 40.0002 33 40.0002C28.025 40.0002 24 35.9752 24 31.0002V16.1752C19.5125 16.9502 15.775 20.2127 14.5 24.7002L12.4375 31.9002L3.2875 41.0502C0.55 43.7877 0.55 48.2127 3.2875 50.9502L13.05 60.7127C15.7875 63.4502 20.2125 63.4502 22.95 60.7127L27.6625 56.0002C27.775 56.0002 27.8875 56.0127 28 56.0127H48C51.3125 56.0127 54 53.3252 54 50.0127C54 49.3127 53.875 48.6377 53.6625 48.0127H54C57.3125 48.0127 60 45.3252 60 42.0127C60 40.4127 59.375 38.9627 58.35 37.8877C61.5625 37.2627 63.9875 34.4377 64 31.0377V30.9877C63.9875 27.1377 60.8625 24.0127 57 24.0127H42V24.0002Z"
                fill="white"
              />
            </svg>
          </div>

          <div>
            <h2 className=" font-[600] text-3xl text-title font-source title lg:py-[0] md:py-[25px] py-[15px] text-title">
              Become a Partner
            </h2>
          </div>
        </div>

        {/* Form Section (Below) */}
        <div className="become-partner-form-area w-full mx-auto bg-[#1a1a1a] p-6 rounded-lg relative md:min-h-[400px]">
          {isSubmitting && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
              <div className="text-center">
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
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="become-input flex items-start border-b-[1px] relative border-[#B2B2B2]">
              <div className="flex-1">
                <input
                  autoComplete="new-text-4"
                  readOnly
                  onFocus={(e) => e.target.removeAttribute('readOnly')}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => setTouchedFields((prev) => ({ ...prev, name: true }))}
                  className="subheading bg-transparent w-full"
                  disabled={isSubmitting}
                />
              </div>
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="become-input flex items-start border-b-[1px] relative border-[#B2B2B2]">
              <div className="flex-1">
                <input
                  autoComplete="new-text-3"
                  readOnly
                  onFocus={(e) => e.target.removeAttribute('readOnly')}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => setTouchedFields((prev) => ({ ...prev, email: true }))}
                  className="subheading bg-transparent w-full"
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className={`relative flex gap-2 py-[7px] border-b-[1px] border-[#B2B2B2]`}>
              <PhoneInput
                international
                defaultCountry={defaultCountry as any}
                countryCallingCodeEditable={false}
                value={formData.phone}
                onChange={(value) => handlePhoneChange(value)}
                onKeyDown={(e: React.KeyboardEvent) => {
                  const digitsOnly = formData.phone.replace(/\D/g, '');
                  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
                  if (
                    digitsOnly.length >= 17 &&
                    !allowedKeys.includes(e.key) &&
                    /^\d$/.test(e.key)
                  ) {
                    e.preventDefault();
                  }
                }}
                autoComplete="new-text-58564"
                placeholder="Mobile number (optional)"
                disabled={isSubmitting}
                className="!border-none lg:text-[16px] bg-transparent font-roboto lg:gap-[25px] md:gap-0 gap-[5px] w-full !p-0 [&>input]:!text-[#ffffff] [&>input]:!subheading [&>input]:font-source [&>input]:font-thin [&>input]:focus:!outline-none [&>input]:!py-2 [&>input]:!flex-1 [&>input]:placeholder-[#B2B2B2]"
              />
              {!formData.phone && (
                <p className="text-white lg:text-[16px] absolute lg:left-[100px] md:left-[68px] left-[75px] top-[50%] translate-y-[-50%] whitespace-nowrap font-[100] pointer-events-none">
                  Mobile number(Optional)
                </p>
              )}
              {/* {errors.phone && (
                    <p className="text-red-500 text-xs sm:text-sm whitespace-nowrap mb-[2px]">
                      {errors.phone}
                    </p>
                  )} */}
            </div>

            <div className="become-textarea flex items-start border-b-[1px] relative border-[#B2B2B2]">
              <div className="flex-1">
                <textarea
                  autoComplete="new-text-178"
                  readOnly
                  onFocus={(e) => e.target.removeAttribute('readOnly')}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="subheading bg-transparent w-full"
                  disabled={isSubmitting}
                />
              </div>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            <button
              className="mt-[30px] bg-green-btn px-[20px] min-w-[140px] md:w-auto w-full text-primary-white min-h-[40px] rounded disabled:opacity-[0.65]"
              type="submit"
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {status && (
              <p
                className={`mt-3 text-center ${
                  status.includes('Success') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default BecomePartner;
