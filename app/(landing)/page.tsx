"use client";

import { LandingHero } from "@/components/landing-hero"
import { LandingNavbar } from "@/components/landing-navbar"


const page = () => {
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
    </div>
  )
}

export default page
