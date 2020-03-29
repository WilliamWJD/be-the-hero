const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        //DESFAZ AS MIGRATIONS
        await connection.migrate.rollback()
        //CRIA AS MIGRATIONS
        await connection.migrate.latest()
    })

    //FECHA CONEXÃO COM O BANCO
    afterAll(async () => {
        await connection.destroy()
    })
    
    //REALIZA UMA REQUISIÇÃO
    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD",
            email: "contato@contato.com.br",
            whatsapp: "988552277",
            city: "Rio do Sul",
            uf: "SC"
        })
        //TESTA 
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})