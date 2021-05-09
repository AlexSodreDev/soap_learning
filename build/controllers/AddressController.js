"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressController = void 0;
const AddressService_1 = require("../services/AddressService");
const tsyringe_1 = require("tsyringe");
class AddressController {
    findAddressWithCallback(req, res) {
        const { cep } = req.query;
        const addressService = tsyringe_1.container.resolve(AddressService_1.AddressService);
        addressService.findAddressByCepWithCallback(cep, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            else {
                return res.status(200).send(result.return);
            }
        });
    }
    findAddressTransformToPromise(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cep } = req.query;
            const addressService = tsyringe_1.container.resolve(AddressService_1.AddressService);
            const result = yield addressService.findAddressByCepTransformToPromise(cep);
            return res.status(200).send(result);
        });
    }
    findAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const addressService = tsyringe_1.container.resolve(AddressService_1.AddressService);
            const { ceps } = req.query;
            const cepsList = [].concat(ceps);
            const result = [];
            for (const cep of cepsList) {
                const cepResponse = yield addressService.findAddressByCepAsync(cep);
                result.push(cepResponse);
            }
            console.log(result);
            return res.status(200).send(result);
        });
    }
    findAllAddressesBlockingEventLoop(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const addressService = tsyringe_1.container.resolve(AddressService_1.AddressService);
            const { ceps } = req.body;
            const result = [];
            for (const cep of ceps) {
                const cepResponse = yield addressService.findAddressByCepAsync(cep);
                console.log('CEP RESULT', cepResponse);
                result.push(cepResponse);
            }
            console.log(result);
            return res.status(200).send(result);
        });
    }
    findAllAddresses(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const addressService = tsyringe_1.container.resolve(AddressService_1.AddressService);
            const { ceps } = req.body;
            const result = yield Promise.all(ceps.map(cep => addressService.findAddressByCepAsync(cep)));
            console.log(result);
            return res.status(200).send(result);
        });
    }
}
exports.AddressController = AddressController;
//# sourceMappingURL=AddressController.js.map