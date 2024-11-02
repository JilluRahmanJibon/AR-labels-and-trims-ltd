 
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
      <section className="pt-12 [@media(min-width:460px)]:pb-12 pb-[1.5rem] bg-white GeologicaFont">
          <div className="container mx-auto px-6">
              <h2 className="sm:!text-3xl [@media(min-width:460px)]:text-[26px] text-[22px] font-semibold text-center text-gray-800">Our Manufacturing Process</h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {steps.map((step, index) => (
                        <div key={index} className="[@media(min-width:460px)]:w-full w-[280px] flex [@media(min-width:460px)]:flex-row flex-col [@media(min-width:460px)]:items-start items-center [@media(min-width:460px)]:text-left text-center bg-white p-6 rounded-md shadow-[0px_0px_6px_0px_#00000021] mx-auto">
                        <div className="[@media(min-width:460px)]:text-3xl text-[40px] [@media(min-width:460px)]:mr-4 mr-0">{step.icon}</div>
                        <div className="[@media(min-width:460px)]:mt-0 mt-[10px]">
                            <h3 className="text-[18px] font-semibold text-gray-800">{step.title}</h3>
                            <p className="text-[15px] mt-2 text-gray-600">{step.description}</p>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Manufacturing
