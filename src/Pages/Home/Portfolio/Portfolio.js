 
const Portfolio = () =>
{
    const portfolioItems = [
        {
            image: 'http://localhost:3000/static/media/ar-image.a22264bd26421aab3d1f.jpg',
            title: 'Summer Collection',
        },
        {
            image: 'http://localhost:3000/static/media/ar-image.a22264bd26421aab3d1f.jpg',
            title: 'Winter Wear',
        },
        {
            image: 'http://localhost:3000/static/media/ar-image.a22264bd26421aab3d1f.jpg',
            title: 'Sports Apparel',
        },
        {
            image: 'http://localhost:3000/static/media/ar-image.a22264bd26421aab3d1f.jpg',
            title: 'Casual Line',
        },
    ];
  return (
      <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-semibold text-center text-gray-800">Our Portfolio</h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {portfolioItems.map((item, index) => (
                      <div key={index} className="relative">
                          <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-md shadow-md" />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                              <span className="text-white text-lg">{item.title}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Portfolio
