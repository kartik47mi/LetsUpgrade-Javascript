// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [{
        id: 1,
        name: "Dharam Niwas PG",
        type: "Twin Sharing",
        price: 1200,
        locality: "Uttam Nagar, New Delhi",
        image: "https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg",
        description: "Good looking white tshirt",
    },
    {
        id: 2,
        name: "Oberoi Girls PG",
        type: "Triple Sharing",
        price: 1500,
        locality: "JanakPuri, New Delhi",
        image: "https://www.roomsoom.com/blog/wp-content/uploads/2019/11/pg1-1.jpg",
        description: "Good looking black shirt",
    },

    {
        id: 3,
        name: "Gupta PG",
        type: "Single Sharing",
        price: 900,
        locality: "SagarPur, New Delhi",
        image: "https://4.imimg.com/data4/XP/JB/MY-29402471/pg-rooms-500x500.jpg",
        description: "Good looking Checked Shirt",
    },

    {
        id: 4,
        name: "Shub Mangal PG",
        type: "Single",
        price: 3000,
        locality: "Rajouri Garden, New Delhi",
        image: "https://5.imimg.com/data5/PG/BK/GK/SELLER-37974037/fully-furnished-pg-accommodations-500x500.jpg",
        description: "Beautifull Blazer",
    },

    {
        id: 5,
        name: "New Colony PG",
        type: "Twin",
        price: 1300,
        locality: "Mohan Garden, New Delhi",
        image: "https://im.hunt.in/cg/panchkula/City-Guide/PG.jpg",
        description: "Good looking Top",
    },

    {
        id: 6,
        name: "Raja PG Wala",
        type: "Five Sharing",
        price: 1500,
        locality: "KailashPuri, New Delhi",
        image: "https://content3.jdmagicbox.com/comp/navi_mumbai/n1/022pxx22.xx22.150904122154.p8n1/catalogue/bharati-paying-guest-airoli-sector-2-navi-mumbai-paying-guest-accommodations-0axhxy1r1h.jpg?clr=39392d",
        description: "Good looking Traditional Dress",
    },
    {
        id: 7,
        name: "Rajaji PG Wala",
        type: "Five Sharing",
        price: 1100,
        locality: "Sakurpur, New Delhi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7bbOtWNsUqRlyvVwmdwi6NBrlPUif6NoukA&usqp=CAU",
        description: "Good looking Traditional Dress",
    },
    {
        id: 8,
        name: "Apna PG",
        type: "Five Sharing",
        price: 500,
        locality: "AIIMS, New Delhi",
        image: "https://dlior9lx1k7r2.cloudfront.net/postphoto/a45e98ec-5c05-4149-921a-fc570e949bbb.JPG",
        description: "Good looking Traditional Dress",
    },
    {
        id: 9,
        name: "Jai Bhole PG",
        type: "Five Sharing",
        price: 150,
        locality: "Safdarjung, New Delhi",
        image: "https://www.societyonrent.com/blog/wp-content/uploads/2018/04/pg-for-rent-in-delhi.jpg",
        description: "Good looking Traditional Dress",
    },
    {
        id: 10,
        name: "Government PG",
        type: "Five Sharing",
        price: 15000,
        locality: "Nangal Raya, New Delhi",
        image: "https://cf.bstatic.com/images/hotel/max1024x768/917/91770960.jpg",
        description: "Good looking Traditional Dress",
    },
    {
        id: 11,
        name: "Rocking PG",
        type: "Five Sharing",
        price: 1410,
        locality: "Dabri, New Delhi",
        image: "https://cf.bstatic.com/images/hotel/max1024x768/219/219799062.jpg",
        description: "Good looking Traditional Dress",
    },
    {
        id: 12,
        name: "Ajay PG",
        type: "Five Sharing",
        price: 1640,
        locality: "Nazafgarh, New Delhi",
        image: "https://content.jdmagicbox.com/comp/goa/j7/0832px832.x832.180113102254.p4j7/catalogue/aashray-women-s-hostel-in-goa-aquem-goa-paying-guest-accommodations-ixzhmqsxcp.jpg",
        description: "Good looking Traditional Dress",
    },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";

    productsData.forEach(function(product, index) {
        let { id, name, image, locality, description, price, type } = product;

        if (who == "productwrapper") {
            productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$ per month</p>
          <p>Type : ${type}</p>
          <p>Locality: ${locality}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})" class="book">Book Now</button>
          </p>
        </div>`;
        } else if (who == "cart") {
            productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$ per month</p>
          <p>Type : ${type}</p>
          <p>Locality:${locality}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})" class="cancel">Cancel</button>
          </p>
        </div>`;
        }
    });

    document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
    let searchedProducts = products.filter(function(product, index) {
        let searchString =
            product.name + " " + product.type + " " + product.locality;

        return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });

    displayProducts(searchedProducts);
}


// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
    return productArray.find(function(product) {
        return product.id == id;
    });
}

function addToCart(id) {
    // getting the product
    let pro = getProductByID(products, id);

    //   putting in cart
    if (cart.includes(pro)) {
        showAlert();
    } else {
        cart.push(pro);
    }
    let cartItems = cart.length;
    document.getElementById("cartItems").innerHTML = cartItems;
    displayProducts(cart, "cart");

}

function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function(product) {
        return product.id == id;
    });

    //   removing from cart based on index
    cart.splice(index, 1);
    let cartItems = cart.length;
    document.getElementById("cartItems").innerHTML = cartItems;
    displayProducts(cart, "cart");
}

//filter function

function filter() {
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    let filteredProduct = products.filter(function(fill, index) {
        return fill.price >= min && fill.price <= max;
    });

    displayProducts(filteredProduct);
}

function showAlert() {
    document.getElementById("alert").style.display = "block";

    setTimeout(function() {
        document.getElementById("alert").style.display = "none";
    }, 2000)
}