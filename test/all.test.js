const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');

chai.use(chaiHttp);
const expect = chai.expect;
const assert = chai.assert;
let course;
describe('Course API', () => {
    it('should get all courses', async () => {

        try {
            const result = await chai.request(app).get('/api/v1/courses');
            expect(result).to.have.status(200);
            expect(result.body).to.be.an('array');
        } catch (error) {
            assert.fail(error.message);
        }
    }).timeout(50000);

    it('should create a new course', async () => {
        const newCourse = {
            title: 'New Course',
            description: 'This is a new course',
            instructor: 'John Doe',
            duration: 60,
            price: 29.99
        };

        try {
            const res = await chai.request(app).post('/api/v1/courses').send(newCourse);
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('_id');
            course = res.body._id;
            expect(res.body.title).to.equal(newCourse.title);
        } catch (error) {
            assert.fail(error.message);
        }
    });
    it('should get all enrollments', async () => {

        try {
            const result = await chai.request(app).get('/api/v1/enrollments');
            expect(result).to.have.status(200);
            expect(result.body).to.be.an('array');
        } catch (error) {
            assert.fail(error.message);
        }
    }).timeout(50000);
    it('should create a new enrollment', async () => {
        const newEnrollment = {
            studentName: "testStudent",
            course: course
        };
        try {
            const res = await chai.request(app).post('/api/v1/enrollments').send(newEnrollment);
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('_id');
            expect(res.body.studentName).to.equal(newEnrollment.studentName);
        } catch (error) {
            assert.fail(error.message);
        }
    });
});