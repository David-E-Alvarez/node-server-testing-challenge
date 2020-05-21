//import a supertest instance (i think)/line of code to use supertest
const request = require('supertest');

//import server to test
const server = require('./server.js');

describe('GET /', ()=> {
    it('should return a 200', () => {
        return request(server).get('/')
            .expect(200)            
    })
    // it('should check to see if server is up', ()=>{
    //     let message = "up";
    //     //using .then & .catch
    //     return request(server).get('/')
    //         .then(response => {
    //             expect(response.body.message).toEqual(message)
    //         })
    // })
    it('should test server using async/await', async()=> {
        let message = "up";
        const response = await request(server).get('/')
        expect(response.body.message).toEqual(message)
    })
})

describe('server.js', () => {
    it('should check array length', () => {
        return request(server).post('/users')
            .then(res => {
                expect(res.body.length).toBe(3);
            })
    })
    it('should log users', () => {
        return request(server).get('/users')
            .then(res => {
                res.body.forEach(user => {
                    console.log(user)
                })
            })
        
    })
})