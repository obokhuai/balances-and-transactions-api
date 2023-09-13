import request from 'supertest';
import { app } from '../../app';

describe("Balance and Transactions API", () => {
  describe("GET /api/historical-balances", () => {
    it("should be able to get the boilerplate response", async () => {
      const response = await request(app).get("/api/historical-balances");
      expect(response.status).toBe(200);
    });
  });
});

describe('GET /api/historical-balances', () => {
    it('should fetch historical balances for a date range', async () => {
        const response = await request(app)
            .get('/api/historical-balances?from=2022-01-03&to=2022-01-05&sort=desc')
            .expect(200);

        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                date: expect.any(String),
                amount: expect.any(Number),
                currency: "EUR"
            })
        ]));
    });


});
