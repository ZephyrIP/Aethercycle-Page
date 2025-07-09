import React, { useState, useEffect } from 'react';
import { ArrowLeft, Download, FileText, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { whitepaperContent, parseWhitepaperIntoPages } from '../data/whitepaperContent';
import { smartContractArchitectureContent, parseSmartContractArchitectureIntoPages } from '../data/smartContractArchitectureContent';

interface WhitepaperViewerProps {
  onBack: () => void;
  documentType: string;
}

export default function WhitepaperViewer({ onBack, documentType }: WhitepaperViewerProps) {
  const [pages, setPages] = useState<string[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [documentTitle, setDocumentTitle] = useState('');
  const [documentSubtitle, setDocumentSubtitle] = useState('');

  useEffect(() => {
    // Parse the content into pages based on document type
    let parsedPages: string[];
    let title: string;
    let subtitle: string;
    
    if (documentType === 'smart-contract-architecture') {
      parsedPages = parseSmartContractArchitectureIntoPages(smartContractArchitectureContent);
      title = 'AetherCycle Smart Contract Architecture v1.5';
      subtitle = 'Immutable Smart Contract Specifications and Technical Implementation';
    } else {
      parsedPages = parseWhitepaperIntoPages(whitepaperContent);
      title = 'AEC Whitepaper v2.0';
      subtitle = 'Mathematical Proofs and Autonomous Protocol Mechanisms';
    }
    
    setPages(parsedPages);
    setDocumentTitle(title);
    setDocumentSubtitle(subtitle);
    setIsLoading(false);
  }, [documentType]);

  const goToNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < pages.length) {
      setCurrentPageIndex(pageIndex);
    }
  };

  // Convert markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // Handle headers
      if (line.startsWith('####')) {
        return <h4 key={index} className="text-lg font-bold text-gray-800 mt-6 mb-3">{line.replace(/^####\s*/, '')}</h4>;
      }
      if (line.startsWith('###')) {
        return <h3 key={index} className="text-xl font-bold text-gray-800 mt-6 mb-4">{line.replace(/^###\s*/, '')}</h3>;
      }
      if (line.startsWith('##')) {
        return <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">{line.replace(/^##\s*/, '')}</h2>;
      }
      if (line.startsWith('#')) {
        return <h1 key={index} className="text-3xl font-bold text-gray-800 mt-8 mb-6">{line.replace(/^#\s*/, '')}</h1>;
      }

      // Handle horizontal rules
      if (line.trim() === '---') {
        return <hr key={index} className="my-6 border-gray-300" />;
      }

      // Handle code blocks
      if (line.startsWith('```')) {
        return <div key={index} className="bg-gray-100 p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto">{line.replace(/```/g, '')}</div>;
      }

      // Handle bold text
      if (line.includes('**')) {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={index} className="mb-3 text-gray-700 leading-relaxed">
            {parts.map((part, partIndex) => 
              part.startsWith('**') && part.endsWith('**') ? 
                <strong key={partIndex}>{part.replace(/\*\*/g, '')}</strong> : 
                part
            )}
          </p>
        );
      }

      // Handle bullet points
      if (line.startsWith('- ')) {
        return <li key={index} className="mb-2 text-gray-700 ml-4">{line.replace(/^-\s*/, '')}</li>;
      }

      // Handle table rows (simple detection)
      if (line.includes('|') && line.split('|').length > 2) {
        const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
        return (
          <div key={index} className="grid grid-cols-3 gap-4 py-2 border-b border-gray-200">
            {cells.map((cell, cellIndex) => (
              <div key={cellIndex} className="text-sm text-gray-700">{cell}</div>
            ))}
          </div>
        );
      }

      // Regular paragraphs
      if (line.trim()) {
        return <p key={index} className="mb-3 text-gray-700 leading-relaxed">{line}</p>;
      }

      // Empty lines
      return <div key={index} className="mb-2"></div>;
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading whitepaper...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Main
          </button>
          
          <div className="flex items-center gap-4">
            <div className="text-white text-sm">
              Page {currentPageIndex + 1} of {pages.length}
            </div>
            <a
              href={documentType === 'smart-contract-architecture' 
                ? '/AetherCycle Smart Contract Architecture v1.5.pdf' 
                : '/AEC Whitepaper v2.0 - Complete Document.pdf'}
              download
              className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Whitepaper Content */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-black p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-white" />
              <div>
                <h1 className="text-2xl font-bold text-white">{documentTitle}</h1>
                <p className="text-gray-300">{documentSubtitle}</p>
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="p-8">
            <div className="min-h-[600px] max-w-none prose prose-lg">
              {pages[currentPageIndex] && renderContent(pages[currentPageIndex])}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <button
                onClick={goToPreviousPage}
                disabled={currentPageIndex === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentPageIndex === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {pages.map((_, index) => {
                  // Show first 3, last 3, and current page with neighbors
                  const showPage = 
                    index < 3 || 
                    index >= pages.length - 3 || 
                    Math.abs(index - currentPageIndex) <= 1;
                  
                  if (!showPage) {
                    // Show ellipsis
                    if (index === 3 && currentPageIndex > 5) {
                      return <span key={index} className="text-gray-400">...</span>;
                    }
                    if (index === pages.length - 4 && currentPageIndex < pages.length - 6) {
                      return <span key={index} className="text-gray-400">...</span>;
                    }
                    return null;
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => goToPage(index)}
                      className={`w-8 h-8 rounded-lg text-sm transition-colors ${
                        index === currentPageIndex
                          ? 'bg-black text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={goToNextPage}
                disabled={currentPageIndex === pages.length - 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentPageIndex === pages.length - 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Jump */}
            <div className="mt-4 text-center">
              <div className="text-sm text-gray-600">
                Jump to page: 
                <input
                  type="number"
                  min="1"
                  max={pages.length}
                  value={currentPageIndex + 1}
                  onChange={(e) => {
                    const page = parseInt(e.target.value) - 1;
                    if (page >= 0 && page < pages.length) {
                      goToPage(page);
                    }
                  }}
                  className="ml-2 w-16 px-2 py-1 border border-gray-300 rounded text-center"
                />
                <span className="ml-1">of {pages.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}