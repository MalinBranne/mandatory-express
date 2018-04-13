const products = [
  {
    id: 1,
    name: "JS 101",
    category: "book"
  },
  {
    id: 2,
    name: "Avancerad JS",
    category: "book"
  }
];

const posts = [
  {
    id: 0,
    name: "Post 101",
    category: "post"
  },
  {
    id: 1,
    name: "Avancerad Post",
    category: "post"
  }
];

class mockSource {
  getProducts() {
    return Promise.resolve(products);
  }

  getProduct(id) {
    return new Promise((resolve, reject) => {
      const found = products.find(product => product.id === id);
      found ? resolve(found) : reject();
    });

    // return
  }
  addProduct({ category, name }) {
    const lastIndex = products.length - 1;
    const lastId = products[lastIndex].id;
    const newProduct = {
      id: lastId + 1,
      category,
      name
    };
    products.push(newProduct);
    console.log(newProduct);
    return Promise.resolve(newProduct);
  }

  getPosts() {
    return Promise.resolve(posts);
  }

  getPost(id) {
    return new Promise((resolve, reject) => {
      const found = posts.find(post => post.id === id);
      found ? resolve(found) : reject();
    });
  }

  addPost({ category, name }) {
    const lastIndex = posts.length - 1;
    const lastId = posts[lastIndex].id;

    const newPost = {
      id: lastId + 1,
      category,
      name
    };
    posts.push(newPost);
    console.log(newPost); // TEST: Logga post
    return Promise.resolve(newPost);
    //return posts;
  }
}

module.exports = mockSource;
