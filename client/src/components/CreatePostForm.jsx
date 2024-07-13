import React, { useState } from 'react';

const CreatePostForm = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreatePost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">Create New Post</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full px-3 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        className="w-full px-3 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Post
      </button>
    </form>
  );
};

export default CreatePostForm;
