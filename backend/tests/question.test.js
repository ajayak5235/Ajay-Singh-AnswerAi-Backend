const request = require('supertest');
const app = require('../server');
const { sequelize } = require('../models');

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.close();
});

describe('Question Endpoints', () => {
  let token;

  beforeAll(async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password'
      });

    token = response.body.token;
  });

  it('should create a new question', async () => {
    const response = await request(app)
      .post('/api/questions')
      .set('Authorization', `Bearer ${token}`)
      .send({
        question: 'What is the capital of France?'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.answer).toBeDefined();
  });
});
