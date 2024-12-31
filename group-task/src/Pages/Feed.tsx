import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserFeed } from "../redux/slices/userSlice";
import {
  getFeed,
  addPostToFeed,
  getUserById,
} from "../redux/services/feedServices";
import { RootState } from "../redux/store";

const Feed = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const userFeed = useSelector((state: RootState) => state.user.feed);

  useEffect(() => {
    const fetchFeed = async () => {
      if (!id) return;

      const user = await getUserById(id);
      setUserName(user.name);

      const userFeed = await getFeed(id);
      dispatch(setUserFeed(userFeed));
    };

    fetchFeed();
  }, [id, dispatch]);

  const handlePostSubmit = async () => {
    if (userInput.trim() === "") return;

    const newPost = {
      id: Date.now().toString(),
      name: userName,
      text: userInput,
    };

    await addPostToFeed(id || "", newPost);

    dispatch(setUserFeed([newPost, ...userFeed]));
    setUserInput("");
  };

  const renderPosts = () => {
    return (
      <div className="space-y-4">
        {userFeed.map((post) => (
          <div
            key={post.id}
            className="p-4 border border-gray-200 rounded shadow-sm bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <img
                src="https://img.icons8.com/?size=100&id=7820&format=png&color=000000"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-semibold">{post.name}</span>
            </div>
            <p className="mt-2">{post.text}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Textarea and Post section */}
      <div className="flex gap-10 mb-6 bg-white p-4 rounded shadow">
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Add new post..."
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
        {renderPosts()}
      </div>
    </div>
  );
};

export default Feed;
