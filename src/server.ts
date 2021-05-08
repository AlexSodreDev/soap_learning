import express from 'express';
import { AddressController } from "./controllers/AddressController";

const app = express();

const addressController = new AddressController();

app.get("/cep/:cep", addressController.search);

app.post("/cep", (request, response) => {
  return response.json({ message: "Dados salvos com sucesso!" })
});

app.listen(3333, () => console.log("✔✔ Server running 🚀 ✔✔"));