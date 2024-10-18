// src/components/Reacteg.jsx
import React from 'react';

const Reacteg = () => {
  return (
   <div
      class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div class="p-6">
        <h3 class="text-lg font-semibold">Heading</h3>
        <p class="mt-2 text-sm text-gray-500 leading-relaxed">I am from react
          </p>
        <button type="button"
          class="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700">View</button>
      </div>
    </div>
  );
};

export default Reacteg;