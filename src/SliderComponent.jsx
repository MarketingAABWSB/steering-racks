import React from 'react';
import { createRoot } from 'react-dom/client';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const SliderComponent = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="images/rusty_steering_rack_1783398632760.png" alt="Sebelum - Steering Rack Berkarat" />}
        itemTwo={<ReactCompareSliderImage src="images/clean_steering_rack_1783398623776.png" alt="Selepas - Stereng Bersih" />}
        style={{ width: '100%', height: '100%' }}
      />
      {/* Overlays */}
      <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold z-30 flex items-center gap-1.5 pointer-events-none text-white">
        <span className="w-2 h-2 rounded-full bg-gray-400 pointer-events-none"></span>SEBELUM (BERKARAT)
      </div>
      <div className="absolute bottom-4 right-4 bg-[#E30613] px-3 py-1.5 rounded-lg text-xs font-bold z-30 flex items-center gap-1.5 pointer-events-none text-white">
        <span className="w-2 h-2 rounded-full bg-white pointer-events-none"></span>SELEPAS (REFURBISHED)
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
