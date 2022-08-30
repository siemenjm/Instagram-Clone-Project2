const routes = [
    { href: "/", title: "Home" },
    { href: "/posts", title: "All Posts" },
    { href: "/posts/new", title: "Add New Post" },
];

const authRoutes = [
    { href: "/login", title: "Login" },
    { href: "/register", title: "Register" },
];

let navLinks = function navLinks(req, res, next) {
    if (req.session.currentUser) {
        res.locals.routes = routes;
    } else {
        res.locals.routes = authRoutes;
    }

    next();
}

module.exports = navLinks;