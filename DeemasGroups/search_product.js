document.addEventListener('DOMContentLoaded',()=>{


const search_button=document.getElementById('search-btn');
search_button.addEventListener('click',async()=>
{
//    alert('clicked search');
    const query=document.getElementById('search').value;
    if(!query){
        alert("Please Give Something ...");
        return;
    }
   // alert(query);
    const response = await fetch(`/selectProductPhp.php`);
    const products= await response.json();

    const regex = new RegExp(`\\b${query}\\b`, "i");


    // const matchingProductIds = products
    // .filter(product => regex.test(product.product_name)) // Match full or partial words
    // .map(product => product.product_id); // Extract only IDs

    const matchingProducts=products.filter(product=>regex.test(product.product_name));


    if (matchingProducts.length > 0) {
//        console.log("Matching product IDs:", matchingProducts);
     alert(`Found ${matchingProducts.length} products: ${matchingProducts.map(p => p.product_name).join(", ")}`);
        sessionStorage.setItem('matchingProducts', JSON.stringify(matchingProducts));
    // Redirect to new page
        window.location.href = '/search_products.html';
        return;
    } else {
 //       console.log("No products found.");
        alert("No Products Found!!!");
    }
});
});