import React from 'react';

interface LocalContentProps {
  name?: string;
  content?: string;
}

const LocalContent: React.FC<LocalContentProps> = ({ name, content }) => {
  // If there's no specific content, don't render anything.
  if (!content) {
    return null;
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Your Local Air Con Hire Solution in {name}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocalContent;