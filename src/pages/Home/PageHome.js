import React from 'react'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import { useTitle } from '../../hooks/useTitle'

const PageHome = () => {
  useTitle("Explore the Latest Computer Science E-Books with CodeBook");
  return (
    <main>
       <Hero />
       <FeaturedProducts/>
       <Testimonials/>
       <Faq/>
    </main>
  )
}

export default PageHome
