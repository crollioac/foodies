const express = require('express');
const cors = require('cors');
const app = express();

const apiRouter = require("./server/routes/apiRouter");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const HTTP_PORT = 4000;


app.use("/api", apiRouter);
// app.get("/users", (req, res) => {
//     const GET_QUERY = "Select * from users";
    
//     connection.query(GET_QUERY, (err, results) => {
//         if(err) {
//             console.error(err);
//         } 

//         res.json(results);
//     });
    
// });

// app.get("/user/register", (req, res) => {
//     const GET_QUERY = "Select * from users";
    
//     connection.query(GET_QUERY, (err, results) => {
//         if(err) {
//             console.error(err);
//         } 

//         res.json(results);
//     });
    
// });


app.post("/user/register", (req, res) => {
    
    
    const GET_QUERY = "Select * from users";
    
    connection.query(GET_QUERY, (err, results) => {
        if(err) {
            console.error(err);
        } 

        res.json(results);
    });
    
});



app.listen(HTTP_PORT, () => {
    console.log(`listening on port:${HTTP_PORT}`);
});