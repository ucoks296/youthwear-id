let keranjang = [];
let total = 0;

function tambahKeranjang(nama, harga){alert("✅ Produk berhasil ditambahkan ke keranjang!");

    keranjang.push({
        nama:nama,
        harga:harga
    });

    total += harga;

    localStorage.setItem("cart", JSON.stringify(keranjang));
    localStorage.setItem("total", total);

    alert(nama + " berhasil ditambahkan!");
}

function tampilKeranjang(){

    let daftar = document.getElementById("cart-list");

    if(!daftar) return;

    let data = JSON.parse(localStorage.getItem("cart")) || [];

    let totalHarga = localStorage.getItem("total") || 0;

    daftar.innerHTML="";

    data.forEach(function(item){

        daftar.innerHTML += "<li>"+item.nama+" - Rp"+item.harga+"</li>";

    });

    document.getElementById("total").innerText = totalHarga;

}

window.onload = tampilKeranjang;
function kosongkanKeranjang(){

    localStorage.removeItem("cart");
    localStorage.removeItem("total");

    location.reload();

}
function checkout(){

    let nama = document.getElementById("nama").value;
    let nomor = document.getElementById("nomor").value;
    let alamat = document.getElementById("alamat").value;

    let total = localStorage.getItem("total") || 0;

    let pesan =
`Halo Youthwear ID

Nama : ${nama}
No HP : ${nomor}
Alamat : ${alamat}

Total Belanja : Rp${total}

Saya ingin melakukan pemesanan.`;

    window.open(
        "https://wa.me/6283194288492text=" + encodeURIComponent(pesan),
        "_blank"
    );

}
function tambahProduk(){

    let nama = document.getElementById("namaProduk").value;
    let harga = document.getElementById("hargaProduk").value;
    let gambar = document.getElementById("gambarProduk").value;

    let produk = JSON.parse(localStorage.getItem("produk")) || [];

    produk.push({
        nama:nama,
        harga:harga,
        gambar:gambar
    });

    localStorage.setItem("produk", JSON.stringify(produk));

    alert("Produk berhasil ditambahkan!");

}
let gambar = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
];

let indexSlide = 0;

setInterval(function(){

    let slide = document.getElementById("slide");

    if(slide){

        indexSlide++;

        if(indexSlide >= gambar.length){
            indexSlide = 0;
        }

        slide.src = gambar[indexSlide];

    }

},3000);
function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let jumlah = document.getElementById("cart-count");

    if(jumlah){
        jumlah.innerHTML = cart.length;
    }

}

updateCartCount();
function cariProduk(){

    let input = document.getElementById("search").value.toLowerCase();

    let produk = document.getElementsByClassName("product");

    for(let i = 0; i < produk.length; i++){

        let nama = produk[i].getElementsByTagName("h3")[0];

        if(nama.innerHTML.toLowerCase().indexOf(input) > -1){

            produk[i].style.display = "";

        }else{

            produk[i].style.display = "none";

        }

    }

}
function filterProduk(kategori){

    let produk = document.getElementsByClassName("product");

    for(let i = 0; i < produk.length; i++){

        if(kategori == "semua"){

            produk[i].style.display = "";

        }else{

            if(produk[i].dataset.kategori == kategori){

                produk[i].style.display = "";

            }else{

                produk[i].style.display = "none";

            }

        }

    }

}
function tambahWishlist(nama){

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if(!wishlist.includes(nama)){
        wishlist.push(nama);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(nama + " ditambahkan ke Wishlist ❤️");
    }else{
        alert("Produk sudah ada di Wishlist ❤️");
    }

}
function tampilWishlist(){

    let list = document.getElementById("wishlist-list");

    if(!list) return;

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    list.innerHTML = "";

    wishlist.forEach(function(item){

        list.innerHTML += "<li>❤️ " + item + "</li>";

    });

}

tampilWishlist();
function login(){

let username=document.getElementById("username").value;

let password=document.getElementById("password").value;

if(username=="admin" && password=="123456"){

alert("Login Berhasil!");

window.location.href="admin.html";

}else{

alert("Username atau Password Salah!");

}

}
function tambahProduk(){

let nama=document.getElementById("namaProduk").value;

let harga=document.getElementById("hargaProduk").value;

let gambar=document.getElementById("gambarProduk").value;

let produk=JSON.parse(localStorage.getItem("produk"))||[];

produk.push({

nama:nama,

harga:harga,

gambar:gambar

});

localStorage.setItem("produk",JSON.stringify(produk));

tampilProduk();

}

function tampilProduk(){

    let list = document.getElementById("produk-list");

    if(!list) return;

    let produk = JSON.parse(localStorage.getItem("produk")) || [];

    list.innerHTML = "";

    produk.forEach(function(item,index){

        list.innerHTML += `
        <li>

        <div>
        <b>${item.nama}</b><br>
        Rp${item.harga}
        </div>

        <div>

        <button onclick="editProduk(${index})">
        ✏️
        </button>

        <button onclick="hapusProduk(${index})">
        ❌
        </button>

        </div>

        </li>
        `;

    });

}

function hapusProduk(index){
function editProduk(index){

    let produk = JSON.parse(localStorage.getItem("produk")) || [];

    let namaBaru = prompt("Nama Produk", produk[index].nama);

    let hargaBaru = prompt("Harga Produk", produk[index].harga);

    if(namaBaru && hargaBaru){

        produk[index].nama = namaBaru;
        produk[index].harga = hargaBaru;

        localStorage.setItem("produk", JSON.stringify(produk));

        tampilProduk();

        alert("✅ Produk berhasil diperbarui!");

    }

}

let produk=JSON.parse(localStorage.getItem("produk"))||[];

produk.splice(index,1);

localStorage.setItem("produk",JSON.stringify(produk));

tampilProduk();

}

tampilProduk();
function tampilProdukAdmin(){

    let tempat = document.getElementById("produk-admin");

    if(!tempat) return;

    let produk = JSON.parse(localStorage.getItem("produk")) || [];

    produk.forEach(function(item){

        tempat.innerHTML += `

        <div class="product">

        <img src="images/${item.gambar}" alt="${item.nama}">

        <h3>${item.nama}</h3>

        <h4>Rp${item.harga}</h4>

        <button class="buy-btn"
        onclick="tambahKeranjang('${item.nama}',${item.harga})">

        🛒 Tambah

        </button>

        </div>

        `;

    });

}

tampilProdukAdmin();
function buatPesanan(){

    let pesanan = JSON.parse(localStorage.getItem("pesanan")) || [];

    pesanan.push({
        tanggal: new Date().toLocaleString(),
        status: "Diproses"
    });

    localStorage.setItem("pesanan", JSON.stringify(pesanan));

    alert("✅ Pesanan berhasil dibuat!");

    window.location.href = "pesanan.html";

}
function tampilPesanan(){

    let list = document.getElementById("list-pesanan");

    if(!list) return;

    let pesanan = JSON.parse(localStorage.getItem("pesanan")) || [];

    list.innerHTML = "";

    pesanan.forEach(function(item){

        list.innerHTML += `
        <li>
            📦 ${item.tanggal}<br>
            Status: <b>${item.status}</b>
        </li>
        `;

    });

}

tampilPesanan();

function kirimReview(){

    let text = document.getElementById("review-text").value;

    if(text==""){
        alert("Isi ulasan terlebih dahulu");
        return;
    }

    let review = JSON.parse(localStorage.getItem("review")) || [];

    review.push(text);

    localStorage.setItem("review",JSON.stringify(review));

    document.getElementById("review-text").value="";

    tampilReview();

}

function tampilReview(){

    let list=document.getElementById("review-list");

    if(!list) return;

    let review=JSON.parse(localStorage.getItem("review"))||[];

    list.innerHTML="";

    review.forEach(function(item){

        list.innerHTML+=`
        <div class="review">
        ⭐⭐⭐⭐⭐<br><br>
        ${item}
        </div>
        `;

    });

}

tampilReview();

function toggleTheme(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");

    }else{

        localStorage.setItem("theme","dark");

    }

}

if(localStorage.getItem("theme")=="light"){

    document.body.classList.add("light-mode");

}