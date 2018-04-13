//**************** FETCHING FROM API **************** */
fetch("/api/products")
  .then(response => response.json())
  .then(products => console.log(products));

fetch("/api/posts")
  .then(response => response.json())
  .then(posts => console.log(posts));

//**************** POSTING TO API **************** */

fetch("/api/products", {
  method: "post",
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({ name: "New Product", category: "book" })
})
  .then(res => res.json())

  .then(res => console.log("DEMO: Creating Product", res))
  .catch(e =>
    console.log(
      "DEMO: Adding a new product doesn't work for the production source, but this is how we would've done it!",
      e
    )
  );

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
  .then(res => console.log("NEW: Creating Post", res))
  .catch(e =>
    console.log(
      "DEMO: Adding new product - doesn't work in production server, but this is how we would've done it!",
      e
    )
  );

//**************** CORS **************** */

// fetch("http://localhost:8888/api/products")
//   .then(response => response.json())
//   .then(products =>
//     console.log("CORS: Could steal data directly from backend!", products)
//   )
//   .catch(e => console.log("CORS: Failed to call backend directly :(", e));
