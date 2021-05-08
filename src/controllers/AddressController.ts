import { Request, Response } from "express";
import { CorreiosService } from "../services/CorreiosService";

class AddressController {

  private correiosService;

  constructor() {
    this.correiosService = new CorreiosService();
  }

  public async search(request: Request, response: Response) {
    try {
      const wsdl = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'
      const cep = request.params.cep
      const consultaCepResponse = await this.correiosService.findAddressByCep(cep);

      return response.json(consultaCepResponse);
    } catch (err) {
      console.log(err)
    }
  };
};


export { AddressController };