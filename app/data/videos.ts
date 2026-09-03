import videosData from "./videos.json";

// The one place your media location lives. When you put CloudFront in front of
// the bucket later, change ONLY this line to your CloudFront domain.
export const MEDIA_BASE = "https://mytubebucket2.s3.us-east-1.amazonaws.com";

// Your channel profile picture, shown on every video card and video page.
// NOTE: confirm the exact filename/extension of your wedding pfp in the pfps/
// folder — I've assumed .jpg. If it's .png/.webp/.avif etc., change it here.
export const CHANNEL_PFP = `${MEDIA_BASE}/pfps/weddingpfp.JPG`;

export const resume = `${MEDIA_BASE}/resume/resume`;

export type Video = {
  id: string;
  title: string;
  videoKey: string;      // full S3 key incl. folder, e.g. "videos/leftovers-demo.mp4"
  thumbnailKey: string;  // full S3 key incl. folder, e.g. "thumbnails/mrc-thumbnail.png"
  channel: string;
  views: number;
  uploadDate: string;
  description: string;
  website: string;
};

export const videos: Video[] = videosData as Video[];

// Build full URLs from the stored keys at read time.
export function videoUrl(v: Video): string {
  return `${MEDIA_BASE}/${v.videoKey}`;
}

export function thumbnailUrl(v: Video): string {
  return `${MEDIA_BASE}/${v.thumbnailKey}`;
}

export function getVideoById(id: string | undefined): Video | null {
  return videos.find((v) => v.id === id) ?? null;
}