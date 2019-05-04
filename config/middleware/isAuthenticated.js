// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  const specialURLs = ["/login", "/register", "/api/login", "/api/signup", "/manifest.json"];
  const url = req.originalUrl;
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    if (url === "/login" || url === "/register") {
      return res.redirect("/");
    }
    return next();
  }

  // if (specialURLs.indexOf(url) === -1) {
  //   // If the user isn't logged in, redirect them to the login page
  // return res.redirect("/login");
  // }

  return next();
  
};
