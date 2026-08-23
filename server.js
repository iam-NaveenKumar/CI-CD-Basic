import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello from my CI/CD server! updated</h1>");
});

if (process.env.NODE_ENV !== "test") {
    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
    });
}

export default app;