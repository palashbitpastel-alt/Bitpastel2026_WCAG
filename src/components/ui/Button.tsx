'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'teal';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-primary-teal text-white hover:bg-opacity-90 focus:ring-primary-teal',
    secondary: 'bg-primary-white text-text-dark hover:bg-gray-100 focus:ring-gray-300',
    teal: 'bg-primary-teal text-white hover:bg-opacity-90 focus:ring-primary-teal'
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm h-8',
    md: 'px-4 py-2 h-10',
    lg: 'px-5 py-3 text-lg h-12'
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        font-roboto
        font-medium
        rounded
        transition-all
        duration-150 
        focus:outline-none 
        focus:ring-2 
        focus:ring-opacity-50
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;