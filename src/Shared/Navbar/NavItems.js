export const menuItems = [
    { name: 'Home', path: '/' },
    {
        name: 'About Us',
        subItems: [
            // { name: 'About Us', path: '/aboutUs' },
            { name: 'Our Company', path: '/about-our-company' },
            { name: 'Mission & Vision', path: '/about-mission-vision' },
            { name: 'AR Labels Family', path: '/about-ar-labels-family' },
            { name: 'Ethics & Values', path: '/about-ethics-values' },
            { name: 'Affiliations', path: '/about-affiliations' },
            { name: 'Client References', path: '/about-client-references' },
        ],
    },
    {
        name: 'Product & Solutions',
        subItems: [
            { name: 'Product & Solutions', path: '/products' },
            { name: 'Product & Details', path: '/product-details' },
        ],
    },
    {
        name: 'Sustainability',
        subItems: [
            { name: 'Sustainability Overview', path: '/sustainability' },
            { name: 'Sustainability Initiatives', path: '/sustainability-initiatives' },
            { name: 'Sustainability Goals', path: '/sustainability-goals' },
        ],
    },
    {
        name: 'News & Events',
        subItems: [
            { name: 'Latest News', path: '/latest-news' },
            { name: 'Upcoming Events', path: '/upcoming-events' },
            { name: 'Past Events', path: '/past-events' },
        ],
    },
    {
        name: 'Careers',
        subItems: [
            { name: 'Current Openings', path: '/current-openings' },
            { name: 'Internships', path: '/internships' },
            { name: 'Company Culture', path: '/company-culture' },
        ],
    },
    { name: 'Contact Us', path: '/contactUs' },
];