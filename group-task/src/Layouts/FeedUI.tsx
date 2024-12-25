import { useState } from "react";

const initialPosts = [
  { id: 1, text: "Welcome to the feed!" },
  { id: 2, text: "This is a sample post. Feel free to share your thoughts!" },
];

const FeedUI = () => {
  const [userInput, setUserInput] = useState("");
  const [posts, setPosts] = useState(initialPosts);

  const handlePostSubmit = () => {
    if (userInput.trim() === "") return; 
    setPosts([{ id: Date.now(), text: userInput }, ...posts]); 
    setUserInput("");
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
          
        {/* Textfield section */}
        <div className="flex gap-10 mb-6 bg-white p-4 rounded shadow">
            <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="What's on your mind?"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            ></textarea>
            <button
            className="w-1/5 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handlePostSubmit}
            >
            Post
            </button>
        </div>

        {/* Posts section */}
        <div className="bg-white p-4 rounded shadow">
            <h2 className="mb-4 text-lg font-semibold text-gray-700">Posts</h2>
            {posts.length === 0 ? (
            <p className="text-gray-500">No posts yet. Be the first to post something!</p>
            ) : (
            <div className="space-y-4">
                {posts.map((post) => (
                <div
                    key={post.id}
                    className="p-4 border border-gray-200 rounded shadow-sm bg-gray-50"
                >
                    {post.text}
                </div>
                ))}
            </div>
            )}
        </div>
          
    </div>
  );
};

export default FeedUI;
