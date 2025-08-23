import Image from 'next/image'

const services = [
  {
    id: 1,
    title: "New Build",
    description: "Building your dream home from the ground up is our passion. Our new build services encompass everything from initial design and custom blueprints to construction and finishing touches. We work closely with you to understand your vision and bring it to life with exceptional craftsmanship and attention to detail. With Maize Developments, you can expect a seamless and enjoyable building experience, resulting in a home that perfectly reflects your style and needs.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    imageAlt: "New Build Construction"
  },
  {
    id: 2,
    title: "Renovation",
    description: "Transform your existing home with our comprehensive renovation services. Whether you're looking to update a single room or undertake a complete home makeover, Maize Developments is here to help. Our team of skilled professionals will work with you to design and execute renovations that enhance the beauty, functionality, and value of your home. With a focus on quality and attention to detail, we ensure that your renovation project exceeds your expectations.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    imageAlt: "Home Renovation"
  },
  {
    id: 3,
    title: "Rezone",
    description: "At Maize Developments, we specialize in rezoning properties to unlock their full potential. Whether you're looking to change the zoning designation to accommodate a new type of development or increase the value of your property, our team of experts will guide you through the process. We handle all aspects of rezoning, including planning, applications, and negotiations with local authorities, ensuring a smooth and successful transition.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    imageAlt: "Property Planning"
  },
  {
    id: 4,
    title: "Subdivisions",
    description: "Our subdivision services are designed to help you maximize the value and utility of your land. Whether you're looking to divide a large property into smaller lots for development or create a new residential community, we have the expertise to manage the entire process. From planning and surveying to obtaining necessary approvals and overseeing construction, Maize Developments ensures that your subdivision project is executed efficiently and effectively.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    imageAlt: "Land Development"
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="pt-16 md:pt-20 pb-20 bg-green-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Title */}
          <div className="lg:col-span-1">
            <div className="bg-white text-black p-8 rounded-lg h-full flex items-center justify-center">
              <h2 className="text-6xl font-bold leading-none">
                Our<br />Works
              </h2>
            </div>
          </div>

          {/* Right Columns - Services Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">
                    {service.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}