const express = require('express')
const app = express()

const requestTime = function (req, res, next) {
    var date = new Date();
    var ISTDate = date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    req.requestTime = ISTDate;
    next()
}
// The app.use() method takes a middleware function as its argument and executes it for every incoming request.
app.use(requestTime)

// The app.get() function in Express.js is used to create a route handler for GET requests.
app.get('/', (req, res) => {
    let responseText = 'The app now uses the requestTime middleware function.<br></br> Also, the callback function of the root path route uses the property that the middleware function adds to req (the request object).<br></br>'
    responseText += `<strong>Requested at: ${req.requestTime}</strong>`
    res.send(responseText)
})

app.listen(8000)