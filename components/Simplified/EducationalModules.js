"use client"
import { useState } from 'react';

const EducationalModules = () => {
  const [activeModule, setActiveModule] = useState(null);

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <div className="w-full lg:w-1/4 p-4 bg-gray-100 border-r border-gray-300 h-screen">
      <h2 className="text-xl font-bold mb-4">Learn About Habitable Worlds!</h2>

      <div className="space-y-4">
        {/* Module 1 */}
        <div className="border border-gray-400 rounded-md">
          <button
            onClick={() => toggleModule(1)}
            className="w-full text-left p-3 bg-gray-200 font-semibold"
          >
            Introduction to Habitable Worlds Observatory
          </button>
          {activeModule === 1 && (
            <div className="p-3 bg-white">
              <p>
                The Habitable Worlds Observatory (HWO) is designed to find Earth-like
                planets in the habitable zones of stars, using advanced technology to
                image and analyze exoplanets.
              </p>
              <img
                src="/images/hwo-telescope.png"
                alt="HWO Telescope"
                className="mt-3 rounded-md"
              />
            </div>
          )}
        </div>

        {/* Module 2 */}
        <div className="border border-gray-400 rounded-md">
          <button
            onClick={() => toggleModule(2)}
            className="w-full text-left p-3 bg-gray-200 font-semibold"
          >
            What Are Exoplanets?
          </button>
          {activeModule === 2 && (
            <div className="p-3 bg-white">
              <p>
                Exoplanets are planets that orbit stars outside our solar system. Some
                of them may have conditions suitable for life.
              </p>
              <img
                src="/images/exoplanets.png"
                alt="Exoplanets"
                className="mt-3 rounded-md"
              />
            </div>
          )}
        </div>

        {/* Module 3 */}
        <div className="border border-gray-400 rounded-md">
          <button
            onClick={() => toggleModule(3)}
            className="w-full text-left p-3 bg-gray-200 font-semibold"
          >
            How Do We Search for Habitable Worlds?
          </button>
          {activeModule === 3 && (
            <div className="p-3 bg-white">
              <p>
                Using techniques like direct imaging, HWO can capture the light from
                distant exoplanets and analyze their atmospheres.
              </p>
              <img
                src="/images/search-habitable-worlds.png"
                alt="Searching for Habitable Worlds"
                className="mt-3 rounded-md"
              />
            </div>
          )}
        </div>

        {/* Module 4 */}
        <div className="border border-gray-400 rounded-md">
          <button
            onClick={() => toggleModule(4)}
            className="w-full text-left p-3 bg-gray-200 font-semibold"
          >
            Habitability Criteria
          </button>
          {activeModule === 4 && (
            <div className="p-3 bg-white">
              <p>
                To be habitable, planets need to be in the "Goldilocks zone"—not too
                hot and not too cold, where liquid water can exist.
              </p>
              <img
                src="/images/habitability-zone.png"
                alt="Habitability Zone"
                className="mt-3 rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationalModules;
