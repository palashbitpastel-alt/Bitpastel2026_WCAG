"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Modal from "@/components/Modal"
import useScrollToNews from "@/hooks/useScrollToNews";
import { throttle, scrollToSection } from "@/utils/navigationUtils";


// Optimized throttle function
// const throttle = (func: Function, delay: number) => {
//   let timeoutId: NodeJS.Timeout | null = null
//   let lastExecTime = 0

//   return (...args: any[]) => {
//     const currentTime = Date.now()

//     if (currentTime - lastExecTime > delay) {
//       func(...args)
//       lastExecTime = currentTime
//     } else {
//       if (timeoutId) clearTimeout(timeoutId)
//       timeoutId = setTimeout(
//         () => {
//           func(...args)
//           lastExecTime = Date.now()
//         },
//         delay - (currentTime - lastExecTime),
//       )
//     }
//   }
// }
interface HomePageProps {
  forceModalOpen?: boolean;
  onModalClose?: () => void;
}
const Header = ({ forceModalOpen = false, onModalClose }: HomePageProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [pendingScroll, setPendingScroll] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const pathname = usePathname()
  const router = useRouter()
  const { scrollToNews } = useScrollToNews();
  // Memoize computed values with better optimization
  const isHomePage = useMemo(() => pathname === "/", [pathname])


  // Refs for navigation and scroll handling
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close modal on route change
  useEffect(() => {
    setIsModalOpen(false)
  }, [pathname])

  // Simplified and faster navigation handler
  const handleNavigation = useCallback(
    (path: string, e?: React.MouseEvent) => {
      if (e) e.preventDefault()

      // Immediate navigation without blocking
      router.push(path)
    },
    [router],
  )

  
  const handleScroll = useMemo(
    () =>
      throttle(() => {
        // Only check sections if on home page
        if (!isHomePage) return

        const sections = ["services", "stories"]
        let currentSection = null

        for (const section of sections) {
          const el = document.getElementById(section)
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section
              break
            }
          }
        }

        setActiveSection(currentSection)
      }, 16), // ~60fps throttling
    [isHomePage],
  )

  // Scroll event listener with passive option for better performance
  useEffect(() => {
    if (typeof window === "undefined") return

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Mobile header scroll state
  useEffect(() => {
    if (typeof window === "undefined") return
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Handle pending scroll after navigation
  useEffect(() => {
    if (isHomePage && pendingScroll) {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        scrollToSection(pendingScroll)
      }, 100)

      return () => {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
      }
    }
  }, [isHomePage, pendingScroll, scrollToSection])

  // Handle initial hash navigation
  useEffect(() => {
    if (isHomePage && typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        const sectionId = hash.substring(1)
        setTimeout(() => {
          scrollToSection(sectionId)
        }, 100)
      }
    }
  }, [isHomePage, scrollToSection])

  // Optimized link click handler
  const handleLinkClick = useCallback(
    (e: React.MouseEvent, sectionId: string) => {
      e.preventDefault()
      if (!isHomePage) {
        setPendingScroll(sectionId)
        handleNavigation("/")
      } else {
        scrollToSection(sectionId)
      }
    },
    [isHomePage, handleNavigation, scrollToSection],
  )

  // Handle logo click
  const handleLogoClick = useCallback(
    (e: React.MouseEvent) => {
      if (isHomePage) {
        e.preventDefault()
        window.history.pushState({}, "", "/")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else {
        setPendingScroll(null)
        handleNavigation("/")
      }
    },
    [isHomePage, handleNavigation],
  )

  // Optimized culture page navigation - removed unnecessary checks
  const handleCultureClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()

      if (pathname === "/culture") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        // Direct navigation without additional logic
        router.push("/culture")
      }
    },
    [pathname, router],
  )

  // Handle chat button click
  const handleChatClick = useCallback(() => {
    setIsModalOpen(true)
  }, [])
  const handleModalClose = () => {
    setIsModalOpen(false);
    onModalClose?.();
  };
  // Function to scroll to news section


  return (
    <>
      {/* ── Desktop / Tablet pill header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 md:pt-4">
        <div className="container mx-auto">

          {/* Desktop pill – visible lg+ */}
          <div
            className="hidden lg:flex justify-between items-center header-logo"
            style={{
              borderRadius: "100px",
              border: "0.5px solid rgba(180, 180, 180, 0.50)",
              background: "rgba(255, 255, 255, 0.60)",
              boxShadow: "1px 1px 8.8px 0 rgba(0, 0, 0, 0.13)",
              height: "60px",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              paddingLeft: "30px",
              paddingRight: "10px",
            }}
          >
            <Link href="/" prefetch={true} onClick={handleLogoClick}>
              <Image src="/images/icons/bp_dark_logo.svg" alt="Bitpastel Logo" width={101} height={28} priority />
            </Link>

            <nav className="flex space-x-8 items-center">
              <button
                onClick={(e) => handleLinkClick(e, "services")}
                className={`nav-dark ${activeSection === "services" ? "is-active" : ""} ${pathname === "/horizon" ? "horizon-nav-menu" : ""}`}
                style={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: 400 }}
              >
                Services
              </button>
              <button
                onClick={scrollToNews}
                className={`nav-dark ${activeSection === "stories" ? "is-active" : ""} ${pathname === "/horizon" ? "horizon-nav-menu" : ""}`}
                style={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: 400 }}
              >
                Stories
              </button>
              <Link
                prefetch={true}
                href="/culture"
                onClick={handleCultureClick}
                className={`nav-dark ${pathname === "/culture" ? "is-active" : ""} ${pathname === "/horizon" ? "horizon-nav-menu" : ""}`}
                style={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: 400 }}
              >
                Culture
              </Link>
              <Link
                prefetch={true}
                className={`new-btn-design flex items-center justify-center transition-all duration-200 ${pathname === "/horizon" ? "unfilled_button" : ""}`}
                href="#"
                scroll={false}
                onClick={(e) => { e.preventDefault(); handleChatClick(); }}
              >
                Chat with Us
              </Link>
            </nav>
          </div>

          {/* Mobile / tablet logo only – visible below lg */}
          <div
            className="lg:hidden flex justify-center items-center transition-all duration-300"
            style={{
              height: "56px",
              background: isScrolled ? "#FFF" : "transparent",
              boxShadow: isScrolled ? "0 1px 8px 0 rgba(0,0,0,0.10)" : "none",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <Link href="/" prefetch={true} onClick={handleLogoClick}>
              <Image
                src={isScrolled ? "/images/icons/7a.png" : "/images/icons/bp_logo_mob_white.svg"}
                alt="Bitpastel Logo"
                width={101}
                height={28}
                priority
              />
            </Link>
          </div>

        </div>
      </header>

      <Modal open={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default Header;
