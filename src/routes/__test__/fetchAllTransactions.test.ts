import request from 'supertest';
import { app } from '../../app';

const createTransaction = () => {
  return request(app).post('/api/add-transaction').send({
    amount: 980,
    currency: 'EUR',
    accountNumber: '2030',
    status: "BOOKED",
  });
};

it('can fetch all the transactions', async () => {
  await createTransaction();
  await createTransaction();
  await createTransaction();
  const response = await request(app).get('/api/statement').send().expect(200);
  expect(response.status).toBe(200);
  expect(response.body.transactions.length).toEqual(3);
});
