
const auth = (req, res, next) => {
  console.log(req.session.user)
    if (req.session.user !== null && req.session.user !== undefined) {
      next();
    } else {
      return res.redirect("/login")
    }
  }
  
  module.exports = auth;