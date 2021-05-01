import { Request, Response } from "express";
import * as soap from "soap";

class SearchController {

  async search(request: Request, response: Response) {
    const wsdl = "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl";
    const cep = request.params.cep

    soap.createClient(wsdl, (err, client) => {
      if (err) {
        console.log(err)
      }

      client.consultaCEP({ cep: cep }, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          console.log(result)
        }
      });
    });

    response.json(cep);
  };
};


export { SearchController };