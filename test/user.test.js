import supertest from 'supertest'
import { prismaClient } from '../src/application/database.js'
import { web } from '../src/application/web.js'
import { logger } from '../src/application/logging.js'

describe('POST /api/users', function () {

  afterEach(async () => {
    await prismaClient.user.deleteMany({
      where: {
        username: "adiva"
      }
    })
  })

  it('should can register new user', async () => {
    const result = await supertest(web)
      .post('/api/users')
      .send({
        username: 'adiva',
        password: 'rahasia',
        name: 'Adiva Prayoga'
      })

      expect(result.status).toBe(200)
      expect(result.body.data.username).toBe('adiva')
      expect(result.body.data.name).toBe('Adiva Prayoga')
      expect(result.body.data.password).toBeUndefined()
  })

  it('should reject if request is invalid', async () => {
    const result = await supertest(web)
      .post('/api/users')
      .send({
        username: '',
        password: '',
        name: ''
      })

      logger.info(result.body);

      expect(result.status).toBe(400)
      expect(result.body.errors).toBeDefined()
  })

  it('should reject if username already registered', async () => {
    let result = await supertest(web)
      .post('/api/users')
      .send({
        username: 'adiva',
        password: 'rahasia',
        name: 'Adiva Prayoga'
      })

      logger.info(result.body);

      expect(result.status).toBe(200)
      expect(result.body.data.username).toBe('adiva')
      expect(result.body.data.name).toBe('Adiva Prayoga')
      expect(result.body.data.password).toBeUndefined()

    result = await supertest(web)
      .post('/api/users')
      .send({
        username: 'adiva',
        password: 'rahasia',
        name: 'Adiva Prayoga'
      })

      logger.info(result.body);

      expect(result.status).toBe(400)
      expect(result.body.errors).toBeDefined()
  })
})