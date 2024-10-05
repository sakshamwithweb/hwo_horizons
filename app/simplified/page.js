import Navbar from '@/components/Navbar'
import EducationalModules from '@/components/Simplified/EducationalModules'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar destination="advanced" />
      <div className="flex">
        <EducationalModules />
        <div className="w-full p-8">
          <h1 className="text-3xl font-bold">3D Exoplanet Visualization</h1>
          <p className="mt-4">This section will contain the 3D interactive visualization of exoplanets.</p>
        </div>
      </div>

    </div>
  )
}

export default page