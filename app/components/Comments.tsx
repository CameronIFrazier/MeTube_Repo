"use client";

import { useEffect, useState } from "react";
import { MoreVertical, ThumbsUp, ThumbsDown } from "lucide-react";

type Comment = {
  id: string;
  user: string;
  avatar: string;
  date: string;
  text: string;
  likes: number;
  dislikes: number;
  replies: Comment[];
};

const avatars = [
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/21.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/31.jpg",
  "https://randomuser.me/api/portraits/women/32.jpg",
  "https://randomuser.me/api/portraits/men/41.jpg",
  "https://randomuser.me/api/portraits/women/42.jpg",
];

const guestAvatar =
  avatars[Math.floor(Math.random() * avatars.length)];

const seedComments: Comment[] = [
  {
    id: crypto.randomUUID(),
    user: "@cambiggestfan",
    avatar: avatars[0],
    date: "2 days ago",
    text: `This video caught me completely off guard.

I was expecting something casual, but the pacing and delivery kept me locked in the whole time.`,
    likes: 312,
    dislikes: 4,
    replies: [],
  },
  {
    id: crypto.randomUUID(),
    user: "@nightowl_dev",
    avatar: avatars[1],
    date: "1 day ago",
    text: "The editing choices here are subtle but extremely intentional. Respect.",
    likes: 198,
    dislikes: 2,
    replies: [
      {
        id: crypto.randomUUID(),
        user: "@pixel_theory",
        avatar: avatars[2],
        date: "22 hours ago",
        text: "Exactly — nothing feels overdone, which is rare.",
        likes: 41,
        dislikes: 0,
        replies: [],
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    user: "@latebutwatching",
    avatar: avatars[3],
    date: "3 days ago",
    text: `I know I'm late, but this deserves more attention.

Definitely subscribing after this.`,
    likes: 421,
    dislikes: 7,
    replies: [],
  },
  {
    id: crypto.randomUUID(),
    user: "@framebyframe",
    avatar: avatars[4],
    date: "4 days ago",
    text: "That transition at the halfway point was insanely clean.",
    likes: 156,
    dislikes: 1,
    replies: [],
  },
  {
    id: crypto.randomUUID(),
    user: "@audiohead99",
    avatar: avatars[5],
    date: "5 days ago",
    text: `Can we talk about the sound design?

It's subtle, but it adds way more tension than silence would.`,
    likes: 204,
    dislikes: 3,
    replies: [],
  },
  {
    id: crypto.randomUUID(),
    user: "@casualviewer",
    avatar: avatars[6],
    date: "6 days ago",
    text: "Clicked out of curiosity. Stayed because it was actually good.",
    likes: 89,
    dislikes: 0,
    replies: [],
  },
  {
    id: crypto.randomUUID(),
    user: "@deepcut",
    avatar: avatars[7],
    date: "1 week ago",
    text: `This feels like one of those videos people come back to later and realize how good it was.`,
    likes: 267,
    dislikes: 5,
    replies: [],
  },
  {
    id: crypto.randomUUID(),
    user: "@rewatchclub",
    avatar: avatars[0],
    date: "1 week ago",
    text: "Second watch was even better than the first.",
    likes: 133,
    dislikes: 2,
    replies: [],
  },
  {
    id: crypto.randomUUID(),
    user: "@minimalcuts",
    avatar: avatars[1],
    date: "8 days ago",
    text: "I appreciate how this doesn't rely on flashy effects to stay interesting.",
    likes: 177,
    dislikes: 1,
    replies: [],
  },
  {
    id: crypto.randomUUID(),
    user: "@contextmatters",
    avatar: avatars[2],
    date: "9 days ago",
    text: `This actually made me rethink a couple things.

Didn't expect that from this type of video.`,
    likes: 301,
    dislikes: 6,
    replies: [],
  },
  {
    id: crypto.randomUUID(),
    user: "@justpassingthru",
    avatar: avatars[3],
    date: "10 days ago",
    text: "Algorithm finally did something right.",
    likes: 92,
    dislikes: 0,
    replies: [],
  },
  {
    id: crypto.randomUUID(),
    user: "@slowburn",
    avatar: avatars[4],
    date: "11 days ago",
    text: `Takes its time, but that's what makes it work.

Nothing feels rushed.`,
    likes: 184,
    dislikes: 2,
    replies: [],
  },
];

const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

const CommentItem = ({ 
  c, 
  depth = 0,
  activeReplyId,
  setActiveReplyId,
  drafts,
  setDrafts,
  postReply,
  openReplies,
  setOpenReplies
}: { 
  c: Comment; 
  depth?: number;
  activeReplyId: string | null;
  setActiveReplyId: (id: string | null) => void;
  drafts: Record<string, string>;
  setDrafts: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  postReply: (id: string) => void;
  openReplies: Record<string, boolean>;
  setOpenReplies: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}) => (
  <div className={`flex gap-3 ${depth ? "mt-4" : "mt-6"}`}>
    <img src={c.avatar} className="w-10 h-10 rounded-full flex-shrink-0" />

    <div className="flex-1">
      <div className="flex justify-between">
        <div className="text-sm">
          <span className="font-semibold">{c.user}</span>
          <span className="text-gray-400 ml-2">{c.date}</span>
        </div>

        <div className="relative group">
          <MoreVertical size={18} className="cursor-pointer" />
          <div className="absolute right-0 mt-1 hidden group-hover:block bg-gray-800 rounded text-sm whitespace-nowrap z-10">
            <button className="px-4 py-2 hover:bg-gray-700 w-full text-left">
              Report
            </button>
          </div>
        </div>
      </div>

      <p className="text-sm mt-1 whitespace-pre-wrap">{c.text}</p>

      <div className="flex items-center gap-2 text-xs mt-3">
        <button className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors">
          <ThumbsUp size={16} />
          <span>{c.likes}</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors">
          <ThumbsDown size={16} />
        </button>
        <button
          onClick={() => setActiveReplyId(c.id)}
          className="px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors font-semibold"
        >
          Reply
        </button>
      </div>

      {activeReplyId === c.id && (
        <div className="mt-3 flex gap-3">
          <img src={"https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg"} className="w-10 h-10 rounded-full flex-shrink-0" />
          <div className="flex-1">
            <textarea
              rows={2}
              value={drafts[c.id] ?? ""}
              onChange={(e) =>
                setDrafts((p) => ({ ...p, [c.id]: e.target.value }))
              }
              className="w-full bg-transparent border-b border-gray-600 text-sm outline-none resize-none pb-1"
              placeholder="Add a reply..."
              autoFocus
            />
            <div className="flex gap-2 mt-2 justify-end">
              <button
                onClick={() => setActiveReplyId(null)}
                className="px-4 py-2 rounded-full hover:bg-gray-800 text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => postReply(c.id)}
                disabled={!drafts[c.id]?.trim()}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  drafts[c.id]?.trim() 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      )}

      {c.replies.length > 0 && (
        <button
          onClick={() =>
            setOpenReplies((p) => ({ ...p, [c.id]: !p[c.id] }))
          }
          className="flex items-center gap-2 mt-3 text-sm font-semibold text-blue-500 hover:bg-blue-500/10 px-3 py-1.5 rounded-full transition-colors"
        >
          <span>{openReplies[c.id] ? "▼" : "▶"}</span>
          <span>{c.replies.length} {c.replies.length === 1 ? "reply" : "replies"}</span>
        </button>
      )}

      {openReplies[c.id] && c.replies.length > 0 && (
        <div className="mt-4 ml-12 border-l-2 border-gray-700 pl-4">
          {c.replies.map((r) => (
            <CommentItem 
              key={r.id} 
              c={r} 
              depth={depth + 1}
              activeReplyId={activeReplyId}
              setActiveReplyId={setActiveReplyId}
              drafts={drafts}
              setDrafts={setDrafts}
              postReply={postReply}
              openReplies={openReplies}
              setOpenReplies={setOpenReplies}
            />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [openReplies, setOpenReplies] = useState<Record<string, boolean>>({});
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    setComments(shuffle(seedComments));
  }, []);

  const addReply = (id: string, text: string, list: Comment[]): Comment[] =>
    list.map((c) =>
      c.id === id
        ? {
            ...c,
            replies: [
              ...c.replies,
              {
                id: crypto.randomUUID(),
                user: "@Cam",
                avatar: "https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg",
                date: "Just now",
                text,
                likes: 0,
                dislikes: 0,
                replies: [],
              },
            ],
          }
        : { ...c, replies: addReply(id, text, c.replies) }
    );

  const postReply = (id: string) => {
    const text = drafts[id];
    if (!text?.trim()) return;

    setComments((prev) => addReply(id, text, prev));
    setDrafts((p) => ({ ...p, [id]: "" }));
    setOpenReplies((p) => ({ ...p, [id]: true }));
    setActiveReplyId(null);
  };

  const postNewComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: crypto.randomUUID(),
      user: "@Cam",
      avatar: "https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg",
      date: "Just now",
      text: newComment,
      likes: 0,
      dislikes: 0,
      replies: [],
    };

    setComments((prev) => [comment, ...prev]);
    setNewComment("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">
        Comments ({comments.length})
      </h2>

      <div className="flex gap-3 mb-8 pb-6 border-b border-gray-700">
        <img src={"https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg"} className="w-10 h-10 rounded-full flex-shrink-0" />
        <div className="flex-1">
          <textarea
            rows={1}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onFocus={(e) => e.target.rows = 3}
            onBlur={(e) => !newComment && (e.target.rows = 1)}
            className="w-full bg-transparent border-b border-gray-600 text-sm outline-none resize-none pb-1 transition-all"
            placeholder="Add a comment..."
          />
          {newComment && (
            <div className="flex gap-2 mt-3 justify-end">
              <button
                onClick={() => setNewComment("")}
                className="px-4 py-2 rounded-full hover:bg-gray-800 text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={postNewComment}
                disabled={!newComment.trim()}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  newComment.trim() 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Comment
              </button>
            </div>
          )}
        </div>
      </div>

      {comments.map((c) => (
        <CommentItem 
          key={c.id} 
          c={c}
          activeReplyId={activeReplyId}
          setActiveReplyId={setActiveReplyId}
          drafts={drafts}
          setDrafts={setDrafts}
          postReply={postReply}
          openReplies={openReplies}
          setOpenReplies={setOpenReplies}
        />
      ))}
    </div>
  );
}