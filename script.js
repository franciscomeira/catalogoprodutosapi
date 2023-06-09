//Link: http://makeup-api.herokuapp.com/api/v1/products.json
//Declaração de variaveis

let productsPromise = fetch(
  "http://makeup-api.herokuapp.com/api/v1/products.json"
);
//

productsPromise.then((resp) => {
  resp.json().then((products) => {
    // console.log(products);
    let table = rendertable(products);
    document.getElementById("app").innerHTML = table;
  });
});

function rendertable(products) {
  let rows = products.map((product) => {
    return `<tr><td>${product.id}</td><td>${product.name}</td> <td>${product.price}</td>  </tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}
