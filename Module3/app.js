const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    res.send("Hello, This is my module 3 homework assignment")
});

app.listen(3000, () => {
    console.log('listening to the active port')
});