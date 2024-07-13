import React from 'react';

const PostList = ({ posts, onDeletePost, onLikePost, user }) => {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div key={post._id} className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-600 mt-2">{post.content}</p>
          <p className="text-gray-500 mt-2">Author: {post.author}</p>
          <p className="text-gray-500">Likes: {post.likes.length}</p>
          {user && (
            <div className="mt-4 space-x-4">
              {post.author._id === user._id && (
                <button
                  onClick={() => onDeletePost(post._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              )}
              <button
                onClick={() => onLikePost(post._id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Like
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
