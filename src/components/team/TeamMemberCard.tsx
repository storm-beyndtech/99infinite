import React, { useCallback, memo } from 'react';

interface TeamMember {
  id: number;
  title: string;
  content: string;
  slug: string;
  image: string;
  location?: string;
  department?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: (member: TeamMember) => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = memo(({ member, onClick }) => {
  const handleClick = useCallback(() => onClick(member), [member, onClick]);

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow transform hover:scale-105 duration-200"
    >
      <div className="relative aspect-square">
        <img src={member.image} alt={member.title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h3 className="text-white text-xl font-bold mb-1">{member.title}</h3>
          <p className="text-gray-300 text-sm">{member.department || "Managing Director"}</p>
        </div>
      </div>
    </div>
  );
});

export default TeamMemberCard;