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
  const response = await request(app).get('/api/statement').send().expect(200);
});

