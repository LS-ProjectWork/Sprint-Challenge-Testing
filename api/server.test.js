const request = require('supertest');
const server = require('./server');

describe('POST /games', () => {
    it('should return 200 status when getting right data', () => {
        const game = {title: 'The Legend of Zelda', genre: 'Action-Adventure', releaseYear: 1986}
        return request(server)
            .post('/games')
            .send(game)
            .then(res => {
                expect(res.status).toBe(200)
            })
    })
    it('should return 422 status when getting incorrect data', () => {
        const badGame = {title: '', genre: 'Nothing', releaseYear: 'never'}
        return request(server)
            .post('/games')
            .send(badGame)
            .expect(422)
    })
})