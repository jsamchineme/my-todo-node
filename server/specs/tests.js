import chai from 'chai';
import supertest from 'supertest';
import app from '../../app';

const { expect } = chai;

const server = app.listen(8001);

const request = supertest(server);

describe('Testing MyTodoNode App', () => {
  // after((done) => {
  //   server.close();
  //   done();
  // });

  // before((done) => {
  //   server.close();
  //   done();
  // });

  describe('Test case for visiting application home page', () => {
    it('should load the application home page', (done) => {
      request.get('/')
        .set('Content-Type', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body).deep.equal({
            message: 'Welcome to the MyTodoNode API!'
          });
          if (err) return done(err);
          done();
        });
    });
  });
  describe('Test case for creating create a todo', () => {
    it('should create and return the todo with data supplied', (done) => {
      const todoData = {
        title: 'Todo 1'
      };
      request.post('/api/todos')
        .send(todoData)
        .expect(201)
        .end((err, res) => {
          expect(res.body.data.title).to.equal('Todo 1');
          if (err) done(err);
          done();
        });
    });
    it('should fail to create todo with required data missing', (done) => {
      request.post('/api/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
          expect(res.body.message).to.equal('failed');
          if (err) done(err);
          done();
        });
    });
  });
});
