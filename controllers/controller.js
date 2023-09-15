module.exports.home = function(req, res){
    res.end("<h1>Hi There welcome on Home Page !</h1>");
}

module.exports.about = function(req, res){
    res.end("<h1>Hi There welcome on About Page !</h1>");
}

module.exports.contact = function(req, res){
    res.end("<h1>Hi There welcome on Contact Page !</h1>");
}

module.exports.notFound = function(req, res){
    res.end("<h1>Error 404 !  Page not found.</h1>");
}