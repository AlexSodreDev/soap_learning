import { injectable } from "tsyringe";
import * as soap from "soap";

@injectable()
class AddressService {

  private readonly WSDL_CORREIOS = process.env.WSDL_CORREIOS;

  public findAddressByCepWithCallback(cep: any, cb) {
    soap.createClient(this.WSDL_CORREIOS, (err, client) => {
      if (err) {
        console.log(err)
      }
      client.consultaCEP({ cep: cep }, (err, result) => {
        if (err) {
          console.log(err)
          cb(err, null)
        }
        cb(null, result)
      });
    });
  }

  public async findAddressByCepTransformToPromise(cep) {
    return new Promise((resolve, reject) => {
      soap.createClient(this.WSDL_CORREIOS, (err, client) => {
        if (err) {
          reject(err)
          console.log(err)
        }
        client.consultaCEP({ cep: cep }, (err, result) => {
          if (err) {
            console.log(err)
            reject(err)
          }
          resolve(result.return)
        });
      });
    })
  }

  public async findAddressByCepAsync(cep) {
    const client = await soap.createClientAsync(this.WSDL_CORREIOS);
    const result = await client.consultaCEPAsync({ cep: cep });
    return result[0].return;
  }
}

export { AddressService };