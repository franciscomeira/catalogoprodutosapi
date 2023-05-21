async function pesquisarProdutos() {
  const query = campoBusca.value;
  if (!query) {
    obterProdutos();
    return;
  }

  loading.style.display = "block";

  try {
    const response = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${query}`
    );
    const data = await response.json();

    let tabelas = "";
    for (let i = 0; i < data.length; i++) {
      const novoObjeto = {
        name: data[i].name,
        brand: data[i].brand,
        price: data[i].price,
        image_link: data[i].image_link,
      };
      tabelas += criarTabela(novoObjeto);
    }

    resultado.innerHTML = tabelas;
  } catch (error) {
    console.error(error);
  }

  loading.style.display = "none";
}
async function pesquisarProdutos() {
  const query = campoBusca.value;
  if (!query) {
    obterProdutos();
    return;
  }

  loading.style.display = "block";

  try {
    const response = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${query}`
    );
    const data = await response.json();

    let tabelas = "";
    for (let i = 0; i < data.length; i++) {
      const novoObjeto = {
        name: data[i].name,
        brand: data[i].brand,
        price: data[i].price,
        image_link: data[i].image_link,
      };
      tabelas += criarTabela(novoObjeto);
    }

    resultado.innerHTML = tabelas;
  } catch (error) {
    console.error(error);
  }

  loading.style.display = "none";
}
