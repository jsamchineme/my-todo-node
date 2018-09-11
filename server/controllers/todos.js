import { Todo, TodoItem } from '../models';

module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }]
      })
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }]
      })
      .then((todo) => {
        if (!todo) {
          return res.status(404).send({
            message: 'Not Found',
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }]
      })
      .then((todo) => {
        if (!todo) {
          return res.status(404).send({
            message: 'Not Found',
          });
        }
        return todo
          .update(req.body, { fields: Object.keys(req.body) })
          .then(newTodo => res.status(200).send(newTodo))
          .catch(() => res.status(400).send(400));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Todo
      .findById(req.params.todoId)
      .then((todo) => {
        if (!todo) {
          return res.status(404).send({
            message: 'Not Found',
          });
        }

        return todo
          .destroy()
          .then(() => res.status(204).send())
          .catch(() => res.status(400).send(400));
      })
      .catch(error => res.status(400).send(error));
  }
};
