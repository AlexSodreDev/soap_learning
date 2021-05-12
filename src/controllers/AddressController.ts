import { Request, Response } from 'express';
import { AddressService } from '../services/AddressService';
import { container } from 'tsyringe';

class AddressController {

  public async findAllAddressesBlockingEventLoop(req: Request, res: Response) {
    const addressService = container.resolve(AddressService);
    const { ceps } = req.body;
    const result = []
    for (const cep of ceps) {
      const cepResponse = await addressService.findAddressByCepAsync(cep);
      console.log('CEP RESULT', cepResponse)
      result.push(cepResponse)
    }
    console.log(result)
    return res.status(200).send(result);
  }

  public async findAllAddresses(req: Request, res: Response) {
    const addressService = container.resolve(AddressService);
    const { ceps } = req.body;
    const result = await Promise.all(
      ceps.map(cep => addressService.findAddressByCepAsync(cep))
    );
    console.log(result)
    return res.status(200).send(result);
  }
}

export { AddressController }