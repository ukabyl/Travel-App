const request = require('supertest');

// Test for server listening
describe('The page should be running on localhost 8080', () => {
    test('Page response successfully.', async () => {
        const res = await request('http://localhost:8080').get('/');
        expect(res.statusCode).toBe(200);
    });
});