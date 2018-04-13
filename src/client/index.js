//**************** FETCHING/POSTING PRODUCTS FROM API **************** */
fetch("/api/products")
  .then(response => response.json())
  .then(products => console.log("NEW: getting all products", products));

fetch("/api/products/2")
  .then(response => response.json())
  .then(product => console.log("NEW: getting a single product", product));

fetch("/api/products", {
  method: "post",
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({ name: "New Product", category: "book" })
})
  .then(res => console.log("NEW: adding a product", res))
  .catch(e =>
    console.log(
      "DEMO: Adding a new product doesn't work for the production source, but this is how we would've done it!",
      e
    )
  );

//**************** FETCHING/POSTING POSTS FROM API **************** */

fetch("/api/posts")
  .then(response => response.json())
  .then(posts => console.log("NEW: getting all posts", posts));

fetch("api/posts/2")
  .then(response => response.json())
  .then(post => console.log("NEW: getting a single post", post)); // Loggas ut i bash men inte i browser-consollen. Why?

fetch("/api/posts/", {
  method: "post",
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({
    name: "New Post",
    category: "Posted"
  })
})
  .then(response => response.json())
  .then(res => console.log("NEW: adding a post", res))
  .catch(e =>
    console.log(
      "DEMO: Adding a new post doesn't work for the production source, but this is how we would've done it!",
      e
    )
  );

fetch("/api/posts", {
  method: "DELETE",
  body: JSON.stringify({
    id: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.json())
  .then(res => console.log("NEW: deleting a post", res))
  .catch(e => console.log("Couldn't find post", e));

// ...

//** NOT SURE IF I NEED THE FETCH CALLS BELOW - ASSUME THE ONES ABOVE WILL FETCH FROM THESE APIS IF IN PRODUCTION MODE? **/

// ...

fetch("http://demo.edument.se/api/products", {
  method: "post",
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({ name: "New Product", category: "book" })
})
  .then(res => console.log(" PRODUCTION MODE: adding a product", res))
  .catch(e =>
    console.log(
      " PRODUCTION MODE: Adding a new product doesn't work for the production source, but this is how we would've done it!",
      e
    )
  );

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "post",
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({
    name: "New Post",
    category: "Posted"
  })
})
  .then(response => response.json())
  .then(res => console.log(" PRODUCTION MODE: adding a post", res))
  .catch(e =>
    console.log(
      " PRODUCTION MODE: Adding a new post doesn't work for the production source, but this is how we would've done it!",
      e
    )
  );

//**************** CORS **************** */

fetch("http://localhost:8888/api/products")
  .then(response => response.json())
  .then(products =>
    console.log("CORS: Could steal data directly from backend!", products)
  )
  .catch(e => console.log("CORS: Failed to call backend directly :(", e));
