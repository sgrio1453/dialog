module.exports = function(req,res,next){
    res.locals.isAuth = req.session.isAuth;
    res.locals.userid = req.session.userid;
    next();}