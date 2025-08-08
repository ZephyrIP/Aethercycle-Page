import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "AEC, AetherCycle, DeFi, autonomous finance, cryptocurrency, blockchain, Base network",
  canonicalUrl,
  ogImage = "/Aethercycle_AEC_Logo.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  const fullTitle = title.includes('AEC') ? title : `${title} | AEC AetherCycle`;
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : undefined;
  const fullOgImage = `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AetherCycle Protocol" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="AetherCycle" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="AetherCycle Logo" />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@Aethercycle" />
      <meta name="twitter:creator" content="@Aethercycle" />
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Theme and App Colors */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Performance and Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="dns-prefetch" href="//discord.gg" />
      <link rel="dns-prefetch" href="//x.com" />
      <link rel="dns-prefetch" href="//github.com" />
      
      {/* Default Structured Data */}
      {!structuredData && <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AetherCycle",
          "alternateName": "AEC",
          "url": baseUrl,
          "logo": fullOgImage,
          "description": "Autonomous DeFi Protocol with mathematical sustainability guarantees",
          "foundingDate": "2025",
          "sameAs": [
            "https://twitter.com/Aethercycle",
            "https://discord.gg/wadaks9KPt",
            "https://github.com/aethercycle"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "aethercycle@gmail.com",
            "contactType": "customer service"
          }
        })}
      </script>}
      
      {/* Custom Structured Data */}
      {structuredData && <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>}
    </Helmet>
  );
};

export default SEOHead;