import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "AEC, AetherCycle, DeFi, autonomous finance, cryptocurrency, blockchain, Base network",
  canonicalUrl,
  ogImage = "/Aethercycle_AEC_Logo.png"
}) => {
  const fullTitle = title.includes('AEC') ? title : `${title} | AEC AetherCycle`;
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      <meta name="twitter:site" content="@Aethercycle" />
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="AetherCycle Protocol" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AetherCycle",
          "alternateName": "AEC",
          "url": baseUrl,
          "logo": `${baseUrl}/Aethercycle_AEC_Logo.png`,
          "description": "Autonomous DeFi Protocol with mathematical sustainability guarantees",
          "sameAs": [
            "https://twitter.com/Aethercycle",
            "https://discord.gg/wadaks9KPt",
            "https://github.com/aethercycle"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;