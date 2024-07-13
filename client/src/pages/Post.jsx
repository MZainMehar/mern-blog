import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import CreatePostForm from '../components/CreatePostForm';

import { useSelector } from 'react-redux';

function Post() {
  const [posts, setPosts] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  // const [user, setUser] = useState(null);
  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/post/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error.message);
    }
  };

  const handlePostDelete = async (postId) => {
    try {
      const response = await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      // Update posts after deletion
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  const handlePostCreate = async (postData) => {
    try {
      const response = await fetch('/api/post/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      // Update posts after creation
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error.message);
    }
  };

  const handlePostLike = async (postId) => {
    try {
      const response = await fetch(`/api/post/${postId}/like`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to like post');
      }
      // Update posts after liking
      fetchPosts();
    } catch (error) {
      console.error('Error liking post:', error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {currentUser && (
        <CreatePostForm onCreatePost={handlePostCreate} />
      )}
      <PostList
        posts={posts}
        onDeletePost={handlePostDelete}
        onLikePost={handlePostLike}
        user={currentUser}
      />
    </div>
  );
}
export default Post