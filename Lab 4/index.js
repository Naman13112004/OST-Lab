import axios from "axios";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/info", (req, res) => {
    res.json({
        name: "Naman",
        lab: "OST Batch A",
        stream: "BTech CE",
        semester: 6,
    });
});

app.get("/api/user", async (req, res) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    res.send(response.data);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});