import express from 'express';

const app = express();

app.get("/cep", (request, response) => {
  return response.json({ message: "Hello World - SOAP" })
});

app.listen(3333, () => console.log("✔✔ Server running 🚀 ✔✔"));