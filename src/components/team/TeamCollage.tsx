'use client';
import Image from 'next/image';

const TeamCollage = () => {
  const townhallImages = [
    { id: 1, src: '/images/descover_possibilities.jpg', alt: 'Townhall image 1' },
    { id: 2, src: '/images/ibrahim_sir_image.png', alt: 'Townhall image 2' },
    { id: 3, src: '/images/descover_possibilities.jpg', alt: 'Townhall image 3' },
    { id: 4, src: '/images/ibrahim_sir_image.png', alt: 'Townhall image 4' },
    { id: 5, src: '/images/descover_possibilities.jpg', alt: 'Townhall image 5' },
    { id: 6, src: '/images/ibrahim_sir_image.png', alt: 'Townhall image 6' },
    { id: 7, src: '/images/descover_possibilities.jpg', alt: 'Townhall image 7' },
    { id: 8, src: '/images/ibrahim_sir_image.png', alt: 'Townhall image 8' },
    { id: 9, src: '/images/descover_possibilities.jpg', alt: 'Townhall image 9' },
  ];
  const desktopRows = [];
  for (let i = 0; i < townhallImages.length; i += 3) {
    desktopRows.push(townhallImages.slice(i, i + 3));
  }

  return (
    <section className="pt-[45px] relative" id="team">
      <div className="container mx-auto px-4">
        <div className="collage-area townhall-2024">
          <h2 className="text-accent-green font-bold text-center md:mb-16 mb-12">
            Bitpastel Townhall 2024
          </h2>

          <div className="collage-wrapper hidden lg:block">
            <div className="space-y-4">
              {desktopRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-4">
                  {row.map((image, imageIndex) => {
                    // Original alternating pattern: 40%-30%-30% and 30%-30%-40%
                    let widthClass = '';
                    if (rowIndex % 2 === 0) {
                      // Even row: 40% - 30% - 30%
                      if (imageIndex === 0) widthClass = 'flex-[4]';
                      else widthClass = 'flex-[3]';
                    } else {
                      // Odd row: 30% - 30% - 40%
                      if (imageIndex === 2) widthClass = 'flex-[4]';
                      else widthClass = 'flex-[3]';
                    }

                    return (
                      <div key={image.id} className={`${widthClass}`}>
                        <Image
                          src={image.src || '/placeholder.svg'}
                          alt={image.alt}
                          width={120}
                          height={350}
                          className="w-full object-cover rounded-lg bg-gray-200 max-h-[320px] h-full"
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="collage-wrapper lg:hidden block">
            <div className="grid w-[calc(100% - 20px)] grid-cols-2 gap-4">
              {townhallImages.map((image) => {
                return (
                  <div key={image.id}>
                    <Image
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      width={120}
                      height={320}
                      className="w-full object-cover rounded-lg bg-gray-200 max-h-[320px] h-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="collage-area townhall-2023 md:pt-16 pt-12">
          <h2 className="text-accent-green font-bold text-center md:mb-16 mb-12">
            Year-end Celebration 2023
          </h2>

          <div className="collage-wrapper hidden lg:block">
            <div className="space-y-4">
              {desktopRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-4">
                  {row.map((image, imageIndex) => {
                    // Original alternating pattern: 40%-30%-30% and 30%-30%-40%
                    let widthClass = '';
                    if (rowIndex % 2 === 0) {
                      // Even row: 40% - 30% - 30%
                      if (imageIndex === 0) widthClass = 'flex-[4]';
                      else widthClass = 'flex-[3]';
                    } else {
                      // Odd row: 30% - 30% - 40%
                      if (imageIndex === 2) widthClass = 'flex-[4]';
                      else widthClass = 'flex-[3]';
                    }

                    return (
                      <div key={image.id} className={`${widthClass}`}>
                        <Image
                          src={image.src || '/placeholder.svg'}
                          alt={image.alt}
                          width={120}
                          height={350}
                          className="w-full object-cover rounded-lg bg-gray-200 max-h-[320px] h-full"
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="collage-wrapper lg:hidden block">
            <div className="grid w-[calc(100% - 20px)] grid-cols-2 gap-4">
              {townhallImages.map((image) => {
                return (
                  <div key={image.id}>
                    <Image
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      width={120}
                      height={320}
                      className="w-full object-cover rounded-lg bg-gray-200 max-h-[320px] h-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="collage-area townhall-2023 md:pt-16 pt-12">
          <h2 className="text-accent-green font-bold text-center md:mb-16 mb-12">
            Year-end Celebration 2023
          </h2>

          <div className="collage-wrapper hidden lg:block">
            <div className="space-y-4">
              {desktopRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-4">
                  {row.map((image, imageIndex) => {
                    // Original alternating pattern: 40%-30%-30% and 30%-30%-40%
                    let widthClass = '';
                    if (rowIndex % 2 === 0) {
                      // Even row: 40% - 30% - 30%
                      if (imageIndex === 0) widthClass = 'flex-[4]';
                      else widthClass = 'flex-[3]';
                    } else {
                      // Odd row: 30% - 30% - 40%
                      if (imageIndex === 2) widthClass = 'flex-[4]';
                      else widthClass = 'flex-[3]';
                    }

                    return (
                      <div key={image.id} className={`${widthClass}`}>
                        <Image
                          src={image.src || '/placeholder.svg'}
                          alt={image.alt}
                          width={120}
                          height={350}
                          className="w-full object-cover rounded-lg bg-gray-200 max-h-[320px] h-full"
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="collage-wrapper lg:hidden block">
            <div className="grid w-[calc(100% - 20px)] grid-cols-2 gap-4">
              {townhallImages.map((image) => {
                return (
                  <div key={image.id}>
                    <Image
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      width={120}
                      height={320}
                      className="w-full object-cover rounded-lg bg-gray-200 max-h-[320px] h-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCollage;
