import { Request, Response } from 'express';
import { AddressService } from '../services/AddressService';
import { container } from 'tsyringe';

class AddressController {

  public async findAllAddresses(req: Request, res: Response) {
    const addressService = container.resolve(AddressService);
    const { ceps } = req.query;
    const cepList = [].concat(ceps)
    const result = await Promise.all(
      cepList.map(cep => addressService.findAddressByCepAsync(cep))
    );
    console.log(result)
    return res.status(200).send(result);
  }
}

export { AddressController }