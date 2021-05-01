import express from 'express';
import { SearchController } from "./controller/SearchController";
const app = express();

const searchController = new SearchController();

app.get("/cep/:cep", searchController.search);

app.post("/cep", (request, response) => {
  return response.json({ message: "Dados salvos com sucesso!" })
});

app.listen(3333, () => console.log("✔✔ Server running 🚀 ✔✔"));