"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function LoadingBar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true) // Start as true for initial load

  useEffect(() => {
    // Set loading to true when the pathname changes (indicating a route navigation)
    // This will make the loader appear immediately on navigation.
    setIsLoading(true)

    // Immediately set loading to false after the effect runs.
    // This means the loader will only be visible for the brief period
    // it takes for the new page content to start rendering/hydrating.
    // If the page loads very fast, the loader might only flash or not be visible at all,
    // which aligns with not adding an unnecessary delay.
    setIsLoading(false)

    // No setTimeout needed here, as per your request.
    // The cleanup function is also not strictly necessary without a timer,
    // but keeping it doesn't harm.
    return () => {
      // Any cleanup if needed, though not directly related to a timer now.
    }
  }, [pathname]) // Re-run effect whenever the pathname changes

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <svg
            style={{
              left: "50%",
              top: "50%",
              position: "absolute",
              transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)",
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
      {/* Render children only when not loading */}
      <div className={isLoading ? "hidden" : ""}>{children}</div>
    </>
  )
}
