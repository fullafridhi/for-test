const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../model/userSchema');

const isAuthenticated = catchAsync(async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    
    if (!token) {
        return next(new AppError('You are not logged in, please log in to access', 401));
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        console.error('Token verification error:', err); // Log the error
        return next(new AppError('Invalid token', 403));
    }

    // const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
        return next(new AppError('The user belonging to this token does not exist', 401));  
    }
    console.log('Authenticated User:', currentUser);
    req.user = currentUser;
    next();
});


module.exports = { isAuthenticated}