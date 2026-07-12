import React from 'react';
import { createRoot } from 'react-dom/client';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import beforeImg from '../images/before.jpeg';
import afterImg from '../images/after.jpeg';

const SliderComponent = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={beforeImg} alt="Sebelum - Steering Rack Berkarat" />}
        itemTwo={<ReactCompareSliderImage src={afterImg} alt="Selepas - Stereng Bersih" />}
        style={{ width: '100%', height: '100%' }}
      />
      {/* Overlays */}
      <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-bold z-30 flex items-center gap-1.5 pointer-events-none text-white max-w-[45%]">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-400 pointer-events-none shrink-0"></span>
        <span className="truncate">SEBELUM <span className="hidden sm:inline">(BERKARAT)</span></span>
      </div>
      <div className="absolute bottom-3 right-3 bg-[#E30613] px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-bold z-30 flex items-center gap-1.5 pointer-events-none text-white max-w-[45%] text-right justify-end">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white pointer-events-none shrink-0"></span>
        <span className="truncate">SELEPAS <span className="hidden sm:inline">(REFURBISHED)</span></span>
      </div>
    </div>
  );
};

// Mount the component
const rootElement = document.getElementById('react-compare-slider-root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<SliderComponent />);
}
