 
const Manufacturing = () =>
{
    const steps = [
        {
            title: 'Design',
            description: 'Creating detailed garment designs tailored to client specifications.',
            icon: '✏️',
        },
        {
            title: 'Sourcing',
            description: 'Selecting high-quality, sustainable materials for production.',
            icon: '📦',
        },
        {
            title: 'Production',
            description: 'Efficient manufacturing processes ensuring timely delivery.',
            icon: '🏭',
        },
        {
            title: 'Quality Control',
            description: 'Rigorous testing to maintain the highest quality standards.',
            icon: '✅',
        },
    ];
  return (
      <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-semibold text-center text-gray-800">Our Manufacturing Process</h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {steps.map((step, index) => (
                      <div key={index} className="flex items-start">
                          <div className="text-3xl mr-4">{step.icon}</div>
                          <div>
                              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                              <p className="mt-2 text-gray-600">{step.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Manufacturing
