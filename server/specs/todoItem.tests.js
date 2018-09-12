import { request, expect } from './requires';

const test = () => {
  describe('Test Cases for Todo Item', () => {
    let todoId;
    let todoItemId;
    before((done) => {
      const todoData = {
        title: 'Todo 1'
      };
      request.post('/api/todos')
        .send(todoData)
        .expect(201)
        .end((err, res) => {
          todoId = res.body.data.id;
          if (err) done(err);
          done();
        });
    });
    it('should create and return the todo item when all required data are supplied', (done) => {
      const todoItemData = {
        content: 'dummy Item',
        todoId
      };
      request.post(`/api/todos/${todoId}/items`)
        .send(todoItemData)
        .expect(201)
        .end((err, res) => {
          todoItemId = res.body.data.id;
          expect(res.body.data.content).to.equal('dummy Item');
          if (err) done(err);
          done();
        });
    });
    it('should fail to create todo item with required data missing', (done) => {
      request.post(`/api/todos/${todoId}/items`)
        .send({})
        .expect(400)
        .end((err, res) => {
          expect(res.body.message).to.equal('failed');
          if (err) done(err);
          done();
        });
    });
    describe('Test for updating a Todo Item', () => {
      before((done) => {
        const todoData = {
          title: 'Todo 1'
        };
        request.post('/api/todos')
          .send(todoData)
          .expect(201)
          .end((err, res) => {
            todoId = res.body.data.id;
            if (err) done(err);
            done();
          });
      });
      it('should update a todo item', (done) => {
        const data = {
          content: 'Updated Todo Title'
        };
        request.put(`/api/todos/${todoId}/items/${todoItemId}`)
          .send(data)
          .expect(200)
          .end((err, res) => {
            expect(res.body.data.content).to.equal('Updated Todo Title');
            if (err) done(err);
            done();
          });
      });
      it('should delete todo item', (done) => {
        request.delete(`/api/todos/${todoId}/items/${todoItemId}`)
          .expect(204)
          .end((err, res) => {
            expect(res.body.message).to.equal('deleted');
            if (err) done(err);
            done();
          });
      });
    });
  });
};
export default test;
