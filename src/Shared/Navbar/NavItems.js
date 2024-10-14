export const menuItems = [
    { name: 'Home', path: '/' },
    {
        name: 'About Us',
        subItems: [
            { name: 'About Us', path: '/aboutus' },
            { name: 'About Our Company', path: '/about-company' },
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