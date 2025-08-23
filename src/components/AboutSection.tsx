import Image from 'next/image'
import { TestimonialsSection as TestimonialsMarquee } from "@/components/ui/testimonials-with-marquee"
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

const values = [
  {
    number: "01",
    title: "Expertise",
    description: "Our team of experts at Maize Homes Developments ensures that every project is executed with precision, expertise, and an unwavering commitment to attention to detail."
  },
  {
    number: "02", 
    title: "Quality",
    description: "At Maize Homes Developments, we maintain the highest standards of quality in materials and workmanship to deliver exceptional results that exceed industry norms."
  },
  {
    number: "03",
    title: "Sustainability", 
    description: "Our focus on sustainability at Maize Homes Developments means that every project we undertake is not only visually stunning but also environmentally friendly, ensuring a positive impact on the community and the environment."
  },
  {
    number: "04",
    title: "Innovation",
    description: "We bring innovative design solutions to the table at Maize Homes Developments, ensuring that every project stands out and reflects the unique style and needs of our clients."
  },
  {
    number: "05",
    title: "Collaboration", 
    description: "At Maize Homes Developments, we believe in working closely with our clients to turn their dreams into reality, fostering a collaborative approach that ensures their vision is brought to life."
  },
  {
    number: "06",
    title: "Commitment",
    description: "Our unwavering commitment to excellence at Maize Homes Developments means that we never compromise on quality, integrity, or the satisfaction of our clients."
  }
]

const testimonials = [
  {
    author: {
      name: "Arjun Patel",
      handle: "@arjun_patel",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Maize Homes Developments exceeded my expectations. Their attention to detail and commitment to sustainability are truly remarkable, and I am thrilled with the results.",
    href: "#"
  },
  {
    author: {
      name: "Emily Johnson",
      handle: "@emily_johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with Maize Homes Developments was a seamless experience. They ensured that every aspect of the project was perfect and tailored to my needs.",
    href: "#"
  },
  {
    author: {
      name: "Carlos Ramirez",
      handle: "@carlos_ramirez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Maize Homes Developments' team is professional and dedicated. I couldn't be happier with the results and the level of service provided.",
    href: "#"
  },
  {
    author: {
      name: "Sarah Chen",
      handle: "@sarah_chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "The quality of work from Maize Homes Developments is outstanding. They transformed our vision into reality with precision and creativity that exceeded all expectations.",
    href: "#"
  },
  {
    author: {
      name: "Michael Rodriguez",
      handle: "@mike_rodriguez",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "I was impressed by Maize Homes Developments' innovative approach to sustainable building. Their eco-friendly solutions didn't compromise on style or functionality.",
    href: "#"
  },
  {
    author: {
      name: "Lisa Thompson",
      handle: "@lisa_thompson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    text: "From concept to completion, Maize Homes Developments delivered excellence. Their team's expertise and attention to detail made our dream home a reality.",
    href: "#"
  },
  {
    author: {
      name: "David Kim",
      handle: "@david_kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The level of craftsmanship from Maize Homes Developments is exceptional. Every detail was carefully considered and executed to perfection.",
    href: "#"
  },
  {
    author: {
      name: "Amanda Foster",
      handle: "@amanda_foster",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Maize Homes Developments not only built our home but created a sustainable living space that perfectly balances modern design with environmental responsibility.",
    href: "#"
  }
]

export default function AboutSection() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">About Maize Developments</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                Maize Developments is committed to sustainable building practices, innovative 
                design solutions, and exceeding client expectations. Our dedication to using eco-
                friendly materials and delivering visually stunning, environmentally responsible 
                projects sets us apart in the industry. We take pride in creating personalized 
                homes that reflect our clients&apos; unique styles and needs, ensuring every project is a 
                true representation of their vision.
              </p>
              {/* Our Story button hidden for now */}
              {/* <div className="pt-4">
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Our Story
                </button>
              </div> */}
            </div>

            {/* 3D Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <ThreeDPhotoCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-600 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              Why Choose<br />
              Maize Homes<br />
              Developments
            </h2>
          </div>

          <div className="space-y-8">
                          {values.map((value) => (
              <div key={value.number} className="border-b border-gray-500 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-2xl font-bold text-gray-400">( {value.number} )</span>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-xl md:text-2xl font-bold">{value.title}</h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-base md:text-lg leading-relaxed text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-green-400 text-black p-8 rounded-lg flex items-center justify-between">
            <div>
              <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300">
                Discover More
              </button>
            </div>
            <div className="text-4xl">
              ↗
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <TestimonialsMarquee
        title="Client Testimonials"
        description="Hear from our satisfied clients about their experience with Maize Homes Developments"
        testimonials={testimonials}
      />
    </>
  )
}