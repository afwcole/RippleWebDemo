export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ProblemBlocks from '@/components/problem-blocks'
import Simulator from '@/components/simulator'

export default function Home() {
  return (
    <>
      <Hero />
      <Simulator />
      <ProblemBlocks />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  )
}
