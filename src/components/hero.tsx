"use client"

import ModalVideo from '@/components/modal-video'
import { useState } from 'react'
import Image from 'next/image'
import Hero1 from '@../../public/images/hero-1.jpeg'
import Hero2 from '@../../public/images/hero-2.jpeg'
import VideoThumb1 from '@../../public/images/phase-1-thumbnail.png'
import VideoThumb2 from '@../../public/images/phase-2-thumbnail.png'

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="470" r="100" />
            <circle cx="125" cy="470" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-16 pb-12 md:pt-20 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">

            {/* Carousel Section */}
            <div className='relative w-full pt-20 pb-10'>
              {/* Carousel */}
              <div id="default-carousel" className="absolute inset-0 -z-[2] bg-black bg-opacity-70" data-carousel="slide" data-carousel-interval="7000">
                <div className="relative overflow-hidden roundedLg h-full">
                  <div className="hidden duration-[650ms] ease-linear" data-carousel-item>
                    <Image src={Hero1} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 brightness-[0.4]" alt="..."/>
                  </div>
                  <div className="hidden duration-[650ms] ease-linear" data-carousel-item>
                    <Image src={Hero2} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 brightness-[0.4]" alt="..."/>
                  </div>
                </div>
              </div>

              {/* Info */}
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-4 text-white" data-aos="zoom-y-out">
                Send Ripple to any phone. <br />
                <span className='text-6xl text-gray-100'> No Internet. No Smartphone. <br /></span>
                <span className="text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  No Problem!
                </span>
              </h1>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-white mb-8 font-semibold" data-aos="zoom-y-out" data-aos-delay="150">
                  Financial empowerment and inclusion for over a billion people without internet access or quality smartphones. Create accounts, send XRP and more!
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                  <div>
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 font-semibold"
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setModalOpen(true);
                      }}
                    >
                      Watch Explainer
                    </a>
                  </div>
                  <div>
                    <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4  font-semibold" href="#simulator">Try Simulator</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='relative grid sm:grid-cols-1 md:grid-cols-2  grid-flow-row gap-4'>
            <ModalVideo
              modalOpen={modalOpen} 
              setModalOpen={setModalOpen}
              thumb={VideoThumb1}
              thumbWidth={600}
              thumbHeight={432}
              thumbAlt="Phase 1 video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080}
              videoTitle="Watch Phase 1 full video (3 min)"/>

            <ModalVideo
              modalOpen={modalOpen1} 
              setModalOpen={setModalOpen1}
              thumb={VideoThumb2}
              thumbWidth={600}
              thumbHeight={432}
              thumbAlt="Phase 2 video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080}
              videoTitle="Watch Phase 2 full video (3 min)" />
          </div>
        </div>

      </div>
    </section>
  )
}