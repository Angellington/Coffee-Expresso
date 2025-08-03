const authorize = (req, res, next) => {
    const { user } = req.query;

    console.log('Authorize de Middleware ativado')
    if(user === 'john'){
        req.user = { name: 'john', id: 3};
        return next()
    } else {
        return res.status(401).send('Unauthorized')
    }
}

module.exports = authorize;