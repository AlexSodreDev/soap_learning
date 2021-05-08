import * as soap from "soap";

interface ConsultaCepResponse {
  bairro: string;
  cep: string;
  cidade: string;
  complemento2: string;
  end: string;
  uf: string;
};

class CorreiosService {
  public findAddressByCep(cep: string) {
    const wsdl = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';
    soap.createClient(wsdl, (err, client) => {
      if (err) {
        console.log(err)
      }

      client.consultaCEP({ cep: cep }, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          console.log(result)
          return result;
        }
      });
    });
  }

}

export { CorreiosService };