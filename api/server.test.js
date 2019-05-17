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
        const badGame = {releaseYear: ''}
        return request(server)
            .post('/games')
            .send(badGame)
            .expect(422)
    })
    it('should return json', () => {
        const game = {title: 'GTA V', genre: 'Action-Adventure', releaseYear: 2013}
        return request(server)
            .post('/games')
            .send(game)
            .then(res => {
                expect(res.type).toBe('application/json')
            })
    })
})

describe('GET /games', () => {
    it('should return 200 status', () => {
        return request(server)
            .get('/games')
            .expect(200)
    })
    it('should return an array', () => {
        return request(server)
            .get('/games')
            .then(res => {
                expect(res.body).toContain([])
            })
    })
    it('returns JSON', () => {
        return request(server)
            .get('/games')
            .then(res => {
                expect(res.type).toBe('application/json')
            })
    })
})