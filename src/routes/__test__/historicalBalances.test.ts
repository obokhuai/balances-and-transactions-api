import request from 'supertest';
import { app } from '../../app';


describe("Balance and Transactions API", () => {
  describe("GET /historical-balances", () => {
    it("should be able to get the boilerplate response", async () => {
      const response = await request(app).get("/api/historical-balances");
      expect(response.status).toBe(200);
    });
  });
});