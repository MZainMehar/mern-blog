import express from 'express';
import { getPosts, createPost, deletePost, likePost } from '../controllers/post.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/posts', getPosts);
router.post('/createPost', verifyToken, createPost);
router.delete('/:postId', verifyToken, deletePost);
router.post('/:postId/like', verifyToken, likePost);

export default router;
