const express = require('express'),
    path = require('path');

const app = express()
app.set('PORT', 4010)

app.get('/', (res, req) => {
    req.send("2")
});


app.listen(app.get('PORT'), () => {
    console.log("All right, boys");
    console.log(__dirname);
})