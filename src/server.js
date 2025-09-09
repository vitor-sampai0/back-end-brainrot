import express from "express";
import brainrotRoutes from "./routes/brainrotRoutes.js";
import cors from "cors";
const app = express();
app.use(cors());
const port = 4000;
app.use(express.json());
app.use("/brainrot", brainrotRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
