import React from 'react'

const OurService = () =>
{
    const services = [
        {
            title: 'Custom Design',
            description: 'Tailored garment designs to meet your unique specifications.',
            icon: '🎨',
        },
        {
            title: 'Bulk Production',
            description: 'Efficient large-scale manufacturing with consistent quality.',
            icon: '🏭',
        },
        {
            title: 'Eco-Friendly Fabrics',
            description: 'Sourcing sustainable materials for environmentally conscious products.',
            icon: '🌿',
        },
    ];
  return (
      <section className="py-12 bg-white GeologicaFont">
          <div className="container mx-auto px-6">
              <h2 className="sm:!text-3xl [@media(min-width:460px)]:text-[26px] text-[22px] font-semibold text-center text-gray-800">Our Services</h2>
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                  {services.map((service, index) => (
                      <div key={index} className="bg-white p-6 rounded-md shadow-[0px_0px_6px_0px_#00000021] w-80">
                          <div className="text-4xl">{service.icon}</div>
                          <h3 className="mt-4 text-[18px] font-semibold text-gray-800">{service.title}</h3>
                          <p className="mt-2 text-[15px] text-gray-600">{service.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default OurService
