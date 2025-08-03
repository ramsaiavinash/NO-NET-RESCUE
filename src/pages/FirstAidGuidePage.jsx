import React from 'react';
import { Link } from 'react-router-dom';
import guideData from '../data/firstaidguide.json';

// Helper for rendering themed info boxes with icons.
const InfoBox = ({ title, items, icon }) => (
  <div className="mt-5 p-4 rounded-lg bg-red-50 border border-red-200">
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 text-red-600 pt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-red-800">{title}</h4>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-justify">
          {Array.isArray(items) ? items.map((item, index) => (
            <li key={index}>{item}</li>
          )) : <li>{items}</li>}
        </ul>
      </div>
    </div>
  </div>
);

const FirstAidGuidePage = () => {
  const data = guideData;

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Native-style Header */}
      <header className="bg-red-600 text-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
          <Link to="/" className="text-white" aria-label="Back to Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2">
            First Aid Guide
          </h1>
          <div />
        </div>
      </header>

      {/* Content Area */}
      <main className="p-4 pt-20">
        <p className="text-center text-gray-500 mb-6">
          Essential steps for common emergencies.
        </p>
        
        <div className="space-y-6">
          {data && data.firstAidTopics.map(topic => (
            <div key={topic.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <header className="p-5 bg-red-50 border-b border-gray-200">
                <h2 className="text-xl font-bold text-red-800">{topic.title}</h2>
                {topic.description && <p className="mt-1 text-gray-600 text-justify">{topic.description}</p>}
              </header>

              <div className="p-5">
                {topic.sections.map((section, index) => (
                  <section key={index} className="mb-6 last:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">{section.title}</h3>
                    
                    <ul className="list-decimal list-outside ml-5 space-y-3">
                      {section.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-gray-700 leading-relaxed pl-2 text-justify">{step}</li>
                      ))}
                    </ul>

                    {section.whenToSeeDoctor && (
                      <InfoBox
                        title="When to see a doctor:"
                        items={section.whenToSeeDoctor}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                      />
                    )}

                    {section.caution && (
                      <InfoBox
                        title="Caution:"
                        items={section.caution}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
                      />
                    )}

                    {section.note && (
                      <InfoBox
                        title="Note:"
                        items={section.note}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                      />
                    )}
                  </section>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FirstAidGuidePage;
