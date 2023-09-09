import request from 'supertest';
import { app } from '../../app';


it('has a route handler listening to /api/add-transaction for post requests', async () => {
    const response = await request(app).post('/api/add-transaction').send({});
    expect(response.status).not.toEqual(404);
  });

  it('returns an error if an invalid currency is provided', async () => {
    await request(app)
      .post('/api/add-transaction')
      .send({
        amount: 980,
        currency: '',
        accountNumber: '2030',
        status: "BOOKED",
      })
      .expect(400);
  });