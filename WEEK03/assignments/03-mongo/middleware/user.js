function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    console.log("user middleware active");
    next();
}

module.exports = userMiddleware;