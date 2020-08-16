module.exports = class Product {
  constructor (title) {
    this.title = title
  }

  save () {
    console.log(this)
  }

  static fetchAll () {
    return this
  }
}
