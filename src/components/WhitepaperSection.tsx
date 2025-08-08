import React from 'react';
import WhitepaperViewer from './WhitepaperViewer';
import { FileText, Download, ExternalLink, BookOpen } from 'lucide-react';
import SEOHead from './SEOHead';

const WhitepaperSection: React.FC = () => {
  const [showViewer, setShowViewer] = React.useState(false);
  const [selectedDocument, setSelectedDocument] = React.useState<string | null>(null);

  if (showViewer && (selectedDocument === 'whitepaper-v2' || selectedDocument === 'smart-contract-architecture')) {
    return <WhitepaperViewer onBack={() => setShowViewer(false)} documentType={selectedDocument} />;
  }

  const documents = [
    {
      title: 'AEC Whitepaper v2.0',
      description: 'Mathematical proofs and autonomous protocol mechanisms',
      pages: 47,
      size: '2.3 MB',
      version: 'v2.0',
      date: '2025-01-15',
      featured: true
    },
    {
      title: 'Smart Contract Architecture',
      description: 'Immutable smart contract specifications and technical implementation',
      pages: 32,
      size: '1.8 MB',
      version: 'v1.5',
      date: '2025-01-10',
      featured: true
    },
    {
      title: 'Mathematical Sustainability Proofs',
      description: 'Mathematical models proving perpetual operation and economic sustainability',
      pages: 28,
      size: '1.5 MB',
      version: 'v1.0',
      date: 'SOON',
      featured: false,
      disabled: true
    },
    {
      title: 'Fair Launch & Tokenomics Guide',
      description: 'Fair launch mechanism and transparent token distribution model',
      pages: 16,
      size: '0.8 MB',
      version: 'v1.0',
      date: 'SOON',
      featured: false,
      disabled: true
    },
    {
      title: 'Security Audit Report',
      description: 'Third-party security audit results and vulnerability assessment',
      pages: 24,
      size: '1.2 MB',
      version: 'v1.0',
      date: 'SOON',
      featured: false,
      disabled: true
    }
  ];

  const sections = [
    { title: 'Protocol Overview', pages: '1-8' },
    { title: 'Mathematical Model', pages: '9-18' },
    { title: 'PerpetualEngine Mechanics', pages: '19-28' },
    { title: 'Governance Framework', pages: '29-35' },
    { title: 'Risk Analysis', pages: '36-42' },
    { title: 'Implementation Details', pages: '43-47' }
  ];

  return (
    <>
      <SEOHead
        title="Whitepaper & Technical Documentation"
        description="Comprehensive documentation covering the AEC protocol architecture, mathematical models, and implementation details. Download the complete whitepaper."
        canonicalUrl="/whitepaper"
        keywords="AEC whitepaper, technical documentation, protocol architecture, mathematical proofs, smart contracts"
      />
      <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <img 
              src="/Aethercycle_AEC_Logo.png" 
              alt="AetherCycle Logo" 
              className="w-16 h-16 mr-4 opacity-80"
            />
            <h2 className="text-4xl md:text-5xl font-bold">WHITEPAPER & TECHNICAL DOCS</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive documentation covering the AEC protocol architecture, 
            mathematical models, and implementation details.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {documents.map((doc, index) => (
                <div key={index} className={`border ${doc.featured ? 'border-white' : 'border-gray-700'} ${doc.featured ? 'bg-gray-800' : 'bg-gray-900'} ${doc.disabled ? 'opacity-50' : ''} p-6 rounded-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <FileText className="mr-3" size={24} />
                      <div>
                        <h3 className="text-lg font-bold">{doc.title}</h3>
                        {doc.featured && (
                          <span className="inline-block bg-white text-black px-2 py-1 text-xs font-mono mt-1">
                            FEATURED
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div>{doc.version}</div>
                      <div>{doc.date}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-4">{doc.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>{doc.pages} pages</span>
                      <span>{doc.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => {
                          if (doc.disabled) return;
                          if (doc.title === 'AEC Whitepaper v2.0') {
                            setSelectedDocument('whitepaper-v2');
                            setShowViewer(true);
                          } else if (doc.title === 'Smart Contract Architecture') {
                            setSelectedDocument('smart-contract-architecture');
                            setShowViewer(true);
                          }
                        }}
                        className={`border border-gray-700 text-white px-4 py-2 text-xs transition-all duration-300 ease-in-out flex items-center gap-1 min-w-[80px] justify-center ${
                          doc.disabled 
                            ? 'cursor-not-allowed opacity-50' 
                            : 'hover:bg-gray-800 hover:border-gray-500 transform hover:scale-105'
                        }`}
                        disabled={doc.disabled}
                      >
                        <ExternalLink size={14} />
                        {doc.disabled ? 'SOON' : 'VIEW'}
                      </button>
                      <a
                        href={doc.disabled ? '#' : doc.title === 'AEC Whitepaper v2.0' 
                          ? '/AEC Whitepaper v2.0 - Complete Document.pdf' 
                          : doc.title === 'Smart Contract Architecture'
                          ? '/AetherCycle Smart Contract Architecture v1.5.pdf'
                          : '#'}
                        download={doc.disabled ? undefined : doc.title === 'AEC Whitepaper v2.0' 
                          ? 'AEC Whitepaper v2.0 - Complete Document.pdf' 
                          : doc.title === 'Smart Contract Architecture'
                          ? 'AetherCycle Smart Contract Architecture v1.5.pdf'
                          : undefined}
                        className={`bg-white text-black px-4 py-2 text-xs transition-all duration-300 ease-in-out flex items-center gap-1 min-w-[100px] justify-center ${
                          doc.disabled 
                            ? 'cursor-not-allowed opacity-50' 
                            : 'hover:bg-gray-200 hover:shadow-lg transform hover:scale-105'
                        }`}
                        onClick={doc.disabled ? (e) => e.preventDefault() : undefined}
                      >
                        <Download size={14} />
                        {doc.disabled ? 'SOON' : 'DOWNLOAD'}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <BookOpen className="mr-2" size={20} />
                Whitepaper Sections
              </h3>
              <div className="space-y-3">
                {sections.map((section, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-b-0">
                    <span className="text-sm">{section.title}</span>
                    <span className="text-xs text-gray-400">{section.pages}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Pages:</span>
                  <span>147</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Updated:</span>
                  <span>Jan 20, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">File Format:</span>
                  <span>PDF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Languages:</span>
                  <span>English</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Download All</h3>
              <p className="text-sm text-gray-300 mb-4">
                Get the complete documentation package including all technical papers and guides.
              </p>
              <a
                href="/AEC Whitepaper v2.0 - Complete Document.pdf"
                download
                className="w-full bg-white text-black py-3 font-mono text-sm hover:bg-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download size={16} />
                DOWNLOAD PACKAGE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhitepaperSection;