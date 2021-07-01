

const express = require('express');
const router = express.Router();

const { checkJwt, checkRole } = require('../controllers/auth');
//Controller 
const { getPortfolios, 
    getPortfolioById, 
    createPortfolio, 
    updatePortfolio, 
    deletePortfolio } = require('../controllers/portfolios')


//Get all the portfolio route
router.get('', getPortfolios)

//Get all the portfolio by id route
router.get('/:id',  getPortfolioById)

//Admin protected routes CREATE,UPDATE AND DELETE
router.post('',checkJwt, checkRole('admin'), createPortfolio)
router.patch('/:id',checkJwt, checkRole('admin'), updatePortfolio)
router.delete('/:id', checkJwt, checkRole('admin'), deletePortfolio);
module.exports = router;