import Image from 'next/image'
import TestimonialImage from '@../../public/images/gradient.png'

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Read what people think of RippleMobile</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out"> Hear from others as they share their perspectives on the impact of RippleMobile on their financial interactions and the opportunities it unlocks.</p>
          </div>
          
          {/* Testimonials */}
          <div className="max-w-3xl mx-auto" data-aos="zoom-y-out">
            {/* Testimonial - 1 */}
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">  
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ As a software engineer, I find RippleMobile to be a brilliantly designed solution. Its robust backend, coupled with a clean and intuitive interface, will make it a joy to work with. The incorporation of USSD technology will be widely accepted in a lot of low and middle income markets. “                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Quame Eugene</cite>
                <div className="text-gray-600">
                  <span>Software Engineer</span>
                </div>
              </div>
            </div>

            {/* Testimonial - 2 */}
            <div className="relative flex items-start mt-10 border-2 border-gray-200 rounded bg-white">  
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 02" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ RippleMobile is a product I can us. Its clear and familiar interface makes it seamlessly integrate into my daily operations. I don't need to be a tech expert to use it. “                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Mary</cite>
                <div className="text-gray-600">
                  <span>Vendor</span>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}