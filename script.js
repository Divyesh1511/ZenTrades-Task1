fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
            .then(response => response.json())
            .then(data => {
                const products = data.products;

                const productList = Object.keys(products).map(productId => {
                    const product = products[productId];
                    return {
                        subcategory : product.subcategory,
                        title: product.title,
                        price: parseFloat(product.price),
                        popularity: parseInt(product.popularity)
                    };
                });

                productList.sort((a, b) => b.popularity - a.popularity);

                const productTableBody = document.querySelector('#productList tbody');
                productList.forEach(product => {
                    const row = `<tr><td>${product.title}</td><td>${product.price}</td></tr>`;
                    productTableBody.insertAdjacentHTML('beforeend', row);
                });
            })
            .catch(error => console.log(error));