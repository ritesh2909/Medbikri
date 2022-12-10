const express = require("express");
const axios = require("axios");


const app = express();
const port = 3000;

const apiKey = "AIzaSyD5R21VQYta1tyRY01NHjww2IIOCNhB5K8";
const apiUrl = "https://www.googleapis.com/youtube/v3";



app.get("/search", async (req, res, next) => {
    try {
        const searchQuery = req.query.search_query;
        const url = `${apiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${searchQuery}`;

        const response = await axios.get(url);
        const data = response.data;

        const titles = response.data.items.map((item) => item.snippet);
        // console.log(titles);

        res.send(titles);
    } catch (err) {
        next(err);
    }
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});