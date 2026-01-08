// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { cn } from '@/lib/utils';

// // Types
// export interface CarouselItem {
//   id: string;
//   type: 'image' | 'video';
//   src: string;
//   alt?: string;
//   caption?: string;
// }

// export interface CarouselProps {
//   items: CarouselItem[];
//   autoPlay?: boolean;
//   autoPlayInterval?: number;
//   showDots?: boolean;
//   showArrows?: boolean;
//   infinite?: boolean;
//   slidesToShow?: number;
//   slidesToScroll?: number;
//   className?: string;
// }

// interface UseCarouselProps {
//   itemsLength: number;
//   autoPlay?: boolean;
//   autoPlayInterval?: number;
//   infinite?: boolean;
//   slidesToShow?: number;
//   slidesToScroll?: number;
// }

// // Custom Hook
// const useCarousel = ({
//   itemsLength,
//   autoPlay = false,
//   autoPlayInterval = 3000,
//   infinite = true,
//   slidesToShow = 1,
//   slidesToScroll = 1,
// }: UseCarouselProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(autoPlay);
//   const [touchStart, setTouchStart] = useState<number | null>(null);
//   const [touchEnd, setTouchEnd] = useState<number | null>(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const maxIndex = Math.max(0, itemsLength - slidesToShow);

//   const nextSlide = useCallback(() => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => {
//       if (infinite) {
//         return prevIndex >= maxIndex ? 0 : Math.min(prevIndex + slidesToScroll, maxIndex);
//       }
//       return Math.min(prevIndex + slidesToScroll, maxIndex);
//     });

//     setTimeout(() => setIsTransitioning(false), 300);
//   }, [maxIndex, infinite, slidesToScroll, isTransitioning]);

//   const prevSlide = useCallback(() => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => {
//       if (infinite) {
//         return prevIndex <= 0 ? maxIndex : Math.max(prevIndex - slidesToScroll, 0);
//       }
//       return Math.max(prevIndex - slidesToScroll, 0);
//     });

//     setTimeout(() => setIsTransitioning(false), 300);
//   }, [maxIndex, infinite, slidesToScroll, isTransitioning]);

//   const goToSlide = useCallback(
//     (index: number) => {
//       if (isTransitioning) return;
//       setIsTransitioning(true);
//       setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
//       setTimeout(() => setIsTransitioning(false), 300);
//     },
//     [maxIndex, isTransitioning]
//   );

//   const pauseAutoPlay = useCallback(() => {
//     setIsPlaying(false);
//   }, []);

//   const resumeAutoPlay = useCallback(() => {
//     if (autoPlay) setIsPlaying(true);
//   }, [autoPlay]);

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isPlaying || itemsLength <= slidesToShow) return;

//     const interval = setInterval(nextSlide, autoPlayInterval);
//     return () => clearInterval(interval);
//   }, [isPlaying, itemsLength, autoPlayInterval, nextSlide, slidesToShow]);

//   // Touch handlers
//   const onTouchStart = (e: React.TouchEvent) => {
//     setTouchEnd(null);
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const onTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;

//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       nextSlide();
//     } else if (isRightSwipe) {
//       prevSlide();
//     }
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       switch (event.key) {
//         case 'ArrowLeft':
//           prevSlide();
//           break;
//         case 'ArrowRight':
//           nextSlide();
//           break;
//         default:
//           break;
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [nextSlide, prevSlide]);

//   return {
//     currentIndex,
//     maxIndex,
//     nextSlide,
//     prevSlide,
//     goToSlide,
//     pauseAutoPlay,
//     resumeAutoPlay,
//     onTouchStart,
//     onTouchMove,
//     onTouchEnd,
//     isPlaying,
//     isTransitioning,
//     canGoNext: infinite || currentIndex < maxIndex,
//     canGoPrev: infinite || currentIndex > 0,
//   };
// };

// // Carousel Arrows Component
// interface CarouselArrowsProps {
//   onPrevClick: () => void;
//   onNextClick: () => void;
//   className?: string;
//   canGoPrev?: boolean;
//   canGoNext?: boolean;
// }

// const CarouselArrows = ({
//   onPrevClick,
//   onNextClick,
//   className,
//   canGoPrev = true,
//   canGoNext = true,
// }: CarouselArrowsProps) => {
//   const getButtonClasses = (enabled: boolean) =>
//     cn(
//       'absolute top-1/2 -translate-y-1/2 z-10',
//       'w-10 h-10 rounded-full transition-all duration-200',
//       'flex items-center justify-center transition-all duration-200',
//       'focus:outline-none focus:ring-2',
//       'focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20',
//       'backdrop-blur-sm',
//       enabled
//         ? 'bg-black/20 hover:bg-black/40 text-white hover:scale-110 cursor-pointer'
//         : 'bg-black/10 text-white/50 cursor-not-allowed'
//     );

//   return (
//     <>
//       <button
//         onClick={canGoPrev ? onPrevClick : undefined}
//         disabled={!canGoPrev}
//         className={cn(getButtonClasses(canGoPrev), 'left-4')}
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-5 h-5" />
//       </button>

//       <button
//         onClick={canGoNext ? onNextClick : undefined}
//         disabled={!canGoNext}
//         className={cn(getButtonClasses(canGoNext), 'right-4')}
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-5 h-5" />
//       </button>
//     </>
//   );
// };

// // Carousel Dots Component
// interface CarouselDotsProps {
//   total: number;
//   current: number;
//   onDotClick: (index: number) => void;
//   maxVisible?: number;
//   className?: string;
// }

// const CarouselDots = ({
//   total,
//   current,
//   onDotClick,
//   maxVisible = 5,
//   className,
// }: CarouselDotsProps) => {
//   // If total is 5 or less, show all dots
//   if (total <= 5) {
//     const getDotSize = (index: number) => {
//       const distance = Math.abs(index - current);

//       if (distance === 0) return 'w-2.5 h-2.5'; // Current - largest
//       if (distance === 1) return 'w-2 h-2'; // Adjacent - medium
//       if (distance === 2) return 'w-2 h-2'; // Second adjacent - smaller
//       return 'w-1.5 h-1.5'; // Distant - smallest
//     };

//     const getDotOpacity = (index: number) => {
//       const distance = Math.abs(index - current);

//       if (distance === 0) return 'opacity-100';
//       if (distance === 1) return 'opacity-80';
//       if (distance === 2) return 'opacity-60';
//       return 'opacity-40';
//     };

//     return (
//       <div className={cn('flex items-center justify-center gap-1.5 py-4 h-[20px]', className)}>
//         {Array.from({ length: total }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => onDotClick(index)}
//             className={cn(
//               'rounded-full transition-all duration-200',
//               'rounded-full transition-all duration-200',
//               getDotSize(index),
//               getDotOpacity(index),
//               current === index ? 'bg-[#00a974]' : 'bg-[#DDDDDD] hover:bg-[#00a974]'
//             )}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     );
//   }

//   // For more than 5 dots, show only 5 with smart positioning
//   let startIndex = Math.max(0, current - 2);
//   let endIndex = Math.min(total - 1, startIndex + 4);

//   // Adjust if we're near the end
//   if (endIndex - startIndex < 4) {
//     startIndex = Math.max(0, endIndex - 4);
//   }

//   const visibleIndices = Array.from(
//     { length: endIndex - startIndex + 1 },
//     (_, i) => startIndex + i
//   );
//   const centerIndex = Math.floor(visibleIndices.length / 2);

//   const getDotSize = (visibleIndex: number) => {
//     const distance = Math.abs(visibleIndex - centerIndex);

//     if (distance === 0) return 'w-3 h-3'; // Center - largest
//     if (distance === 1) return 'w-2.5 h-2.5'; // Adjacent - medium
//     if (distance === 2) return 'w-2 h-2'; // Edge - smaller
//     return 'w-1.5 h-1.5'; // Should not happen with 5 dots
//   };

//   const getDotOpacity = (visibleIndex: number) => {
//     const distance = Math.abs(visibleIndex - centerIndex);

//     if (distance === 0) return 'opacity-100';
//     if (distance === 1) return 'opacity-80';
//     if (distance === 2) return 'opacity-60';
//     return 'opacity-40';
//   };

//   return (
//     <div className={cn('flex items-center justify-center gap-1.5 py-4 h-[20px]', className)}>
//       {visibleIndices.map((actualIndex, visibleIndex) => (
//         <button
//           key={actualIndex}
//           onClick={() => onDotClick(actualIndex)}
//           className={cn(
//             'rounded-full transition-all duration-200',
//             'rounded-full transition-all duration-200',
//             getDotSize(visibleIndex),
//             getDotOpacity(visibleIndex),
//             current === actualIndex ? 'bg-[#00a974]' : 'bg-[#DDDDDD] hover:bg-[#00a974]'
//           )}
//           aria-label={`Go to slide ${actualIndex + 1}`}
//         />
//       ))}
//     </div>
//   );
// };

// // Carousel Item Component
// interface CarouselItemProps {
//   item: CarouselItem;
//   isActive: boolean;
//   isVisible: boolean;
//   className?: string;
// }

// const CarouselItem = ({ item, isActive, isVisible, className }: CarouselItemProps) => {
//   return (
//     <div
//       className={cn(
//         'relative w-full h-full flex-shrink-0 overflow-hidden',
//         'transition-transform duration-300 ease-out',
//         className
//       )}
//     >
//       {item.type === 'image' ? (
//         // <Image
//         //   src={item.src}
//         //   alt={item.alt || 'Carousel item'}
//         //   fill
//         //   className="object-cover"
//         //   priority={isActive}
//         //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
//         //   quality={100}
//         //   unoptimized={false}
//         // />
//         <img src={item.src} alt={item.alt} className="w-full h-full" />
//       ) : (
//         <video src={item.src} className="w-full h-full object-cover" controls muted loop />
//       )}

//       {/* {item.caption && (
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
//           <p className="text-white text-sm font-medium">{item.caption}</p>
//         </div>
//       )} */}
//     </div>
//   );
// };

// // Main Instagram Carousel Component
// export const InstagramCarousel = ({
//   items,
//   autoPlay = false,
//   autoPlayInterval = 3000,
//   showDots = true,
//   showArrows = true,
//   infinite = true,
//   slidesToShow = 1,
//   slidesToScroll = 1,
//   className,
// }: CarouselProps) => {
//   const {
//     currentIndex,
//     maxIndex,
//     nextSlide,
//     prevSlide,
//     goToSlide,
//     pauseAutoPlay,
//     resumeAutoPlay,
//     onTouchStart,
//     onTouchMove,
//     onTouchEnd,
//     canGoNext,
//     canGoPrev,
//   } = useCarousel({
//     itemsLength: items.length,
//     autoPlay,
//     autoPlayInterval,
//     infinite,
//     slidesToShow,
//     slidesToScroll,
//   });

//   if (items.length === 0) {
//     return (
//       <div className="w-full  flex items-center justify-center">
//         <p className="text-gray-500">No items to display</p>
//       </div>
//     );
//   }

//   return (
//     <div
//       className={cn('relative w-full mx-auto overflow-hidden', '', className)}
//       onMouseEnter={pauseAutoPlay}
//       onMouseLeave={resumeAutoPlay}
//       onTouchStart={onTouchStart}
//       onTouchMove={onTouchMove}
//       onTouchEnd={onTouchEnd}
//     >
//       {/* Main carousel container */}
//       <div className="relative w-full h-full overflow-hidden">
//         <div
//           className="flex transition-transform duration-300 ease-out h-full"
//           style={{
//             transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
//           }}
//         >
//           {items.map((item, index) => (
//             <CarouselItem
//               key={item.id}
//               item={item}
//               isActive={index >= currentIndex && index < currentIndex + slidesToShow}
//               isVisible={Math.abs(index - currentIndex) <= slidesToShow}
//               className={slidesToShow > 1 ? `w-1/${slidesToShow}` : 'w-full'}
//             />
//           ))}
//         </div>

//         {/* Navigation arrows */}
//         {showArrows && items.length > slidesToShow && (
//           <CarouselArrows
//             onPrevClick={prevSlide}
//             onNextClick={nextSlide}
//             canGoPrev={canGoPrev}
//             canGoNext={canGoNext}
//           />
//         )}

//         {/* Slide counter */}
//         {/* {items.length > slidesToShow && (
//           <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
//             {Math.min(currentIndex + slidesToShow, items.length)} / {items.length}
//           </div>
//         )} */}
//       </div>

//       {/* Navigation dots */}
//       {showDots && items.length > slidesToShow && (
//         <CarouselDots
//           total={maxIndex + 1}
//           current={Math.floor(currentIndex / slidesToScroll)}
//           onDotClick={(index) => goToSlide(index * slidesToScroll)}
//           maxVisible={items.length > 5 ? 5 : undefined}
//         />
//       )}
//     </div>
//   );
// };

// export { CarouselItem };














// 'use client';
// import { useState, useEffect, useCallback, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { cn } from '@/lib/utils';

// export interface CarouselItem {
//   id: string;
//   type: 'image' | 'video';
//   src: string;
//   alt?: string;
//   caption?: string;
// }

// interface CarouselProps {
//   items: CarouselItem[];
//   autoPlay?: boolean;
//   autoPlayInterval?: number;
//   showDots?: boolean;
//   showArrows?: boolean;
//   infinite?: boolean;
//   slidesToShow?: number;
//   slidesToScroll?: number;
//   className?: string;
// }

// const useCarousel = ({
//   itemsLength,
//   autoPlay = false,
//   autoPlayInterval = 3000,
//   infinite = true,
//   slidesToShow = 1,
//   slidesToScroll = 1,
// }: {
//   itemsLength: number;
//   autoPlay?: boolean;
//   autoPlayInterval?: number;
//   infinite?: boolean;
//   slidesToShow?: number;
//   slidesToScroll?: number;
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(autoPlay);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const maxIndex = Math.max(0, itemsLength - slidesToShow);

//   const clearIntervalRef = useCallback(() => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   }, []);

//   // First declare nextSlide since it's used in startAutoPlay
//   const nextSlide = useCallback(() => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => {
//       if (infinite) {
//         return prevIndex >= maxIndex ? 0 : Math.min(prevIndex + slidesToScroll, maxIndex);
//       }
//       return Math.min(prevIndex + slidesToScroll, maxIndex);
//     });

//     setTimeout(() => setIsTransitioning(false), 300);
//   }, [maxIndex, infinite, slidesToScroll, isTransitioning]);

//   // Then declare startAutoPlay which uses nextSlide
//   const startAutoPlay = useCallback(() => {
//     clearIntervalRef();
//     if (autoPlay && itemsLength > slidesToShow) {
//       intervalRef.current = setInterval(() => {
//         nextSlide();
//       }, autoPlayInterval);
//     }
//   }, [autoPlay, autoPlayInterval, itemsLength, slidesToShow, nextSlide, clearIntervalRef]);

//   const prevSlide = useCallback(() => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => {
//       if (infinite) {
//         return prevIndex <= 0 ? maxIndex : Math.max(prevIndex - slidesToScroll, 0);
//       }
//       return Math.max(prevIndex - slidesToScroll, 0);
//     });

//     setTimeout(() => setIsTransitioning(false), 300);
//   }, [maxIndex, infinite, slidesToScroll, isTransitioning]);

//   const goToSlide = useCallback((index: number) => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
//     setTimeout(() => setIsTransitioning(false), 300);
//   }, [maxIndex, isTransitioning]);

//   const pauseAutoPlay = useCallback(() => {
//     setIsPlaying(false);
//     clearIntervalRef();
//   }, [clearIntervalRef]);

//   const resumeAutoPlay = useCallback(() => {
//     if (autoPlay) {
//       setIsPlaying(true);
//       startAutoPlay();
//     }
//   }, [autoPlay, startAutoPlay]);

//   useEffect(() => {
//     if (isPlaying) {
//       startAutoPlay();
//     }
//     return () => clearIntervalRef();
//   }, [isPlaying, startAutoPlay, clearIntervalRef]);

//   return {
//     currentIndex,
//     nextSlide,
//     prevSlide,
//     goToSlide,
//     pauseAutoPlay,
//     resumeAutoPlay,
//     isPlaying,
//     isTransitioning,
//     canGoNext: infinite || currentIndex < maxIndex,
//     canGoPrev: infinite || currentIndex > 0,
//   };
// };

// const InstagramCarousel = ({
//   items,
//   autoPlay = false,
//   autoPlayInterval = 2000,
//   showDots = true,
//   showArrows = true,
//   infinite = true,
//   slidesToShow = 1,
//   slidesToScroll = 1,
//   className,
// }: CarouselProps) => {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const {
//     currentIndex,
//     nextSlide,
//     prevSlide,
//     goToSlide,
//     pauseAutoPlay,
//     resumeAutoPlay,
//     isPlaying,
//     isTransitioning,
//     canGoNext,
//     canGoPrev,
//   } = useCarousel({
//     itemsLength: items.length,
//     autoPlay,
//     autoPlayInterval,
//     infinite,
//     slidesToShow,
//     slidesToScroll,
//   });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           resumeAutoPlay();
//         } else {
//           pauseAutoPlay();
//         }
//       },
//       { threshold: 0.7 }
//     );

//     if (carouselRef.current) {
//       observer.observe(carouselRef.current);
//     }

//     return () => {
//       if (carouselRef.current) {
//         observer.unobserve(carouselRef.current);
//       }
//     };
//   }, [pauseAutoPlay, resumeAutoPlay]);

//   if (items.length === 0) {
//     return <div className="w-full flex items-center justify-center">No items to display</div>;
//   }

//   return (
//     <div
//       ref={carouselRef}
//       className={cn('relative w-full overflow-hidden', className)}
//       onMouseEnter={pauseAutoPlay}
//       onMouseLeave={resumeAutoPlay}
//     >
//       <div className="relative w-full h-full overflow-hidden">
//         <div
//           className="flex transition-transform duration-300 ease-out h-full"
//           style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
//         >
//           {items.map((item) => (
//             <div
//               key={item.id}
//               className={cn(
//                 'relative w-full h-full flex-shrink-0 overflow-hidden',
//                 slidesToShow > 1 ? `w-1/${slidesToShow}` : 'w-full'
//               )}
//             >
//               {item.type === 'image' ? (
//                 <img src={item.src} alt={item.alt || ''} className="w-full h-full object-cover" />
//               ) : (
//                 <video
//                   src={item.src}
//                   className="w-full h-full object-cover"
//                   controls
//                   muted
//                   loop
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         {showArrows && items.length > slidesToShow && (
//           <>
//             <button
//               onClick={prevSlide}
//               disabled={!canGoPrev}
//               className={cn(
//                 'absolute left-2 top-1/2 -translate-y-1/2 z-10',
//                 'w-10 h-10 rounded-full transition-all duration-200',
//                 'flex items-center justify-center transition-all duration-200',
//                 'focus:outline-none focus:ring-2',
//                 'focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20',
//                 'backdrop-blur-sm',
//                 canGoPrev
//                   ? 'bg-black/20 hover:bg-black/40 text-white hover:scale-110 cursor-pointer'
//                   : 'bg-black/10 text-white/50 cursor-not-allowed'
//               )}
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={nextSlide}
//               disabled={!canGoNext}
//               className={cn(
//                 'absolute right-2 top-1/2 -translate-y-1/2 z-10',
//                 'w-10 h-10 rounded-full transition-all duration-200',
//                 'flex items-center justify-center transition-all duration-200',
//                 'focus:outline-none focus:ring-2',
//                 'focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20',
//                 'backdrop-blur-sm',
//                 canGoNext
//                   ? 'bg-black/20 hover:bg-black/40 text-white hover:scale-110 cursor-pointer'
//                   : 'bg-black/10 text-white/50 cursor-not-allowed'
//               )}
//               aria-label="Next slide"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </>
//         )}
//       </div>

//       {showDots && items.length > slidesToShow && (
//         <div className="flex justify-center items-center gap-1.5 py-4 h-[20px]">
//           {Array.from({ length: Math.ceil(items.length / slidesToScroll) }, (_, index) => {
//             const dotIndex = index * slidesToScroll;
//             const isActive = currentIndex >= dotIndex && 
//                             currentIndex < dotIndex + slidesToScroll;
//             return (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(dotIndex)}
//                 className={cn(
//                   'rounded-full transition-all duration-200',
//                   isActive ? 'bg-[#00a974] w-3 h-3' : 'bg-[#DDDDDD] w-2 h-2'
//                 )}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default InstagramCarousel;






"use client"
import { useState, useEffect, useCallback, useRef, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CarouselItem {
  id: string
  type: "image" | "video"
  src: string
  alt?: string
  caption?: string
}

interface CarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
  showArrows?: boolean
  infinite?: boolean
  slidesToShow?: number
  slidesToScroll?: number
  className?: string
}

const useCarousel = ({
  itemsLength,
  autoPlay = false,
  autoPlayInterval = 3000,
  infinite = true,
  slidesToShow = 1,
  slidesToScroll = 1,
}: {
  itemsLength: number
  autoPlay?: boolean
  autoPlayInterval?: number
  infinite?: boolean
  slidesToShow?: number
  slidesToScroll?: number
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const maxIndex = Math.max(0, itemsLength - slidesToShow)

  const clearIntervalRef = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  // First declare nextSlide since it's used in startAutoPlay
  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => {
      if (infinite) {
        return prevIndex >= maxIndex ? 0 : Math.min(prevIndex + slidesToScroll, maxIndex)
      }
      return Math.min(prevIndex + slidesToScroll, maxIndex)
    })
    setTimeout(() => setIsTransitioning(false), 300)
  }, [maxIndex, infinite, slidesToScroll, isTransitioning])

  // Then declare startAutoPlay which uses nextSlide
  const startAutoPlay = useCallback(() => {
    clearIntervalRef()
    if (autoPlay && itemsLength > slidesToShow) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, autoPlayInterval)
    }
  }, [autoPlay, autoPlayInterval, itemsLength, slidesToShow, nextSlide, clearIntervalRef])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => {
      if (infinite) {
        return prevIndex <= 0 ? maxIndex : Math.max(prevIndex - slidesToScroll, 0)
      }
      return Math.max(prevIndex - slidesToScroll, 0)
    })
    setTimeout(() => setIsTransitioning(false), 300)
  }, [maxIndex, infinite, slidesToScroll, isTransitioning])

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentIndex(Math.max(0, Math.min(index, maxIndex)))
      setTimeout(() => setIsTransitioning(false), 300)
    },
    [maxIndex, isTransitioning],
  )

  const pauseAutoPlay = useCallback(() => {
    setIsPlaying(false)
    clearIntervalRef()
  }, [clearIntervalRef])

  const resumeAutoPlay = useCallback(() => {
    if (autoPlay) {
      setIsPlaying(true)
      startAutoPlay()
    }
  }, [autoPlay, startAutoPlay])

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay()
    }
    return () => clearIntervalRef()
  }, [isPlaying, startAutoPlay, clearIntervalRef])

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseAutoPlay,
    resumeAutoPlay,
    isPlaying,
    isTransitioning,
    canGoNext: infinite || currentIndex < maxIndex,
    canGoPrev: infinite || currentIndex > 0,
  }
}

// Enhanced Carousel Dots Component
interface CarouselDotsProps {
  total: number
  current: number
  onDotClick: (index: number) => void
  maxVisible?: number
  className?: string
}

const CarouselDots = ({ total, current, onDotClick, maxVisible = 5, className }: CarouselDotsProps) => {
  // If total is 5 or less, show all dots
  if (total <= 5) {
    const getDotSize = (index: number) => {
      const distance = Math.abs(index - current)
      if (distance === 0) return "w-2.5 h-2.5" // Current - largest
      if (distance === 1) return "w-2 h-2" // Adjacent - medium
      if (distance === 2) return "w-2 h-2" // Second adjacent - smaller
      return "w-1.5 h-1.5" // Distant - smallest
    }

    const getDotOpacity = (index: number) => {
      const distance = Math.abs(index - current)
      if (distance === 0) return "opacity-100"
      if (distance === 1) return "opacity-80"
      if (distance === 2) return "opacity-60"
      return "opacity-40"
    }

    return (
      <div className={cn("flex items-center justify-center gap-1.5 py-4 h-[20px]", className)}>
        {Array.from({ length: total }, (_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={cn(
              "rounded-full transition-all duration-200",
              getDotSize(index),
              getDotOpacity(index),
              current === index ? "bg-[#00a974]" : "bg-[#DDDDDD] hover:bg-[#00a974]",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    )
  }

  // For more than 5 dots, show only 5 with smart positioning
  let startIndex = Math.max(0, current - 2)
  const endIndex = Math.min(total - 1, startIndex + 4)

  // Adjust if we're near the end
  if (endIndex - startIndex < 4) {
    startIndex = Math.max(0, endIndex - 4)
  }

  const visibleIndices = Array.from({ length: endIndex - startIndex + 1 }, (_, i) => startIndex + i)

  const centerIndex = Math.floor(visibleIndices.length / 2)

  const getDotSize = (visibleIndex: number) => {
    const distance = Math.abs(visibleIndex - centerIndex)
    if (distance === 0) return "w-3 h-3" // Center - largest
    if (distance === 1) return "w-2.5 h-2.5" // Adjacent - medium
    if (distance === 2) return "w-2 h-2" // Edge - smaller
    return "w-1.5 h-1.5" // Should not happen with 5 dots
  }

  const getDotOpacity = (visibleIndex: number) => {
    const distance = Math.abs(visibleIndex - centerIndex)
    if (distance === 0) return "opacity-100"
    if (distance === 1) return "opacity-80"
    if (distance === 2) return "opacity-60"
    return "opacity-40"
  }

  return (
    <div className={cn("flex items-center justify-center gap-1.5 py-4 h-[20px]", className)}>
      {visibleIndices.map((actualIndex, visibleIndex) => (
        <button
          key={actualIndex}
          onClick={() => onDotClick(actualIndex)}
          className={cn(
            "rounded-full transition-all duration-200",
            getDotSize(visibleIndex),
            getDotOpacity(visibleIndex),
            current === actualIndex ? "bg-[#00a974]" : "bg-[#DDDDDD] hover:bg-[#00a974]",
          )}
          aria-label={`Go to slide ${actualIndex + 1}`}
        />
      ))}
    </div>
  )
}

const InstagramCarousel = ({
  items,
  autoPlay = false,
  autoPlayInterval = 2000,
  showDots = true,
  showArrows = true,
  infinite = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  className,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseAutoPlay,
    resumeAutoPlay,
    isPlaying,
    isTransitioning,
    canGoNext,
    canGoPrev,
  } = useCarousel({
    itemsLength: items.length,
    autoPlay,
    autoPlayInterval,
    infinite,
    slidesToShow,
    slidesToScroll,
  });

  const touchOffset = useMemo(() => {
    return touchStartX !== null && touchCurrentX !== null 
      ? touchCurrentX - touchStartX 
      : 0;
  }, [touchStartX, touchCurrentX]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTransitioning) return;
    pauseAutoPlay();
    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
    setTouchCurrentX(touch.clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping || touchStartX === null) return;
    const touch = e.touches[0];
    setTouchCurrentX(touch.clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchCurrentX === null) {
      resetTouch();
      return;
    }

    const containerWidth = carouselRef.current?.offsetWidth || 0;
    const diff = touchCurrentX - touchStartX;
    const threshold = containerWidth * 0.1;

    if (diff < -threshold) {
      nextSlide();
    } else if (diff > threshold) {
      prevSlide();
    }

    resetTouch();
    resumeAutoPlay();
  };

  const handleTouchCancel = () => {
    resetTouch();
    resumeAutoPlay();
  };

  const resetTouch = () => {
    setIsSwiping(false);
    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          resumeAutoPlay()
        } else {
          pauseAutoPlay()
        }
      },
      { threshold: 0.7 },
    )

    if (carouselRef.current) {
      observer.observe(carouselRef.current)
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current)
      }
    }
  }, [pauseAutoPlay, resumeAutoPlay])

  if (items.length === 0) {
    return <div className="w-full flex items-center justify-center">No items to display</div>
  }

  const maxIndex = Math.max(0, items.length - slidesToShow)

  return (
   <div
      ref={carouselRef}
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out h-full"
          style={{
            transform: isSwiping
              ? `translateX(calc(${-currentIndex * (100 / slidesToShow)}% + ${touchOffset}px))`
              : `translateX(${-currentIndex * (100 / slidesToShow)}%)`,
            transition: isSwiping ? 'none' : 'transform 300ms ease-out',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={cn(
                "relative w-full h-full flex-shrink-0 overflow-hidden",
                slidesToShow > 1 ? `w-1/${slidesToShow}` : "w-full",
              )}
            >
              {item.type === "image" ? (
                <img src={item.src || "/placeholder.svg"} alt={item.alt || ""} className="w-full h-full object-cover" />
              ) : (
                <video src={item.src} className="w-full h-full object-cover" controls muted loop />
              )}
            </div>
          ))}
        </div>

        {showArrows && items.length > slidesToShow && (
          <>
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              className={cn(
                "absolute left-2 top-1/2 -translate-y-1/2 z-10",
                "w-10 h-10 rounded-full transition-all duration-200",
                "flex items-center justify-center transition-all duration-200",
                "focus:outline-none focus:ring-2",
                "focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20",
                "backdrop-blur-sm",
                canGoPrev
                  ? "bg-black/20 hover:bg-black/40 text-white hover:scale-110 cursor-pointer"
                  : "bg-black/10 text-white/50 cursor-not-allowed",
              )}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 z-10",
                "w-10 h-10 rounded-full transition-all duration-200",
                "flex items-center justify-center transition-all duration-200",
                "focus:outline-none focus:ring-2",
                "focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20",
                "backdrop-blur-sm",
                canGoNext
                  ? "bg-black/20 hover:bg-black/40 text-white hover:scale-110 cursor-pointer"
                  : "bg-black/10 text-white/50 cursor-not-allowed",
              )}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {showDots && items.length > slidesToShow && (
        <CarouselDots
          total={maxIndex + 1}
          current={Math.floor(currentIndex / slidesToScroll)}
          onDotClick={(index) => goToSlide(index * slidesToScroll)}
          maxVisible={items.length > 5 ? 5 : undefined}
        />
      )}
    </div>
  )
}

export default InstagramCarousel
