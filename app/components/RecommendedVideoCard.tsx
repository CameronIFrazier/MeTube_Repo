type RecommendedVideoCardProps = {
  title: string;
  channel?: string;
  views?: number;
  thumbnail: string;
};

export default function RecommendedVideoCard({
  title,
  channel,
  views,
  thumbnail,
}: RecommendedVideoCardProps) {
  return (
    <div className="flex gap-3 cursor-pointer hover:bg-neutral-800/60 p-2 rounded-lg transition">
      {/* Thumbnail */}
      <div className="w-40 aspect-video rounded-lg overflow-hidden bg-neutral-700 flex-shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium line-clamp-2">{title}</p>
        <p className="text-xs text-gray-400">{channel}</p>
        <p className="text-xs text-gray-400">
          {views?.toLocaleString()} views
        </p>
      </div>
    </div>
  );
}
