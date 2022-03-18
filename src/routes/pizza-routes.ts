// require the express module
import express from "express";
 
// create a new Router object
const routes = express.Router();
 

routes.get("/pizza-routes/", (req, res) => {
    res.render('homepage');
});


export default routes;


