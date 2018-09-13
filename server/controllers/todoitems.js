import { TodoItem } from '../models';

module.exports = {
  create(req, res) {
    return TodoItem
      .create({
        content: req.body.content,
        todoId: req.params.todoId
      })
      .then(todoItem => res.status(201).json({ data: todoItem }))
      .catch(error => res.status(400).json({ message: 'failed', error }));
  },
  update(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then(todoItem => todoItem
        .update(req.body, { fields: Object.keys(req.body) })
        .then(updatedTodoItem => res.status(200).json({ data: updatedTodoItem }))
        .catch(error => res.status(400).send(error)))
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        }
      })
      .then(todoItem => todoItem
        .destroy()
        .then(() => res.send(204))
        .catch(error => res.status(400).send(error)))
      .catch(error => res.status(400).send(error));
  }
};
