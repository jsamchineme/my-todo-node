import { request, expect } from './requires';

const testTodos = () => {
  describe('Test case for creating create a todo', () => {
    it('should create and return the todo when all required data are supplied', (done) => {
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
};
export default testTodos;
