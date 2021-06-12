import request from 'supertest';
import { TableForeignKey } from 'typeorm';
import app from '../src/server';

describe('Test Correio SOAP integration', () => {

    it('should return status code 200 ok, when pass valid cep', async () => {
        const res = await request(app)
            .get('/addresses?ceps=29102902')

        expect(res.statusCode).toEqual(200)
    })


    it('when return with success, should have the following property', async () => {
        const res = await request(app)
            .get('/addresses?ceps=29102902')

        expect(res.body[0]).toHaveProperty('bairro')
        expect(res.body[0]).toHaveProperty('cep')
        expect(res.body[0]).toHaveProperty('cidade')
        expect(res.body[0]).toHaveProperty('complemento2')
        expect(res.body[0]).toHaveProperty('end')
        expect(res.body[0]).toHaveProperty('uf')
    })

    it('should return status code 400 bad request and a message with error, when intragration fails', async () => {
        const res = await request(app)
            .get('/addresses?ceps=291029029')

        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('message')
        expect(res.body.message).toMatch(/(CEP INVÁLIDO)/i)

    })
})