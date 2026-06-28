const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ergo.com"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ERGO Automotive",
  url: siteUrl,
  logo: `${siteUrl}/logos/ergo.svg`,
  description: "Premium automotive engineering redefined.",
  foundingDate: "2024",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-ERGO",
    contactType: "sales",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://twitter.com/ergo",
    "https://instagram.com/ergo",
    "https://youtube.com/ergo",
    "https://linkedin.com/company/ergo",
  ],
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "ERGO S",
  description: "Premium electric sedan with industry-leading range and performance.",
  brand: {
    "@type": "Brand",
    name: "ERGO",
  },
  offers: {
    "@type": "Offer",
    price: "65000",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What warranty coverage does ERGO offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every ERGO vehicle comes with a 4-year / 50,000-mile limited bumper-to-bumper warranty and an 8-year / 100,000-mile battery and drivetrain warranty.",
      },
    },
    {
      "@type": "Question",
      name: "What financing options are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer competitive financing through ERGO Financial Services, including traditional auto loans, lease options, and balloon payment plans.",
      },
    },
    {
      "@type": "Question",
      name: "How does the delivery process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once your vehicle completes production, you will be invited to schedule delivery at your preferred ERGO studio. Home delivery is available in select regions.",
      },
    },
    {
      "@type": "Question",
      name: "What charging solutions are included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every new ERGO includes a Level 2 home charging unit with standard installation and 1,000 kWh of complimentary charging on the ERGO charging network.",
      },
    },
  ],
}

function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

export { StructuredData }
