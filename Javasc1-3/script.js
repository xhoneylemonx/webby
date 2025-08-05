// ------------ 1. การจัดการสินค้าคงคลัง ------------ //
const products = [
  { name: "สบู่", price: 35, stock: 10 },
  { name: "ยาสีฟัน", price: 55, stock: 0 },
  { name: "แชมพู", price: 89, stock: 5 },
  { name: "ครีม", price: 120, stock: 0 }
];

const productContainer = document.getElementById("product-container");

products.forEach(product => {
  const p = document.createElement("p");

  if (product.stock === 0) {
    p.textContent = `${product.name} - สินค้าหมด`;
    p.classList.add("out-of-stock");
  } else {
    p.textContent = `${product.name} - ราคา ${product.price} บาท`;
  }

  productContainer.appendChild(p);
});


// ------------ 2. แกลเลอรีภาพขนาดเล็ก ------------ //
const imageUrls = [
  "https://via.placeholder.com/300x200?text=1",
  "https://via.placeholder.com/300x200?text=2",
  "https://via.placeholder.com/300x200?text=3"
];

const gallery = document.getElementById("gallery");
const mainImage = document.getElementById("main-image");

// กำหนดภาพเริ่มต้น
mainImage.src = imageUrls[0];

imageUrls.forEach(url => {
  const thumbnail = document.createElement("img");
  thumbnail.src = url;
  thumbnail.addEventListener("click", () => {
    mainImage.src = url;
  });
  gallery.appendChild(thumbnail);
});


// ------------ 3. แสดงผลหน้าเพจแบบมีเงื่อนไข ------------ //
let isLoggedIn = true; // เปลี่ยนเป็น false เพื่อทดสอบ

const userProfile = document.getElementById("user-profile");
const guestMessage = document.getElementById("guest-message");

if (isLoggedIn) {
  userProfile.style.display = "block";
  guestMessage.style.display = "none";
} else {
  userProfile.style.display = "none";
  guestMessage.style.display = "block";
}
