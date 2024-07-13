import Post from '../models/post.model.js';
import { errorHandler } from '../utils/error.js';

export const getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        console.log(posts); // Check if posts are fetched correctly
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        next(error);
    }
};


export const createPost = async (req, res, next) => {
    const { title, content } = req.body;
    try {
        const post = new Post({
            title,
            content,
            author: req.user.id, 
        });
        await post.save();
        res.json(post);
    } catch (error) {   
        next(error);
    }
};

export const deletePost = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return next(errorHandler(404, 'Post not found'));
        }
        await post.remove();
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        next(error);
    }
};

export const likePost = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return next(errorHandler(404, 'Post not found'));
        }
        // Check if user has already liked the post
        if (post.likes.includes(req.user.id)) {
            return next(errorHandler(400, 'You have already liked this post'));
        }
        post.likes.push(req.user.id);
        await post.save();
        res.json(post);
    } catch (error) {
        next(error);
    }
};