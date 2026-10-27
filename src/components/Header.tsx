"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });
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

// Map the current URL to its context-specific Free Quote path. The modal is
// the same; only the URL we reflect into history changes.
const getFreeQuotePath = (pathname: string | null | undefined): string => {
  if (!pathname) return "/free-quote";
  if (pathname.startsWith("/culture")) return "/culture/free-quote";
  if (pathname.startsWith("/careers")) return "/careers/free-quote";
  if (pathname.startsWith("/shopify")) return "/shopify/free-quote";
  return "/free-quote";
};

const isFreeQuotePath = (path: string | null | undefined): boolean => {
  if (!path) return false;
  return (
    path === "/free-quote" ||
    path === "/culture/free-quote" ||
    path === "/careers/free-quote" ||
    path === "/shopify/free-quote"
  );
};
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

  // Pages where the mobile header should always show the green logo on white bg
  const forceGreenMobileHeader = useMemo(() => {
    if (!pathname) return false
    return (
      pathname.startsWith("/privacy-policy") ||
      pathname.startsWith("/careers/applyJob") ||
      pathname.startsWith("/partners")
    )
  }, [pathname])


  // Refs for navigation and scroll handling
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  // Tracks the URL we should restore when closing the /free-quote modal
  const freeQuotePrevUrlRef = useRef<string | null>(null)
  // While set, the scroll handler must not override the active nav item. We set
  // the active section optimistically on click and hold it through the
  // programmatic scroll, so the indicator activates instantly and never gets
  // wiped if the scroll detection misses the trigger line.
  const activeLockRef = useRef<NodeJS.Timeout | null>(null)

  // Set the active nav item immediately and lock it for the scroll duration.
  const lockActiveSection = useCallback((section: string) => {
    setActiveSection(section)
    if (activeLockRef.current) clearTimeout(activeLockRef.current)
    activeLockRef.current = setTimeout(() => {
      activeLockRef.current = null
    }, 1000)
  }, [])

  // Close modal on route change (but ignore the synthetic free-quote paths
  // we push via window.history — usePathname won't update for plain pushState,
  // so this effect is naturally inert during /<scope>/free-quote)
  useEffect(() => {
    if (isFreeQuotePath(pathname)) return
    setIsModalOpen(false)
  }, [pathname])

  // Simplified and faster navigation handler
  const handleNavigation = useCallback(
    (path: string, e?: React.MouseEvent) => {
      if (e) e.preventDefault()

      // Immediate navigation without blocking
      // Home-page-only showcase: navigation disabled
      // router.push(path)
    },
    [router],
  )

  
  const handleScroll = useMemo(
    () =>
      throttle(() => {
        // Only check sections if on home page
        if (!isHomePage) return
        // Don't override the optimistic active set during a click-driven scroll.
        if (activeLockRef.current) return

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
        // Home-page-only showcase: navigation disabled
        // router.push("/culture")
      }
    },
    [pathname, router],
  )

  // Handle chat button click — opens the global "Free Quote" modal and reflects
  // the URL as /<scope>/free-quote (scope picked from the current page) without
  // triggering a Next.js navigation, so the current page stays mounted under it.
  const handleChatClick = useCallback(() => {
    // Home-page-only showcase: free quote modal disabled
    return
    if (typeof window !== "undefined") {
      const currentUrl =
        window.location.pathname + window.location.search + window.location.hash
      const targetPath = getFreeQuotePath(window.location.pathname)
      if (!isFreeQuotePath(window.location.pathname)) {
        freeQuotePrevUrlRef.current = currentUrl
        window.history.pushState(
          { bpFreeQuote: true, prev: currentUrl },
          "",
          targetPath
        )
      }
    }
    setIsModalOpen(true)
  }, [])

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false)
    if (typeof window !== "undefined" && isFreeQuotePath(window.location.pathname)) {
      // Returning to the page the user came from. history.back() preserves
      // scroll position and avoids the previous bug where closing redirected to "/".
      if (freeQuotePrevUrlRef.current) {
        window.history.back()
      } else {
        // Direct visit to a free-quote URL — fall back gracefully to the parent.
        const fallback =
          window.location.pathname.replace(/\/free-quote$/, "") || "/"
        router.replace(fallback)
      }
      freeQuotePrevUrlRef.current = null
    }
    onModalClose?.()
  }, [router, onModalClose])

  // If the user navigates back/forward while the modal is open, sync the modal
  // state with the URL.
  useEffect(() => {
    if (typeof window === "undefined") return
    const onPopState = () => {
      if (isFreeQuotePath(window.location.pathname)) {
        setIsModalOpen(true)
      } else {
        setIsModalOpen(false)
        freeQuotePrevUrlRef.current = null
      }
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  // Listen for the custom event dispatched by /free-quote/page.tsx and by the
  // mobile FloatingFooter's Contact icon. Pick up the prev URL from
  // window.history.state if a sibling component pushed /free-quote with it,
  // so closing the modal returns the user to where they came from.
  useEffect(() => {
    if (typeof window === "undefined") return
    const onOpen = () => {
      if (!freeQuotePrevUrlRef.current) {
        const prev = (window.history.state as { prev?: string } | null)?.prev
        if (prev) freeQuotePrevUrlRef.current = prev
      }
      setIsModalOpen(true)
    }
    window.addEventListener("bp:open-free-quote", onOpen as EventListener)
    return () =>
      window.removeEventListener("bp:open-free-quote", onOpen as EventListener)
  }, [])

  // If the parent forces the modal open (e.g. /free-quote layout), honor it.
  useEffect(() => {
    if (forceModalOpen) setIsModalOpen(true)
  }, [forceModalOpen])
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
            <Link href="/" prefetch={true} onClick={handleLogoClick} className="flex items-center h-full">
              <Image src="/images/icons/bp_dark_logo.svg" alt="Bitpastel home" width={101} height={28} priority className="block mt-[2px]" />
            </Link>

            <nav className="flex space-x-3 items-center">
              <button
                onClick={(e) => { lockActiveSection("services"); handleLinkClick(e, "services"); }}
                className={`nav-dark inline-flex items-center justify-center h-[44px] px-[10px] rounded-[4px] ${activeSection === "services" ? "is-active" : ""} `}
                style={{ fontFamily: "Roboto", fontSize: "18px", fontWeight: 400, lineHeight: "100%" }}
              >
                Services
              </button>
              <button
                onClick={() => { lockActiveSection("stories"); scrollToNews(); }}
                className={`nav-dark inline-flex items-center justify-center h-[44px] px-[10px] rounded-[4px] ${activeSection === "stories" ? "is-active" : ""} `}
                style={{ fontFamily: "Roboto", fontSize: "18px", fontWeight: 400, lineHeight: "100%" }}
              >
                Stories
              </button>
              <Link
                prefetch={true}
                href="#" /* original href: "/culture" */
                onClick={handleCultureClick}
                className={`nav-dark inline-flex items-center justify-center h-[44px] px-[10px] rounded-[4px] ${pathname === "/culture" ? "is-active" : ""} `}
                style={{ fontFamily: "Roboto", fontSize: "18px", fontWeight: 400, lineHeight: "100%" }}
              >
                Culture
              </Link>
              <Link
                prefetch={true}
                className={`new-btn-design flex items-center justify-center transition-all duration-200 `}
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
              background: isScrolled || forceGreenMobileHeader ? "#FFF" : "transparent",
              boxShadow: isScrolled || forceGreenMobileHeader ? "0 1px 8px 0 rgba(0,0,0,0.10)" : "none",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <Link href="/" prefetch={true} onClick={handleLogoClick} className="inline-block rounded-[4px]">
              <Image
                src={isScrolled || forceGreenMobileHeader ? "/images/icons/mb_green.svg" : "/images/icons/mb_dark.svg"}
                alt="Bitpastel home"
                width={101}
                height={28}
                priority
                // className="header-mob-logo"
              />
            </Link>
          </div>

        </div>
      </header>

      {/* Home-page-only showcase: free quote modal disabled
      <Modal
        open={isModalOpen}
        setIsModalOpen={((value) => {
          const next =
            typeof value === "function"
              ? (value as (prev: boolean) => boolean)(isModalOpen)
              : value
          if (next) {
            setIsModalOpen(true)
          } else {
            handleModalClose()
          }
        }) as React.Dispatch<React.SetStateAction<boolean>>}
      /> */}
    </>
  )
}

export default Header;
