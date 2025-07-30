import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import guideData from '../data/FirstAidGuide.json';

const FirstAidGuidePage = () => {
  // Since we import the JSON, we don't need to fetch it.
  // It's bundled with the app, perfect for offline use.
  const [data, setData] = useState(guideData);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Home</Link>
      <h1 className="text-3xl font-bold mb-6">First Aid Guide</h1>
      {data && data.firstAidTopics.map(topic => (
        <div key={topic.id} className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{topic.title}</h2>
          <p className="text-gray-600 mb-4">{topic.description}</p>
          {topic.sections.map((section, index) => (
            <div key={index} className="ml-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{section.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {section.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="text-gray-700">{step}</li>
                ))}
              </ul>
              {section.whenToSeeDoctor && (
                <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">
                  <h4 className="font-bold text-yellow-800">When to see a doctor:</h4>
                  <ul className="list-disc list-inside mt-2 text-yellow-700">
                    {section.whenToSeeDoctor.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {section.caution && <p className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded"><strong>Caution:</strong> {section.caution}</p>}
              {section.note && <p className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded"><strong>Note:</strong> {section.note}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FirstAidGuidePage;
