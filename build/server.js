"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AddressController_1 = require("./controllers/AddressController");
const app = express_1.default();
const addressController = new AddressController_1.AddressController();
app.get("/cep/:cep", addressController.search);
app.post("/cep", (request, response) => {
    return response.json({ message: "Dados salvos com sucesso!" });
});
app.listen(3333, () => console.log("✔✔ Server running 🚀 ✔✔"));
//# sourceMappingURL=server.js.map