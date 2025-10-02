import { useRef } from "react";

// Type for episode prop
interface Episode {
	audioUrl: string;
	title?: string;
}

type AudioPlayerProps = {
	episode: Episode;
};

export default function AudioPlayer({ episode }: AudioPlayerProps) {
	const audioRef = useRef<HTMLAudioElement>(null);

	return (
		<div className="w-full flex flex-col shadow">
			<audio ref={audioRef} src={episode.audioUrl} controls className="w-full" />
		</div>
	);
}
