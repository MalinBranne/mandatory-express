require("isomorphic-fetch");

class EdumentSource {
  getProducts() {
    return fetch("http://demo.edument.se/api/products")
      .then(response => response.json())
      .then(products => products);
  }

  getProduct(id) {
    return fetch(`http://demo.edument.se/api/products/${id}`)
      .then(response => {
        // if (!response.ok) {
        //     throw `Product with ID ${id} not found`;
        // }

        return response.json();
      })
      .then(product => product);
  }

  addProduct(productData) {
    console.log(productData);
    // throw Error("EdumentSource.addProduct not supported!");
  }

  getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(products => products);
  }
  // getPosts() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data, "hey hoooe");
  //       return data;
  //     });
  // samma kod på annat sätt:
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data, "hey hoooe");
  //     return data;
  // }); // retunerar promise som fetchen skapar och uppfyller med data
  // skriv return fetch för att vi returnerar resultatet av promise.

  getPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        // if (!response.ok) {
        //   throw "fel";
        // }
        return response.json();
      })
      .then(post => post);

    //   .then(response => response.json())
    //   .then(products => {
    //     const found = products.find(product => product.id === id);
    //     found ? resolve(found) : reject();
    //     console.log(product1, "hey id");
    //   });
  }

  addPost(newPost) {
    console.log(newPost);
    // throw Error("detta är just nu inte tillåtet *note to self*");
  }
}

module.exports = EdumentSource;
