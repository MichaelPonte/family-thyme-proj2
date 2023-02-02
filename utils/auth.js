const withAuth = (req, res, next) => {
    if (!req.session?.loggedIn) {
      res.redirect('/');
    } else {
      next();
    }
  };
  //Redirects the user to the login page if they are not logged in
  module.exports = withAuth;