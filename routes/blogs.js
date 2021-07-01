

const express = require('express');
const router = express.Router();

const { checkJwt, checkRole } = require('../controllers/auth');
//Controller 
const { 
    getBlogs, 
    getBlogById, 
    getBlogBySlug, 
    createBlog, 
    updateBlog,
    getBlogsByUser } = require('../controllers/blogs')


//Get all the blog route
router.get('', getBlogs)

router.get('/me', checkJwt, checkRole('admin'), getBlogsByUser)

//Get all the blog by id route
router.get('/:id',  getBlogById)
router.get('/s/:slug', getBlogBySlug)

router.post('', checkJwt, checkRole('admin'), createBlog)

//Admin protected routes CREATE,UPDATE AND DELETE
router.patch('/:id', updateBlog)
// router.delete('/:id', checkJwt, checkRole('admin'), deletePortfolio);
module.exports = router;