import express from 'express';

const app = express();

app.get("/cep", (request, response) => {
  return response.json({ message: "Hello World - SOAP" })
});

app.post("/cep", (request, response) => {
  return response.json({ message: "Dados salvos com sucesso!" })
});

app.listen(3333, () => console.log("✔✔ Server running 🚀 ✔✔"));