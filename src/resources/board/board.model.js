const uuid = require('uuid').v4;

class Board {
  constructor({
    id = uuid(),
    title = 'board title',
    columns = [{ order: 1, title: 'to do' }]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(obj => ({id: uuid(), ...obj}))
  }
}

module.exports = Board;
