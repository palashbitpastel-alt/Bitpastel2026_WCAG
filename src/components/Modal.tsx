'use client';

import type React from 'react';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import * as countryCodesList from 'country-codes-list';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Link from 'next/link';
import { CircleCheck, CircleCheckBig, Phone, Check } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';
import config from '../../config';
import ContactUs from '../../public/images/contact_us_modal.webp';

interface ModalProps {
  open: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

interface ContactModalProps {
  isOpen: boolean;
  setIsModalOpen: () => void;
}

// Custom ChevronDown component
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const services = [
  'Shopify Store',
  'Website',
  'Mobile App',
  'Custom SaaS',
  'E-commerce Site',
  'UI/UX Design',
  'Digital Marketing',
];

const myCountryCodesObject = countryCodesList.customList(
  'countryCode',
  '[{countryCode}] {countryNameEn}: +{countryCallingCode}'
);

const countryCodes1 = Object.entries(myCountryCodesObject)
  .map(([countryCode, value]) => {
    const match = value.match(/\[(\w+)\] (.*?): \+?(\d+)/);
    if (!match) return null;

    return {
      code: `+${match[3]}`,
      country: match[1],
      name: match[2],
    };
  })
  .filter(Boolean);

const Modal: React.FC<ModalProps> = ({ open, setIsModalOpen, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const [defaultCountry, setDefaultCountry] = useState<string>('IN');
  const [isLoading, setIsLoading] = useState(true);
  const detectionActive = useRef(false);

  const detectCountry = async () => {
    if (detectionActive.current) return;
    detectionActive.current = true;

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

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      setFormData(initialFormData);
      setIsSuccess(false);
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      // setTimeout(() => setIsAnimating(true), 10);
      setIsAnimating(true);

      // Call detectCountry directly when modal opens
      if (!detectionActive.current) {
        setIsLoading(true);
        detectCountry();
      }
    } else {
      setIsAnimating(false);
      // setTimeout(() => {
      //   setIsVisible(false);
      //   setIsServiceDropdownOpen(false);
      //   setIsCountryDropdownOpen(false);
      //   detectionActive.current = false; // Reset detection flag
      // }, 200);
      setIsVisible(false);
      setIsServiceDropdownOpen(false);
      setIsCountryDropdownOpen(false);
      detectionActive.current = false;
    }
  }, [open]);

  const handleClose = () => {
    setIsModalOpen(false);
    console.log("Please click me");
    
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const initialFormData = {
    service: '',
    fullName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [validationErrors, setValidationErrors] = useState({
    service: false,
    fullName: false,
    email: false,
  });

  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Basic validation
    const errors = {
      service: !formData.service,
      fullName: !formData.fullName,
      email: !formData.email,
    };

    setValidationErrors(errors);

    if (Object.values(errors).some(Boolean)) {
      setIsSubmitting(false);
      return;
    }

    if (!captchaToken) {
      alert("Please verify that you're not a robot.");
      setIsSubmitting(false);
      return;
    }

    let phoneCode = '';
    let phoneNumber = '';

    if (formData.phone) {
      try {
        const parsedNumber = parsePhoneNumber(formData.phone);
        if (parsedNumber) {
          phoneCode = `+${parsedNumber.countryCallingCode}`;
          phoneNumber = parsedNumber.nationalNumber;
        }
      } catch (error) {
        console.error('Error parsing phone number:', error);
      }
    }

    const payload = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      phone_no: phoneNumber,
      phone_code: phoneCode.replace('+', ''),
      choice: formData.service,
      message: formData.message,
      'g-recaptcha-response': captchaToken,
    };

    const formEncoded = new URLSearchParams(payload as any).toString();

    try {
      const response = await fetch(`${config.API_BASE_URL}/quote.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formEncoded,
      });

      if (response.ok) {
        const result = await response.text();
        console.log('Success:', result);
        setIsSuccess(true);
        setFormData(initialFormData);
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        console.error('Failed to submit form:', response.status);
        alert('Oops! Something went wrong. Please try again.');
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again later.');
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (value.trim() !== '' && validationErrors[field as keyof typeof validationErrors]) {
      setValidationErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  if (!isVisible) return null;

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <div className="fixed inset-0 flex items-center justify-center z-50">
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
    );
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center modal-overlay duration-500 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative modal-container w-full max-w-4xl mx-4 transition-[transform,scale,opacity] duration-300 ${isAnimating ? ' opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
      >
        {children}

        {isSubmitting && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
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

        <div className="w-full md:rounded-lg shadow-xl overflow-hidden">
          <div className="md:pt-[30px] md:px-[30px] md:pb-[35px]">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left side - Image and details */}
              <div className="lg:w-[60%] md:w-[50%] md:flex md:flex-col hidden">
                <div className="mb-3">
                  <Image
                    src={ContactUs}
                    alt="bitpastel client image"
                    className="w-full h-auto object-cover "
                  />
                </div>

                <div className="modal-details mt-auto">
                  <h2 className="subheading font-bold md:mb-10 mb-6 text-title font-source">
                    Satisfied Client Worldwide
                  </h2>

                  <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-6 lg:px-[50px]">
                    <div className="text-center">
                      <Image
                        src="/images/img_fasolidusers.svg"
                        alt="modal-1"
                        width={30}
                        height={30}
                        className="mx-auto mb-2 h-[30px]"
                      />
                      <h6 className="text-[#099]">900</h6>
                      <p className="text-[#212529] text-[13px]">Clients</p>
                    </div>

                    <div className="text-center">
                      <Image
                        src="/images/Bulb.svg"
                        alt="modal-2"
                        width={30}
                        height={30}
                        className="mx-auto mb-2 h-[30px]"
                      />
                      <h6 className="text-[#099]">1400+</h6>
                      <p className="text-[#212529] text-[13px]">Projects</p>
                    </div>

                    <div className="text-center ">
                      <Image
                        src="/images/img_group.svg"
                        alt="modal-2"
                        width={30}
                        height={30}
                        className="mx-auto mb-2 h-[30px]"
                      />
                      <h6 className="text-[#099]">50M</h6>
                      <p className="text-[#212529] text-[13px]">Lines of Code</p>
                    </div>

                    <div className="text-center">
                      <Image
                        src="/images/img_tdesignlocationfilled.svg"
                        alt="modal-2"
                        width={30}
                        height={30}
                        className="mx-auto mb-2 h-[30px]"
                      />
                      <h6 className="text-[#099]">35</h6>
                      <p className="text-[#212529] text-[13px]">Countries</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center lg:gap-0 gap-4 pt-6 text-center lg:mr-[-17px]">
                    <p className="text-[#099] border-right text-[14px] w-full md:w-full lg:w-1/3 flex justify-center mb-2 lg:mb-0">
                      {/* <a target='_blank' href="https://api.whatsapp.com/send/?phone=442081446579&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0">UK: +44 2081 446579</a> */}
                      {/* <a target='_blank' href="https://api.whatsapp.com/send/?phone=447469539191&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0">UK: +44 7469 539191</a> */}
                      <a href="tel:+447469539191">UK: +44 7469 539191</a>
                    </p>

                    <p className="text-[#099] border-right text-[14px] w-full lg:w-1/3 md:w-full lg:flex justify-center mb-2 lg:mb-0">
                      <a href="tel:+18724446679">US: +1 (872) 444 6679</a>
                    </p>

                    <p className="text-[#099] text-[14px] w-full lg:w-1/3 md:w-full lg:flex justify-center">
                      <a href="tel:+919830566248">IN: +91 9830 566 248</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Right side - Form */}
              <div className="lg:w-[40%] md:w-[50%] w-full ">
                <div className="md:hidden">
                  <div className="bg-[#3dcb90] text-primary-white">
                    <h3 className="title md:p-4 p-2 ">
                      Get Your Business Online Today <br />
                      With <span className="font-bold text-primary-white">Bitpastel</span>
                    </h3>
                  </div>
                </div>

                {/* Form Section */}
                <div className="bg-[#fff] md:p-[35px] p-[15px] md:shadow-[1px_-2px_20px_rgba(0,0,0,0.1),0_12px_24px_rgba(0,0,0,0.12)] modalform-area-mob">
                  {isSuccess ? (
                    <>
                      <div className="grid grid-cols-1 min-h-[450px] place-items-center justify-between">
                        <div className="w-[100px] h-[100px] rounded-full bg-[#00A944] flex items-center justify-center">
                          <Check className="text-primary-white w-[60px] h-[60px]" strokeWidth={3} />
                        </div>

                        <div className=" text-center text-dark">
                          <p className=" font-[100] paragraph font-roboto">
                            Thanks, you're all set
                          </p>

                          <p className="font-[100] paragraph font-roboto">
                            We have received your request and we will get back to you soon
                          </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <p className=" font-[100] text-dark paragraph font-roboto">
                            Please tap below to call us
                          </p>
                          <a
                            href="tel:+18724446679"
                            className="flex items-center gap-3 text-[#009999] text-[16px] hover:underline"
                          >
                            <Phone
                              className="w-[24px] h-[24px] text-[#009999] fill-current"
                              strokeWidth={0.5}
                            />
                            <div className="w-6 h-6 relative">
                              <Image
                                src="/flags/us.svg"
                                alt="US Flag"
                                width={26}
                                height={26}
                                className="object-contain"
                              />
                            </div>
                            <span>+1 (872) 444 6679</span>
                          </a>
                          <a
                            href="tel:+447469539191"
                            className="flex items-center gap-3 text-[#009999] text-[16px] hover:underline"
                          >
                            <Phone
                              className="w-[24px] h-[24px] text-[#009999] fill-current"
                              strokeWidth={0.5}
                            />
                            <div className="w-6 h-6 relative">
                              <Image
                                src="/flags/uk.svg"
                                alt="UK Flag"
                                width={26}
                                height={26}
                                className="object-contain"
                              />
                            </div>
                            <span>+44 7469 539191</span>
                          </a>
                          <a
                            href="tel:+919830566248"
                            className="flex items-center gap-3 text-[#009999] text-[16px] hover:underline"
                          >
                            <Phone
                              className="w-[24px] h-[24px] text-[#009999] fill-current"
                              strokeWidth={0.5}
                            />
                            <div className="w-6 h-6 relative">
                              <Image
                                src="/flags/in.svg"
                                alt="India Flag"
                                width={26}
                                height={26}
                                className="object-contain"
                              />
                            </div>
                            <span>+91 9830 566 248</span>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-center title font-source md:mb-4 mb-3 font-light text-title ">
                        Get a Free Quote
                      </h2>
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col h-full justify-between"
                      >
                        <div className="md:space-y-2">
                          <div className="relative md:pb-1 border-b border-gray-200">
                            <button
                              type="button"
                              onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                              className={`w-full flex items-center focus:outline-none py-2 px-0 h-auto justify-start ${validationErrors.service ? 'text-red-500' : ''
                                }`}
                            >
                              <span className="text-[#212529] font-[100]">I want</span>
                              <span
                                className={`ml-12 font-light ${validationErrors.service
                                  ? 'text-red-500'
                                  : formData.service
                                    ? 'text-[#212529]'
                                    : 'text-[#B2B2B2]'
                                  }`}
                              >
                                {formData.service || 'select*'}
                              </span>
                              <ChevronDown
                                className={`ml-auto mr-[20px] w-4 h-4 text-[#212529] transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''
                                  }`}
                              />
                            </button>

                            {isServiceDropdownOpen && (
                              <div className="absolute top-full left-0 right-0 mt-1 bg-[#ffffff] border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                                {services.map((service) => (
                                  <button
                                    key={service}
                                    type="button"
                                    onClick={() => {
                                      handleInputChange('service', service);
                                      setIsServiceDropdownOpen(false);
                                      setValidationErrors((prev) => ({ ...prev, service: false }));
                                    }}
                                    className="w-full p-3 text-left hover:bg-gray-50 transition-colors justify-start"
                                  >
                                    {service}
                                  </button>
                                ))}
                              </div>
                            )}

                            {validationErrors.service && (
                              <p className="text-xs text-red-500 mt-1 absolute right-0 z-10">
                                Please select a service.
                              </p>
                            )}
                          </div>

                          <div className="md:pb-1 md:mt-1 border-b border-gray-200 relative">
                            <input
                              autoComplete="off"
                              // onFocus={(e) => e.target.removeAttribute('readOnly')}
                              type="text"
                              placeholder="Full Name"
                              value={formData.fullName}
                              onChange={(e) => handleInputChange('fullName', e.target.value)}
                              className={`w-full focus:outline-none font-[100] py-2 ${validationErrors.fullName ? 'placeholder-red-500' : ''}`}
                            />

                            {validationErrors.fullName && (
                              <p className="text-xs text-red-500 mt-1 absolute right-0 z-10">
                                Please enter your full name.
                              </p>
                            )}
                          </div>

                          <div className="md:pb-1 md:mt-1 border-b border-gray-200 relative">
                            <input
                              autoComplete="off"
                              // readOnly
                              // onFocus={(e) => e.target.removeAttribute('readOnly')}
                              type="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className={`w-full focus:outline-none font-[100] py-2 ${validationErrors.email ? 'placeholder-red-500' : ''}`}
                            />
                            {validationErrors.email && (
                              <p className="text-xs text-red-500 mt-1 absolute right-0 z-10">
                                {formData.email
                                  ? 'Please enter a valid email.'
                                  : 'Please enter your email.'}
                              </p>
                            )}
                          </div>

                          <div className={`relative flex gap-2 pt-[6px] border-b `}>
                            <PhoneInput
                              international
                              defaultCountry={defaultCountry as any}
                              countryCallingCodeEditable={false}
                              value={formData.phone}
                              onChange={(value) => handleInputChange('phone', value || '')}
                              placeholder="Mobile number (optional)"
                              autoComplete="new-text-4"
                              onKeyDown={(e: React.KeyboardEvent) => {
                                const digitsOnly = formData.phone.replace(/\D/g, '');
                                const allowedKeys = [
                                  'Backspace',
                                  'Delete',
                                  'ArrowLeft',
                                  'ArrowRight',
                                  'Tab',
                                ];
                                if (
                                  digitsOnly.length >= 15 &&
                                  !allowedKeys.includes(e.key) &&
                                  /^\d$/.test(e.key)
                                ) {
                                  e.preventDefault();
                                }
                              }}
                              className="!border-none gap-[20px] font-[100] w-full !p-0 [&>input]:!text-title [&>input]:!subheading [&>input]:font-source [&>input]:font-thin [&>input]:focus:!outline-none [&>input]:!py-2 [&>input]:!flex-1 [&>input]:placeholder-[#2A2A2A]"
                            />
                            {!formData.phone && (
                              <p className="text-white z-10 top-[14px] left-[115px] whitespace-nowrap font-[100] pointer-events-none absolute right-0">
                                Mobile number (optional)
                              </p>
                            )}
                          </div>

                          <div className="md:pb-1 border-b border-gray-200">
                            <textarea
                              autoComplete="off"
                              // readOnly
                              // onFocus={(e) => e.target.removeAttribute('readOnly')}
                              placeholder="Message (optional)"
                              value={formData.message}
                              onChange={(e) => handleInputChange('message', e.target.value)}
                              rows={2}
                              className="w-full focus:outline-none font-[100] resize-none md:min-h-[60px] md:py-2"
                            />
                          </div>
                        </div>

                        <div className=" pt-4">
                          {/* ReCAPTCHA */}
                          {formData.service && formData.fullName && formData.email && (
                            <div className="mb-3">
                              <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LdSzGEUAAAAABG0EhsRTOkyJUyTqwFz6gpNX8g1"
                                onChange={(token) => setCaptchaToken(token)}
                                onExpired={() => setCaptchaToken(null)}
                                size="normal"
                              />
                            </div>
                          )}
                          <button
                            type="submit"
                            disabled={isSubmitting || !captchaToken}
                            className={`w-full btn bg-green-btn text-primary-white transition-colors duration-200 ${
                              !captchaToken ? 'opacity-[0.65] cursor-not-allowed' : ''
                            }`}
                          >
                            Lets Work Together
                          </button>

                          <p className="text-[11px] mt-[3px] text-white text-center">
                            By clicking "Lets Work Together", you agree to our{' '}
                            <Link href="/privacy-policy" target="_blank" className="text-till">
                              Privacy Policy
                            </Link>
                          </p>

                          <Link
                            target="_blank"
                            href={
                              "https://api.whatsapp.com/send/?phone=919830566248&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0"
                            }

                            type="button"
                            className="w-full text-[#52d09c] flex justify-center items-center mt-5 border-[1px] h-[40px] rounded-[4px] border-[#52d09c] hover:bg-green-btn hover:text-primary-white transition-all duration-300"
                          >
                            Chat with Us
                          </Link>
                        </div>
                      </form>
                    </>
                  )}
                </div>
                <div className="flex flex-wrap md:gap-4 gap-2 flex-col justify-center md:pt-6 pt-0 pb-2 md:pb-5 text-center md:hidden">
                  <p className="text-[#099] text-[14px] w-full md:w-full lg:w-1/3 flex justify-center mb-2 lg:mb-0">
                    {/* <a target='_blank' href="https://api.whatsapp.com/send/?phone=442081446579&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0">UK: +44 2081 446579</a> */}
                    {/* <a target='_blank' href="https://api.whatsapp.com/send/?phone=447469539191&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0">UK: +44 7469 539191</a> */}
                    <a href="tel:+18724446679">US: +1 (872) 444 6679</a>
                  </p>

                  <p className="text-[#099]  text-[14px] w-full lg:w-1/3 md:w-full lg:flex justify-center mb-2 lg:mb-0">
                    <a href="tel:+447469539191">UK: +44 7469 539191</a>
                  </p>

                  <p className="text-[#099] text-[14px] w-full lg:w-1/3 md:w-full lg:flex justify-center">
                    <a href="tel:+919830566248">IN: +91 9830 566 248</a>
                  </p>
                </div>
              </div>
              <div className="md-hidden absolute top-[10px] right-[10px]">
                <button type="button" aria-label="Close modal" onClick={handleClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    width="20px"
                    height="20px"
                    viewBox="-3.5 0 19 19"
                    className="cf-icon-svg hidden md:block"
                  >
                    <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFF"
                    width="20px"
                    height="20px"
                    viewBox="-3.5 0 19 19"
                    className="cf-icon-svg block md:hidden"
                  >
                    <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;