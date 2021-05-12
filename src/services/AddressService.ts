import { injectable } from "tsyringe";
import * as soap from "soap";

@injectable()
class AddressService {

  private readonly WSDL_CORREIOS = process.env.WSDL_CORREIOS;

  public async findAddressByCepAsync(cep) {
    const client = await soap.createClientAsync(this.WSDL_CORREIOS);
    const result = await client.consultaCEPAsync({ cep: cep });
    return result[0].return;
  }
}

export { AddressService };