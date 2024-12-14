// const productList=[
//     {
//         "title":"wheet",
//         "img":"wheet.jpg",
//         "desc":"Hello It is good Product ieuher erjkfjdf hhjfdsadjkfa jshdfjdsf jhjagdsjf hsgddjskgag shgdsdjaskdf"
//     },
//     {
//         "title":"rice",
//         "img":"rice.jpg",
//         "desc":"Hello It is good Product hgjvd f gundfhg dfgdufgnkdh98reutre  reutnrejrffd  ifdhnvjhvnf v fduvdfinhvjfdk"        
//     }
// ]

//import {fetchPhoneNumber} from './buy_product.js';

document.addEventListener('DOMContentLoaded',function()
{
    pageOnload();
    function templateForProduct(product, phoneNumber) {
        const template = document.getElementById('product-template');
        const product_card = template.content.cloneNode(true);
    
        product_card.querySelector('.product-title').textContent = product['product_name'];
        product_card.querySelector('.product-image').src = `data:image/*;base64,${product.product_image}`;
        product_card.querySelector('.product-description').textContent = product['product_description'];
    
    if (!/^\+\d{1,15}$/.test(phoneNumber)) {
            alert("Please provide a valid phone number, including the country code (e.g., +911234567890).");
            return;
        }
        // Add event listener to the "Buy to Contact" button
//        const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const formattedPhoneNumber=phoneNumber;
        const buyButton = product_card.querySelector('.buy-to-contact-btn');
        // alert(formattedPhoneNumber);
        buyButton.addEventListener('click', () => {
            const message = `Hi, I'm interested in the product: ${product['product_name']}`;
            const whatsappURL = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank'); // Open WhatsApp link in a new tab
        });
    
        return product_card;
    }
    
    async function pageOnload()
    {
    //    alert();
    try {
        const phoneResponse = await fetch('/fetchAdminDetail.php');
        if (!phoneResponse.ok) throw new Error('Failed to fetch phone number');
        const phoneData = await phoneResponse.json();
        const phoneNumber ="+91"+phoneData[0].phone; // Admin's phone number
        sessionStorage.setItem('phone',"91"+phoneData[0].phone);
        const productResponse = await fetch('/selectProductPhp.php');
        if (!productResponse.ok) throw new Error('Failed to fetch products');
        const productData = await productResponse.json();

        productData.forEach((product) => {
            document.querySelector('.product-list').appendChild(templateForProduct(product, phoneNumber));
        });
    } catch (error) {
        console.error('Error:', error);
    }

    }
});       

// //     fetchPhoneNumber();    
// //     const phoneNumber=null;
// //     async function fetchPhoneNumber()
// //     {

// //         const response = await fetch('/projects/product/php_rep/fetchAdminDetail.php'); 
// //         if(response.ok)
// //             alert('ok');
// //         const data = await response.json(); 
// //         phoneNumber=data[0].phone
// //         console.log(phoneNumber);
// //         alert(phoneNumber);    
// // //        setToBuy(phoneNumber);
// //     }
// });// const productList=[
// //     {
// //         "title":"wheet",
// //         "img":"wheet.jpg",
// //         "desc":"Hello It is good Product ieuher erjkfjdf hhjfdsadjkfa jshdfjdsf jhjagdsjf hsgddjskgag shgdsdjaskdf"
// //     },
// //     {
// //         "title":"rice",
// //         "img":"rice.jpg",
// //         "desc":"Hello It is good Product hgjvd f gundfhg dfgdufgnkdh98reutre  reutnrejrffd  ifdhnvjhvnf v fduvdfinhvjfdk"        
// //     }
// // ]

// //import {fetchPhoneNumber} from './buy_product.js';

// document.addEventListener('DOMContentLoaded',function()
// {
//     pageOnload();
//     function templateForProduct(product, phoneNumber) {
//         const template = document.getElementById('product-template');
//         const product_card = template.content.cloneNode(true);
    
//         product_card.querySelector('.product-title').textContent = product['product_name'];
//         product_card.querySelector('.product-image').src = `data:image/*;base64,${product.product_image}`;
//         product_card.querySelector('.product-description').textContent = product['product_description'];
    
//         // Add event listener to the "Buy to Contact" button
//         const buyButton = product_card.querySelector('.buy-to-contact-btn');
//         buyButton.addEventListener('click', () => {
//             const message = `Hi, I'm interested in the product: ${product['product_name']}`;
//             const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//             window.open(whatsappURL, '_blank'); // Open WhatsApp link in a new tab
//         });
    
//         return product_card;
//     }
    
//     async function pageOnload()
//     {
//     //    alert();
//     try {
//         const phoneResponse = await fetch('/projects/product/php_rep/fetchAdminDetail.php');
//         if (!phoneResponse.ok) throw new Error('Failed to fetch phone number');
//         const phoneData = await phoneResponse.json();
//         const phoneNumber = phoneData[0].phone; // Admin's phone number

//         const productResponse = await fetch('/projects/product/php_rep/selectProductPhp.php');
//         if (!productResponse.ok) throw new Error('Failed to fetch products');
//         const productData = await productResponse.json();

//         productData.forEach((product) => {
//             document.querySelector('.product-list').appendChild(templateForProduct(product, phoneNumber));
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }

//     }       
// //     fetchPhoneNumber();    
// //     const phoneNumber=null;
// //     async function fetchPhoneNumber()
// //     {

// //         const response = await fetch('/projects/product/php_rep/fetchAdminDetail.php'); 
// //         if(response.ok)
// //             alert('ok');
// //         const data = await response.json(); 
// //         phoneNumber=data[0].phone
// //         console.log(phoneNumber);
// //         alert(phoneNumber);    
// // //        setToBuy(phoneNumber);
// //     }
// });// const productList=[
// //     {
// //         "title":"wheet",
// //         "img":"wheet.jpg",
// //         "desc":"Hello It is good Product ieuher erjkfjdf hhjfdsadjkfa jshdfjdsf jhjagdsjf hsgddjskgag shgdsdjaskdf"
// //     },
// //     {
// //         "title":"rice",
// //         "img":"rice.jpg",
// //         "desc":"Hello It is good Product hgjvd f gundfhg dfgdufgnkdh98reutre  reutnrejrffd  ifdhnvjhvnf v fduvdfinhvjfdk"        
// //     }
// // ]

// //import {fetchPhoneNumber} from './buy_product.js';

// document.addEventListener('DOMContentLoaded',function()
// {
//     pageOnload();
//     function templateForProduct(product, phoneNumber) {
//         const template = document.getElementById('product-template');
//         const product_card = template.content.cloneNode(true);
    
//         product_card.querySelector('.product-title').textContent = product['product_name'];
//         product_card.querySelector('.product-image').src = `data:image/*;base64,${product.product_image}`;
//         product_card.querySelector('.product-description').textContent = product['product_description'];
    
//         // Add event listener to the "Buy to Contact" button
//         const buyButton = product_card.querySelector('.buy-to-contact-btn');
//         buyButton.addEventListener('click', () => {
//             const message = `Hi, I'm interested in the product: ${product['product_name']}`;
//             const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//             window.open(whatsappURL, '_blank'); // Open WhatsApp link in a new tab
//         });
    
//         return product_card;
//     }
    
//     async function pageOnload()
//     {
//     //    alert();
//     try {
//         const phoneResponse = await fetch('/projects/product/php_rep/fetchAdminDetail.php');
//         if (!phoneResponse.ok) throw new Error('Failed to fetch phone number');
//         const phoneData = await phoneResponse.json();
//         const phoneNumber = phoneData[0].phone; // Admin's phone number

//         const productResponse = await fetch('/projects/product/php_rep/selectProductPhp.php');
//         if (!productResponse.ok) throw new Error('Failed to fetch products');
//         const productData = await productResponse.json();

//         productData.forEach((product) => {
//             document.querySelector('.product-list').appendChild(templateForProduct(product, phoneNumber));
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }

//     }       
// //     fetchPhoneNumber();    
// //     const phoneNumber=null;
// //     async function fetchPhoneNumber()
// //     {

// //         const response = await fetch('/projects/product/php_rep/fetchAdminDetail.php'); 
// //         if(response.ok)
// //             alert('ok');
// //         const data = await response.json(); 
// //         phoneNumber=data[0].phone
// //         console.log(phoneNumber);
// //         alert(phoneNumber);    
// // //        setToBuy(phoneNumber);
// //     }
// });// const productList=[
// //     {
// //         "title":"wheet",
// //         "img":"wheet.jpg",
// //         "desc":"Hello It is good Product ieuher erjkfjdf hhjfdsadjkfa jshdfjdsf jhjagdsjf hsgddjskgag shgdsdjaskdf"
// //     },
// //     {
// //         "title":"rice",
// //         "img":"rice.jpg",
// //         "desc":"Hello It is good Product hgjvd f gundfhg dfgdufgnkdh98reutre  reutnrejrffd  ifdhnvjhvnf v fduvdfinhvjfdk"        
// //     }
// // ]

// //import {fetchPhoneNumber} from './buy_product.js';

// document.addEventListener('DOMContentLoaded',function()
// {
//     pageOnload();
//     function templateForProduct(product, phoneNumber) {
//         const template = document.getElementById('product-template');
//         const product_card = template.content.cloneNode(true);
    
//         product_card.querySelector('.product-title').textContent = product['product_name'];
//         product_card.querySelector('.product-image').src = `data:image/*;base64,${product.product_image}`;
//         product_card.querySelector('.product-description').textContent = product['product_description'];
    
//         // Add event listener to the "Buy to Contact" button
//         const buyButton = product_card.querySelector('.buy-to-contact-btn');
//         buyButton.addEventListener('click', () => {
//             const message = `Hi, I'm interested in the product: ${product['product_name']}`;
//             const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//             window.open(whatsappURL, '_blank'); // Open WhatsApp link in a new tab
//         });
    
//         return product_card;
//     }
    
//     async function pageOnload()
//     {
//     //    alert();
//     try {
//         const phoneResponse = await fetch('/projects/product/php_rep/fetchAdminDetail.php');
//         if (!phoneResponse.ok) throw new Error('Failed to fetch phone number');
//         const phoneData = await phoneResponse.json();
//         const phoneNumber = phoneData[0].phone; // Admin's phone number

//         const productResponse = await fetch('/projects/product/php_rep/selectProductPhp.php');
//         if (!productResponse.ok) throw new Error('Failed to fetch products');
//         const productData = await productResponse.json();

//         productData.forEach((product) => {
//             document.querySelector('.product-list').appendChild(templateForProduct(product, phoneNumber));
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }

//     }       
// //     fetchPhoneNumber();    
// //     const phoneNumber=null;
// //     async function fetchPhoneNumber()
// //     {

// //         const response = await fetch('/projects/product/php_rep/fetchAdminDetail.php'); 
// //         if(response.ok)
// //             alert('ok');
// //         const data = await response.json(); 
// //         phoneNumber=data[0].phone
// //         console.log(phoneNumber);
// //         alert(phoneNumber);    
// // //        setToBuy(phoneNumber);
// //     }
// });// const productList=[
// //     {
// //         "title":"wheet",
// //         "img":"wheet.jpg",
// //         "desc":"Hello It is good Product ieuher erjkfjdf hhjfdsadjkfa jshdfjdsf jhjagdsjf hsgddjskgag shgdsdjaskdf"
// //     },
// //     {
// //         "title":"rice",
// //         "img":"rice.jpg",
// //         "desc":"Hello It is good Product hgjvd f gundfhg dfgdufgnkdh98reutre  reutnrejrffd  ifdhnvjhvnf v fduvdfinhvjfdk"        
// //     }
// // ]

// //import {fetchPhoneNumber} from './buy_product.js';

// document.addEventListener('DOMContentLoaded',function()
// {
//     pageOnload();
//     function templateForProduct(product, phoneNumber) {
//         const template = document.getElementById('product-template');
//         const product_card = template.content.cloneNode(true);
    
//         product_card.querySelector('.product-title').textContent = product['product_name'];
//         product_card.querySelector('.product-image').src = `data:image/*;base64,${product.product_image}`;
//         product_card.querySelector('.product-description').textContent = product['product_description'];
    
//         // Add event listener to the "Buy to Contact" button
//         const buyButton = product_card.querySelector('.buy-to-contact-btn');
//         buyButton.addEventListener('click', () => {
//             const message = `Hi, I'm interested in the product: ${product['product_name']}`;
//             const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//             window.open(whatsappURL, '_blank'); // Open WhatsApp link in a new tab
//         });
    
//         return product_card;
//     }
    
//     async function pageOnload()
//     {
//     //    alert();
//     try {
//         const phoneResponse = await fetch('/projects/product/php_rep/fetchAdminDetail.php');
//         if (!phoneResponse.ok) throw new Error('Failed to fetch phone number');
//         const phoneData = await phoneResponse.json();
//         const phoneNumber = phoneData[0].phone; // Admin's phone number

//         const productResponse = await fetch('/projects/product/php_rep/selectProductPhp.php');
//         if (!productResponse.ok) throw new Error('Failed to fetch products');
//         const productData = await productResponse.json();

//         productData.forEach((product) => {
//             document.querySelector('.product-list').appendChild(templateForProduct(product, phoneNumber));
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }

//     }       
// //     fetchPhoneNumber();    
// //     const phoneNumber=null;
// //     async function fetchPhoneNumber()
// //     {

// //         const response = await fetch('/projects/product/php_rep/fetchAdminDetail.php'); 
// //         if(response.ok)
// //             alert('ok');
// //         const data = await response.json(); 
// //         phoneNumber=data[0].phone
// //         console.log(phoneNumber);
// //         alert(phoneNumber);    
// // //        setToBuy(phoneNumber);
// //     }
// });// const productList=[
// //     {
// //         "title":"wheet",
// //         "img":"wheet.jpg",
// //         "desc":"Hello It is good Product ieuher erjkfjdf hhjfdsadjkfa jshdfjdsf jhjagdsjf hsgddjskgag shgdsdjaskdf"
// //     },
// //     {
// //         "title":"rice",
// //         "img":"rice.jpg",
// //         "desc":"Hello It is good Product hgjvd f gundfhg dfgdufgnkdh98reutre  reutnrejrffd  ifdhnvjhvnf v fduvdfinhvjfdk"        
// //     }
// // ]

// //import {fetchPhoneNumber} from './buy_product.js';

// document.addEventListener('DOMContentLoaded',function()
// {
//     pageOnload();
//     function templateForProduct(product, phoneNumber) {
//         const template = document.getElementById('product-template');
//         const product_card = template.content.cloneNode(true);
    
//         product_card.querySelector('.product-title').textContent = product['product_name'];
//         product_card.querySelector('.product-image').src = `data:image/*;base64,${product.product_image}`;
//         product_card.querySelector('.product-description').textContent = product['product_description'];
    
//         // Add event listener to the "Buy to Contact" button
//         const buyButton = product_card.querySelector('.buy-to-contact-btn');
//         buyButton.addEventListener('click', () => {
//             const message = `Hi, I'm interested in the product: ${product['product_name']}`;
//             const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//             window.open(whatsappURL, '_blank'); // Open WhatsApp link in a new tab
//         });
    
//         return product_card;
//     }
    
//     async function pageOnload()
//     {
//     //    alert();
//     try {
//         const phoneResponse = await fetch('/projects/product/php_rep/fetchAdminDetail.php');
//         if (!phoneResponse.ok) throw new Error('Failed to fetch phone number');
//         const phoneData = await phoneResponse.json();
//         const phoneNumber = phoneData[0].phone; // Admin's phone number

//         const productResponse = await fetch('/projects/product/php_rep/selectProductPhp.php');
//         if (!productResponse.ok) throw new Error('Failed to fetch products');
//         const productData = await productResponse.json();

//         productData.forEach((product) => {
//             document.querySelector('.product-list').appendChild(templateForProduct(product, phoneNumber));
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }

//     }       
// //     fetchPhoneNumber();    
// //     const phoneNumber=null;
// //     async function fetchPhoneNumber()
// //     {

// //         const response = await fetch('/projects/product/php_rep/fetchAdminDetail.php'); 
// //         if(response.ok)
// //             alert('ok');
// //         const data = await response.json(); 
// //         phoneNumber=data[0].phone
// //         console.log(phoneNumber);
// //         alert(phoneNumber);    
// // //        setToBuy(phoneNumber);
// //     }
// });