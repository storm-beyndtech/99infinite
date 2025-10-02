import React, { memo } from 'react';
import { ChevronLeftIcon, Linkedin, MailIcon, PhoneIcon } from 'lucide-react';

interface TeamMember {
  id: number;
  title: string;
  content: string;
  slug: string;
  image: string;
  location?: string;
  department?: string;
}

interface TeamMemberProfileProps {
  member: TeamMember;
  onBack: () => void;
}

const TeamMemberProfile: React.FC<TeamMemberProfileProps> = memo(({ member, onBack }) => {
  const createMarkup = (html: string) => {
    return { __html: html };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-cyan-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center text-orange-400 hover:text-orange-300 mb-4 transition-colors"
          >
            <ChevronLeftIcon className="w-4 h-4 mr-1" />
            Team
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <img
                src={member.image}
                alt={member.title}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-2">{member.title}</h1>
              <p className="text-xl text-cyan-200 mb-6">Director</p>
              <div className="flex space-x-4">
                <button className="bg-cyan-700 hover:bg-cyan-600 p-3 rounded-full transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="bg-cyan-700 hover:bg-cyan-600 p-3 rounded-full transition-colors">
                  <MailIcon className="w-5 h-5" />
                </button>
                <button className="bg-cyan-700 hover:bg-cyan-600 p-3 rounded-full transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={createMarkup(member.content)} />
        </div>
      </div>
    </div>
  );
});

export default TeamMemberProfile;