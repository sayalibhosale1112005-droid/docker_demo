import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Docker setup completed successfully"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});