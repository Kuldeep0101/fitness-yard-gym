import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    type?: string;
    name?: string;
}

const SEO = ({
    title = "Fitness Yard — Meerut's Elite Gym for Real Results",
    description = "Join Fitness Yard Gym in Meerut for elite personal training, group classes, and world-class equipment. Book your free trial today!",
    type = "website",
    name = "Fitness Yard Gym"
}: SEOProps) => {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Gym",
        "name": "Fitness Yard Gym",
        "image": "https://fitnessyardgym.com/logo.png",
        "@id": "https://fitnessyardgym.com",
        "url": "https://fitnessyardgym.com",
        "telephone": "+91 7217861996",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Siddhi Vinayakam Complex, Rishi Nagar, Baghpat Road",
            "addressLocality": "Meerut",
            "postalCode": "250002",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.9845,
            "longitude": 77.6212
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "05:00",
                "closes": "22:00"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/fitness_yard_gym/?hl=en"
        ]
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
