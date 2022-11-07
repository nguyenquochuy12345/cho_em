
const menuList = [
    {
        id: "1",
        title: "Jewelry & Accessories",
        url: "index.html",
    },
    {
        id: "2",
        title: "Clothing & Shoes",
        url: "#",
    },
    {
        id: "3",
        title: "Home & Living",
        url: "#"
    },
    {
        id: "4",
        title: "Wedding & Party",
        url: "#",
    },
    {
        id: "5",
        title: "Toys & Entertainment",
        url: "#",
    },
    {
        id: "6",
        title: "Art & Collectibles",
        url: "#",
    },
    {
        id: "7",
        title: "Craft Supplies & Tools",
        url: "#",
    },
]
// data ảnh thăm sp
const coverProduct = [
    {
        id: "1",
        image: "img/img_cover/image-category-2.png",
        name: "Suit",
        proNumber: "103 Product",
    },
    {
        id: "2",
        image: "img/img_cover/image-category-3.png",
        name: "Turtleneck",
        proNumber: "103 Product",
    },
    {
        id: "3",
        image: "img/img_cover/image-category-5.png",
        name: "Dress",
        proNumber: "103 Product",
    },
    {
        id: "4",
        image: "img/img_cover/image-category-4.png",
        name: "Jacket",
        proNumber: "103 Product",
    },
]
// menu product

const menuProduct = [
    {
        id: "1",
        title: "All products",
    },
    {
        id: "2",
        title: "T-shirt",
    },
    {
        id: "3",
        title: "Hoodies",
    },
    {
        id: "4",
        title: "Jacket",
    },
]
// product
const product = [
    {
        id: "1",
        image: "img/img_product/p1.png",
        name: "Adicolor Classics Joggers",
        type: "Dress",
        price: "63.85",

    },
    {
        id: "2",
        image: "img/img_product/p2.png",
        name: "Nike Sportswear Futura Luxe",
        type: "Bag",
        price: "130.00",
    },
    {
        id: "3",
        image: "img/img_product/p3.png",
        name: "Geometric print Scarf",
        type: "Scarf",
        price: "53.00",
    },
    {
        id: "4",
        image: "img/img_product/p4.png",
        name: "Yellow Reserved Hoodie",
        type: "Dress",
        price: "364.00",
        newprice: "155.00",
        sale: "SALE",
    },
    {
        id: "5",
        image: "img/img_product/p5.png",
        name: "Basic Dress Green",
        type: "Dress",
        price: "236.00",
        hot: "HOT",
    },
    {
        id: "6",
        image: "img/img_product/p6.png",
        name: "Nike Air Zoom Pegasus",
        type: "Shoe",
        price: "220.00",
        newprice: "198.00",
        sale: "SALE"
    },
    {
        id: "7",
        image: "img/img_product/p7.png",
        name: "Nike Repel Miler",
        type: "Dress",
        price: "220.00",
    },
    {
        id: "8",
        image: "img/img_product/p8.png",
        name: "Polarised Sunglasses",
        type: "Glasses",
        price: "160.00",
    },
]
const bestColection = [
    {
        id: "5",
        image: "img/img_product/p5.png",
        name: "Basic Dress Green",
        type: "Dress",
        price: "236.00",
        hot: "HOT",
    },
    {
        id: "2",
        image: "img/img_product/p2.png",
        name: "Nike Sportswear Futura Luxe",
        type: "Bag",
        price: "130.00",
    },
    {
        id: "4",
        image: "img/img_product/p4.png",
        name: "Yellow Reserved Hoodie",
        type: "Dress",
        price: "364.00",
        newprice: "155.00",
        sale: "SALE",
    },
    {
        id: "6",
        image: "img/img_product/p6.png",
        name: "Nike Air Zoom Pegasus",
        type: "Shoe",
        price: "220.00",
        newprice: "198.00",
        sale: "SALE"
    }
]
// menu 
const menu = document.querySelector('.menuL');
function showMenu() {
    menu.innerHTML = "";
    for (let menuL of menuList) {
        menu.innerHTML +=
            `
            <li><a href="${menuL.url}">${menuL.title}</a></li>
        `
    }
}
showMenu();
// sp tiêu biểu
const cover_content = document.querySelector('.sub_content');
function showCoverProduct() {
    cover_content.innerHTML = "";
    for (let item of coverProduct) {
        cover_content.innerHTML += `
        <div class="content_item">
            <img src="${item.image}" alt="">
                <div class="item_infor">
                    <p>${item.name}</p>
                    <p>${item.proNumber}</p>
            </div>
        </div>
        `
    }
}
showCoverProduct();
// menu sản phẩm
const listPro = document.querySelector('.listPro')
function showListPro() {
    listPro.innerHTML = "";
    for (let item of menuProduct) {
        listPro.innerHTML += `
            <li><a href="#">${item.title}</a></li>
        `
    }
}
showListPro();
// show sản phẩm mới
const newProduct = document.querySelector('.product')
function showNewProduct(datas) {
    newProduct.innerHTML = "";
    for (let item of datas) {
        newProduct.innerHTML +=
            `
        <div class="product_item">
                    <div class="item_img">
                        <img src="${item.image}" alt="">
                        <button class="btn_hot">${item.hot ? "HOT" : item.sale ? "SALE" : ""}</button>
                        <div class="img_infor">
                            <div class="icon_pro">
                                <img class="icon_heart" src="img/img_product/Vector 15.png" alt="">
                                <img class="icon_search" src="img/img_product/Group 64.png" alt="">
                            </div>
                            <div class="shop_now">
                                <img src="img/img_product/Bag_alt.png" alt="">
                                <p>Shop Now</p>
                            </div>
                        </div>
                    </div>
                    <div class="product_infor">
                        <div class="product_name">
                            <p>${item.name}</p>
                        </div>
                        <div class="name_infor">
                            <p>${item.type}</p>
                            <div class="gia">
                                <span>$${item.price}</span>
                                <span class="sale">${item.newprice ? "$" + item.newprice : ""}</span>
                            </div>
                            </div>
                    </div>
                </div>
        `
    }
}
showNewProduct(product);
// Show best collection
const bestCollect = document.querySelector('#bestCollect')
function showBestSell(datas) {
    bestCollect.innerHTML = "";
    for (let item of datas) {
        bestCollect.innerHTML +=
            `
            <div class="product_item">
                <div class="item_img">
                    <img src="${item.image}" alt="">
                    <button class="btn_hot">${item.hot ? "HOT" : item.sale ? "SALE" : ""}</button>
                <div class="img_infor">
                    <div class="icon_pro">
                        <img class="icon_heart" src="img/img_product/Vector 15.png" alt="">
                        <img class="icon_search" src="img/img_product/Group 64.png" alt="">
                    </div>
                    <div class="shop_now">
                        <img src="img/img_product/Bag_alt.png" alt="">
                        <p>Shop Now</p>
                    </div>
                </div>
                </div>
                        <div class="product_infor">
                            <div class="product_name">
                                <p>${item.name}</p>
                            </div>
                            <div class="name_infor">
                                <p>${item.type}</p>
                                <div class="gia">
                                <span>$${item.price}</span>
                                <span class="sale">${item.newprice ? "$" + item.newprice : ""}</span>
                            </div>
                            </div>
                        </div>
                    </div>       
        `
    }
}
showBestSell(bestColection);

// Lọc
const filterProduct = document.querySelector('#filter-select')
function filterPro() {
    const under100 = product.filter(function (profil) {
        return profil.price < 100;
    })
    const under200 = product.filter(function (profil) {
        return profil.price < 200;
    })
    const over200 = product.filter(function (profil) {
        return profil.price > 200;
    })

    if (filterProduct.value == "under100") {
        showNewProduct(under100);
    }
    if (filterProduct.value == "under200") {
        showNewProduct(under200);
    }
    if (filterProduct.value == "over200") {
        showNewProduct(over200);
    }
    if (filterProduct.value == "all") {
        showNewProduct(product);
    }
    console.log(under100)
}
if (filterProduct) {
    filterProduct.addEventListener("change", filterPro);
}
// Search
const inp = document.querySelector('#search');
const icon_search = document.querySelector('.icon_search');
const inputsearch_width = inp.clientWidth;
console.log(inputsearch_width)
icon_search.onclick = function () {
    var checked = inp.clientWidth === inputsearch_width;
    if (checked) {
        inp.style.width = "150px";
        inp.style.transition = "0.5s";
    } else {
        inp.style.width = "0px";

    }

}