import { Router } from 'express'
import { AddressController } from '../controllers/AddressController'

const router = Router()

const addressController = new AddressController()
router.get('/addresses', addressController.findAddress)
router.post('/addressesTeste', addressController.findAllAddresses)

export default router