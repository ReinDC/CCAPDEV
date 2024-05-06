// import userRouter from './usersRouter.js';
// import postsRouter from './postsRouter.js';

const Router = require('express');
const AccountRouter = require('./AccountRouter.js');
// const RestaurantRouter = require('./RestaurantsRouter.js');
const router = Router();

router.get("/", (req, res) => {
    res.render("login", {
        title: "Login Page"
    });
});

router.get("/createreview", (req, res) => {
    res.render("createreview", {
        title: "Create a Review"
    });

});

router.get("/reviews", (req, res) => {
    res.render("reviews", {
        title: "Buyerview Search"
    });

});

router.use(AccountRouter);

module.exports = router;