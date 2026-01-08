"use client";

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/effect-flip';
import 'swiper/css/free-mode';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  category: string;
  images: string[];
  hoverImage?: string;
  link: string
};

const OurProjects = () => {


  const projects: Project[] = [
  {
    "id": 1,
    "title": "MVD",
    "category": "Fashion",
    "link": "https://www.manieredevoir.com/",
    "images": [
      "/images/project/MDV/mdv_mockup_V04D.webp",
      "/images/project/MDV/mdv_mockup_V04C.webp",
      "/images/project/MDV/mdv_mockup_V04B.webp",
      "/images/project/MDV/mdv_mockup_V04A.webp",
    ],
    "hoverImage": "/images/project/MDV/mdv_mockup_V04C.webp"
  },
  {
    "id": 2,
    "title": "Circulr",
    "category": "Sunglasses & Eye Frames",
    "link": "https://circulr.co/",
    "images": [
      "/images/project/Circulr/circulr_mockup_V03A.webp",
      "/images/project/Circulr/circulr_mockup_V03B.webp"
    ],
    "hoverImage": "/images/project/Circulr/circulr_mockup_V03B.webp"
  },
  {
    "id": 3,
    "title": "The Couture Club",
    "category": "Fashion",
    "link": "https://www.thecoutureclub.com",
    "images": [
      "/images/project/Baee/Baee_mockup_V01.webp",
      "/images/project/Baee/Baee_mockup_V02.webp",
      "/images/project/Baee/Baee_mockup_V03.webp",
    ],
    "hoverImage": "/images/project/TheCoutureClub/mockup1.webp"
  },
  {
    "id": 4,
    "title": "Mauvais",
    "category": "Fashion",
    "link": "https://mauvais.co.uk/",
    "images": [
      "/images/project/Baee/Baee_mockup_V04.webp",
     "/images/project/Baee/Baee_mockup_V03.webp",
    ],
    "hoverImage": "/images/project/Mauvais/mockup1.webp"
  },
  {
    "id": 5,
    "title": "Amity Alexandra",
    "category": "Jewellery",
    "link": "https://amityalexandra.com",
    "images": [
      "/images/project/Baee/Baee_mockup_V02.webp"
    ],
    "hoverImage": "/images/project/AmityAlexandra/mockup1.webp"
  },
  {
    "id": 6,
    "title": "Lovinity",
    "category": "Jewellery",
    "link": "https://lovinitydiamond.com",
    "images": [
      "/images/project/Baee/Baee_mockup_V01.webp"
    ],
    "hoverImage": "/images/project/Lovinity/mockup1.webp"
  },
  {
    "id": 7,
    "title": "Auriga Jewelery",
    "category": "Jewellery",
    "link": "https://aurigajewelry.com/",
    "images": [
      "/images/project/Baee/Baee_mockup_V04.webp",
      "/images/project/Baee/Baee_mockup_V01.webp"
    ],
    "hoverImage": "/images/project/AurigaJewelery/mockup1.webp"
  },
  {
    "id": 8,
    "title": "JZN Market",
    "category": "Sim & Top-ups",
    "link": "https://jznmarket.com/",
    "images": [
      "/images/project/Baee/Baee_mockup_V03.webp"
    ],
    "hoverImage": "/images/project/JZNMarket/mockup1.webp"
  },
  {
    "id": 9,
    "title": "Miss Mini",
    "category": "Fashion",
    "link": "https://missmini.com/",
    "images": [
       "/images/project/Baee/Baee_mockup_V01.webp",
       "/images/project/Baee/Baee_mockup_V04.webp"
    ],
    "hoverImage": "/images/project/MissMini/mockup1.webp"
  },
  {
    "id": 10,
    "title": "Visual Displays",
    "category": "Audio visual equipment",
    "link": "https://visualdisplays.co.uk/",
    "images": [
       "/images/project/Baee/Baee_mockup_V03.webp"
    ],
    "hoverImage": "/images/project/VisualDisplays/mockup1.webp"
  },
  {
    "id": 11,
    "title": "Edit London",
    "category": "Fashion",
    "link": "https://www.theeditldn.com/en-intl",
    "images": [
       "/images/project/Baee/Baee_mockup_V02.webp"
    ],
    "hoverImage": "/images/project/EditLondon/mockup1.webp"
  },
  {
    "id": 12,
    "title": "Roofing Outlet",
    "category": "Building supplies",
    "link": "https://www.roofingoutlet.co.uk/",
    "images": [
      "/images/project/Baee/Baee_mockup_V04.webp"
    ],
    "hoverImage": "/images/project/RoofingOutlet/mockup1.webp"
  },
  {
    "id": 13,
    "title": "Kite Beauty",
    "category": "Beauty",
    "link": "https://kitebeauty.co/",
    "images": [
       "/images/project/Baee/Baee_mockup_V01.webp",
      "/images/project/KiteBeauty/mockup2.webp"
    ],
    "hoverImage": "/images/project/KiteBeauty/mockup1.webp"
  },
  {
    "id": 14,
    "title": "Pepa London",
    "category": "Fashion - Kids",
    "link": "https://pepalondon.com/",
    "images": [
      "/images/project/Baee/Baee_mockup_V02.webp"
    ],
    "hoverImage": "/images/project/PepaLondon/mockup1.webp"
  },
  {
    "id": 15,
    "title": "Kaiia",
    "category": "Fashion",
    "link": "https://www.kaiiathelabel.com/",
    "images": [
      "/images/project/Baee/Baee_mockup_V03.webp"
    ],
    "hoverImage": "/images/project/Kaiia/mockup1.webp"
  },
  {
    "id": 16,
    "title": "Public Desire",
    "category": "Fashion",
    "link": "https://www.publicdesire.com/",
    "images": [
       "/images/project/Baee/Baee_mockup_V04.webp"
    ],
    "hoverImage": "/images/project/PublicDesire/mockup1.webp"
  },
  {
    "id": 17,
    "title": "A Man & His Cave",
    "category": "Online entertainment & furnishing retailer",
    "link": "https://amanandhiscave.com/",
    "images": [
     "/images/project/Baee/Baee_mockup_V03.webp",
      "/images/project/Baee/Baee_mockup_V01.webp"
    ],
    "hoverImage": "/images/project/AManAndHisCave/mockup1.webp"
  },
  {
    "id": 18,
    "title": "Spring Copanhagen",
    "category": "Gifts",
    "link": "https://en.springcopenhagen.com/",
    "images": [
      "/images/project/Baee/Baee_mockup_V02.webp",
       "/images/project/Baee/Baee_mockup_V04.webp"
    ],
    "hoverImage": "/images/project/SpringCopenhagen/mockup1.webp"
  },
  {
    "id": 19,
    "title": "Flask Fine Wines",
    "category": "Alcoholic beverages",
    "link": "https://flaskfinewines.com/",
    "images": [
       "/images/project/Baee/Baee_mockup_V03.webp"
    ],
    "hoverImage": "/images/project/FlaskFineWines/mockup1.webp"
  },
  {
    "id": 20,
    "title": "Embassy London",
    "category": "Fashion",
    "link": "https://embassylondon.co.uk/",
    "images": [
      "/images/project/Baee/Baee_mockup_V01.webp"
    ],
    "hoverImage": "/images/project/EmbassyLondon/mockup1.webp"
  },
  {
    "id": 21,
    "title": "Tinted Fashion",
    "category": "Fashion",
    "link": "https://tintedfashion.be/",
    "images": [
       "/images/project/Baee/Baee_mockup_V04.webp"
    ],
    "hoverImage": "/images/project/TintedFashion/mockup1.webp"
  },
  {
    "id": 22,
    "title": "Rokoko",
    "category": "Motion-capture hardware and software",
    "link": "https://store.rokoko.com/",
    "images": [
      "/images/project/Baee/Baee_mockup_V02.webp"
    ],
    "hoverImage": "/images/project/Rokoko/mockup1.webp"
  },
  {
    "id": 23,
    "title": "Warm Nordic",
    "category": "Designed furniture, lighting, and home accessories",
    "link": "https://warmnordic.com/en",
    "images": [
     "/images/project/Baee/Baee_mockup_V01.webp"
    ],
    "hoverImage": "/images/project/WarmNordic/mockup1.webp"
  }
];


  const allCategories: string[] = projects.map((project: Project) => project.category);
  const uniqueCategories: string[] = Array.from(new Set(allCategories));
  const categories: string[] = ["All", ...uniqueCategories];

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeThumbIndex, setActiveThumbIndex] = useState<number>(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Filter projects based on active category
  const filteredProjects: Project[] = activeCategory === "All" 
    ? projects 
    : projects.filter((project: Project) => project.category === activeCategory);

  // Handle category changes with animation
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Match this duration with your CSS transition duration
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const openModal = (project: Project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
    setActiveThumbIndex(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
    setThumbsSwiper(null);
  };

  return (
    <section id="ourProjects" className="md:pt-[90px] pt-[50px]">

      <div className="container mx-auto px-4 overflow-hidden">
        <h2 className="font-[700] font-source text-center text-title md:mb-0 mb-3 slide-up">
          Industries We've Transformed
        </h2>
        
        {/* Category Tabs */}
        <ul className="nav-tabs nav slide-up font-source md:pt-[80px] pt-[20px]">
          {categories.map((category: string) => (
            <li className='nav-item font-source subheading'>
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 nav-link subheading transition-colors ${
                activeCategory === category
                ? 'active-category text-accent-green'
                : ''
                }`}
                >
              {category}
            </button>
              </li>
          ))}
        </ul>

        {/* Projects Grid */}
        <div className="project-cards-inner">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pt-[50px] pt-[20px] pb-[120px] gap-10">
              {filteredProjects.map((project: Project, index: number) => (
                <div 
                  key={project.id}
                  className={`project-card ${isTransitioning ? 'opacity-0' : 'opacity-100 slide-up'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="project-image relative h-[300px] overflow-hidden">
                    <div className="absolute inset-0">
                      <div className={`absolute inset-0 image-transition`}>
                      {/* <div className={`absolute inset-0 image-transition ${
                        hoveredProject === project.id && project.hoverImage ? 'opacity-0' : 'opacity-100'
                      }`}> */}
                        <Image 
                          src={project.images[0]} 
                          alt={`${project.title} cover image`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      {/* {project.hoverImage && (
                        <div className={`absolute inset-0 image-transition ${
                          hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <Image 
                            src={project.hoverImage} 
                            alt={`${project.title} hover image`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )} */}
                    </div>
                  </div>
                  <div className="text-center pt-12 pb-16">
                   {/* <Link href={project.link} className=""> */}
                      <h3 className="text-title subheading font-source font-[700]">
                        {project.title}
                      </h3>
                    {/* </Link> */}
                    <button
                      onClick={() => openModal(project)}
                      className="min-w-[96px] card-button rounded-[4px] bg-green-btn text-primary-white py-2 px-5 w-auto mx-auto hover:bg-opacity-90 transition-opacity button-hover"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`py-20 text-center text-gray-500 ${isTransitioning ? 'opacity-0' : 'opacity-100 slide-up'}`}>
              No projects found in this category
            </div>
          )}
        </div>
      </div>

      {/* Modal with Swiper and Thumbs */}
      {isModalOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className={`bg-white rounded-lg max-w-6xl w-full max-h-[90vh] flex flex-col scale-in`}>
            <div className="flex justify-between items-center border-b p-4">
              <div>
                <h3 className="text-title titile font-bold ">{currentProject.title}</h3>
                <p className="text-dark">{currentProject.category}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-dark hover:text-title p-1 rounded-full hover:bg-gray-100 transition-colors button-hover"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-grow p-4 overflow-auto">
              {/* Main Swiper */}
              <div className="mb-4 h-[400px] rounded-lg">
                <Swiper
                  modules={[Navigation, Thumbs]}
                  navigation
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  spaceBetween={10}
                  className="h-full"
                  onSlideChange={(swiper) => setActiveThumbIndex(swiper.activeIndex)}
                >
                  {currentProject.images.map((image: string, index: number) => (
                    <SwiperSlide key={index}>
                       <div className="flex justify-center items-center h-full w-full relative">
                        <Image
                          src={image}
                          alt={`${currentProject.title} - ${index + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Thumbs Swiper */}
              {currentProject.images.length > 1 && (
                <div className="mt-2 p-2 rounded-lg thubnail-slider relative">
                  <Swiper
                    modules={[FreeMode, Navigation, Thumbs]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={Math.min(currentProject.images.length, 4)}
                    freeMode={true}
                    watchSlidesProgress={true}
                    className="thumbs-gallery"
                  >
                    {currentProject.images.map((image: string, index: number) => (
                      <SwiperSlide key={index} className="cursor-pointer">
                        <div 
                          className={`flex justify-center items-center h-20 bg-white rounded overflow-hidden relative transition-all duration-200 thumb-hover ${
                            activeThumbIndex === index 
                              ? 'active-slide' 
                              : ''
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Thumb ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="100px"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProjects;