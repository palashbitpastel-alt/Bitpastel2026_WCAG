import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const WhatsAppBubble = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show the bubble
      setIsVisible(true);

      // Clear any existing timeout
      if (timer) {
        clearTimeout(timer);
      }

      // Hide the bubble after scrolling stops (2 seconds)
      setTimer(setTimeout(() => {
        setIsVisible(false);
      }, 2000));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  if (!isVisible) return null;

  return (
    <div className="fixed whatspp-bubble lg:bottom-[50px] md:bottom-[70px] bottom-[80px] right-[26px] z-50">
      <Link
        target="_blank"
        prefetch
        rel="noopener noreferrer"
        href={
          'https://api.whatsapp.com/send/?phone=919830566248&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0'
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="42"
          viewBox="0 0 44 42"
          fill="none"
          style={{
            filter: 'drop-shadow(0px 0px 5px rgba(10, 0, 0, 0.4))',
          }}
        >
          <ellipse cx="22.0004" cy="17.2356" rx="11.0629" ry="4.97778" fill="#00A974" />
          <path
            d="M29.8571 0H14.1429C6.28571 0 0 6.22222 0 14V40.4444C0 41.0667 0.314286 41.5333 0.942857 41.8444C1.17857 42 1.41429 42 1.57143 42C1.88571 42 2.35714 41.8444 2.67143 41.6889C8.17143 36.8667 15.2429 34.2222 22.4714 34.2222H29.8571C37.7143 34.2222 44 28 44 20.2222V14C44 6.22222 37.7143 0 29.8571 0ZM16.8143 18.2C16.6571 18.3556 16.5 18.5111 16.3429 18.5111C16.1857 18.6667 15.8714 18.6667 15.7143 18.6667C15.2429 18.6667 14.9286 18.5111 14.6143 18.2C14.3 17.8889 14.1429 17.5778 14.1429 17.1111C14.1429 16.9556 14.1429 16.6444 14.3 16.4889C14.4571 16.3333 14.4571 16.1778 14.6143 16.0222C15.0857 15.5556 15.7143 15.4 16.3429 15.7111C16.5 15.8667 16.6571 15.8667 16.8143 16.0222C16.9714 16.1778 17.1286 16.3333 17.1286 16.4889C17.2857 16.6444 17.2857 16.9556 17.2857 17.1111C17.2857 17.5778 17.1286 17.8889 16.8143 18.2ZM23.1 18.2C22.9429 18.2 22.9429 18.3556 22.9429 18.3556C22.7857 18.3556 22.7857 18.5111 22.6286 18.5111C22.4714 18.5111 22.4714 18.5111 22.3143 18.6667C22.1571 18.6667 22.1571 18.6667 22 18.6667C21.5286 18.6667 21.2143 18.5111 20.9 18.2C20.5857 17.8889 20.4286 17.5778 20.4286 17.1111C20.4286 16.6444 20.5857 16.3333 20.9 16.0222C21.0571 15.8667 21.2143 15.7111 21.3714 15.7111C22 15.4 22.6286 15.5556 23.1 16.0222C23.4143 16.3333 23.5714 16.6444 23.5714 17.1111C23.5714 17.5778 23.4143 17.8889 23.1 18.2ZM29.7 17.7333C29.5429 17.8889 29.5429 18.0444 29.3857 18.2C29.2286 18.3556 29.0714 18.5111 28.9143 18.5111C28.7571 18.6667 28.4429 18.6667 28.2857 18.6667C28.1286 18.6667 27.8143 18.6667 27.6571 18.5111C27.5 18.3556 27.3429 18.3556 27.1857 18.2C27.0286 18.0444 26.8714 17.8889 26.8714 17.7333C26.8714 17.5778 26.7143 17.2667 26.7143 17.1111C26.7143 16.9556 26.7143 16.6444 26.8714 16.4889C27.0286 16.3333 27.0286 16.1778 27.1857 16.0222C27.3429 15.8667 27.5 15.7111 27.6571 15.7111C27.9714 15.5556 28.4429 15.5556 28.9143 15.7111C29.0714 15.8667 29.2286 15.8667 29.3857 16.0222C29.5429 16.1778 29.7 16.3333 29.7 16.4889C29.7 16.6444 29.8571 16.9556 29.8571 17.1111C29.8571 17.2667 29.8571 17.5778 29.7 17.7333Z"
            fill="#00A974"
          />
          <ellipse cx="11.9429" cy="16.9244" rx="3.01714" ry="2.98667" fill="white" />
          <ellipse cx="21.9996" cy="16.9244" rx="3.01714" ry="2.98667" fill="white" />
          <ellipse cx="32.0562" cy="16.9244" rx="3.01714" ry="2.98667" fill="white" />
        </svg>
      </Link>
    </div>
  );
};

export default WhatsAppBubble;