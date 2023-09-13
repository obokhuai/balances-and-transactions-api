import request from 'supertest';
import { app } from '../../app';

describe('GET /api/latest', () => {
    it('should fetch the latest transaction', async () => {
        const response = await request(app)
            .get('/api/lastest')
            .expect(200);

        expect(response.body).toEqual(expect.objectContaining({
            date: expect.any(String),
            amount: expect.any(Number),
            currency: expect.any(String),
            status: expect.any(String)
        }));

    });

});
