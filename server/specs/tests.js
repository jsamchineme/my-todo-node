import { request, expect } from './requires';
import testTodos from './todo.tests';
import testTodoItems from './todoItem.tests';

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

  testTodos();

  testTodoItems();
});
