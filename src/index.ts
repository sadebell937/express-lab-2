import express from 'express';

import cors from "cors"

import pizzaRoutes from "./routes/pizza-routes"

import path from 'path';


const app= express();

app.use(cors())

//app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", pizzaRoutes)

const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}.`));

