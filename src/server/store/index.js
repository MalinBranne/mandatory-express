const mockSource = require("./mockSource");
const EdumentSource = require("./edumentSource");

class Store {
  constructor(source) {
    this.source = source;
  }

  getProducts() {
    return this.source.getProducts();
  }

  getProduct(id) {
    return this.source.getProduct(id);
  }

  addProduct(productData) {
    return this.source.addProduct(productData);
  }

  getPosts() {
    return this.source.getPosts();
  }
  getPost(id) {
    return this.source.getPost(id);
  }
  addPost(postData) {
    return this.source.addPost(postData);
  }
  deletePost(id) {
    return this.source.deletePost(id);
  }
}

let source;
if (process.env.NODE_ENV === "development") {
  source = new mockSource();
} else {
  // process.env.NODE_ENV === 'production',
  // use Edument as a source for real data.
  source = new EdumentSource();
}

module.exports = new Store(source);
