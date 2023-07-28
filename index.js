const express = require("express")

const app = express()

const PORT = 3000;

app.get ('/',(req,res) => {
    res.send("Help From Github Actions!!!")
});

app.listen(PORT, ()=> {
    console.log(`Server Running on http://localhost:${PORT}`)
})