
import express from "express";
import { IndexRoutes } from "./Routes/IndexRoutes.js";

 
const app = express();
const port = 3000;
// app.use(express.static(path.join(__dirname, 'media')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
 
// app.use(express.static('./media'));
// app.use(express.static('./'));
 
app.use('/Email', IndexRoutes);

 
app.listen(port, () => { console.log("port no.: ", port); });
 
 