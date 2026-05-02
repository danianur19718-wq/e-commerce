var products = [
    {
        id: 1, name: "Tote Bag Kanvas Premium", category: "tas",
        price: 89000, originalPrice: null,
        image: "https://plus.unsplash.com/premium_photo-1681324227573-953664cf9b32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
        imageLg: "https://plus.unsplash.com/premium_photo-1681324227573-953664cf9b32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.8, reviews: 234, badge: "bestseller",
        description: "Tote bag kanvas premium dengan desain minimalis yang elegan. Cocok untuk kerja, kuliah, atau jalan-jalan. Bahan tebal dan tahan lama, muat laptop 13 inch.",
        specs: ["Bahan kanvas tebal premium", "Tali pendek & panjang adjustable", "Muat laptop 13 inch", "Dalaman sleting", "Ukuran 38 x 30 x 12 cm"]
    },
    {
        id: 2, name: "Botol Minum Stainless Aesthetic", category: "perawatan",
        price: 65000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym90b2wlMjBtaW51bSUyMHN0YWlubGVzc3xlbnwwfHwwfHx8MA%3D%3D",
        imageLg: "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym90b2wlMjBtaW51bSUyMHN0YWlubGVzc3xlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.9, reviews: 312, badge: "bestseller",
        description: "Botol minum stainless steel 500ml dengan desain pastel yang cantik. Menjaga suhu minuman panas 6 jam, dingin 12 jam. Bebas BPA.",
        specs: ["Kapasitas 500ml", "Stainless steel 304 food grade", "Double wall vacuum", "Tahan panas 6 jam / dingin 12 jam", "Lebar mulut botol 5.5 cm"]
    },
    {
        id: 3, name: "Pouch Organizer Kosmetik", category: "perawatan",
        price: 45000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1585687635785-994bda55c78e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG91Y2glMjBtYWtlJTIwdXB8ZW58MHx8MHx8fDA%3D",
        imageLg: "https://images.unsplash.com/photo-1585687635785-994bda55c78e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG91Y2glMjBtYWtlJTIwdXB8ZW58MHx8MHx8fDA%3D",
        rating: 4.6, reviews: 189, badge: null,
        description: "Pouch organizer dengan banyak sekat untuk menyimpan kosmetik, skincare, dan peralatan make-up rapi. Bahan waterproof anti noda.",
        specs: ["Waterproof premium", "3 sekat utama + 2 saku kecil", "Bahan polyester tebal", "Resleting YKK anti macet", "Ukuran 25 x 18 x 10 cm"]
    },
    {
        id: 4, name: "Earphone New", category: "aksesoris",
        price: 650000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D",
        imageLg: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D",
        rating: 4.9, reviews: 780, badge: "bestseller",
        description: "Earphone New dengan desain pastel yang cantik. Kualitas terbaru dan terbaik cocok untuk belajar, olahraga, maupun lainnya.",
        specs: ["New Rilis", "Desain kece", "Nyaman dipakai", "Awet seumur hidup", "Dijamin berkualitas"]
    },
    {
        id: 4, name: "Lampu Tidur LED Cloud", category: "dekorasi",
        price: 78000, originalPrice: 97000,
        image: "https://plus.unsplash.com/premium_photo-1663100850704-ea049d649496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFtcHUlMjB0aWR1ciUyMHN0YWlubGVzc3xlbnwwfHwwfHx8MA%3D%3D",
        imageLg: "https://plus.unsplash.com/premium_photo-1663100850704-ea049d649496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFtcHUlMjB0aWR1ciUyMHN0YWlubGVzc3xlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.5, reviews: 98, badge: "discount",
        description: "Lampu tidur LED bentuk awan yang menggemaskan. 16 warna yang bisa diganti dengan remote. Bikin kamar makin cozy dan estetik.",
        specs: ["16 warna RGB + remote", "Material kapas dan PP aman", "USB rechargeable", "2 mode cahaya: redup & terang", "Ukuran 25 x 15 x 15 cm"]
    },
    {
        id: 5, name: "Set Hair Clip Pita Ribbon", category: "aksesoris",
        price: 35000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1551908349-8dae1c2eac85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNldCUyMGhhaXIlMjBjbGlwJTIwcGl0YXxlbnwwfHwwfHx8MA%3D%3D0",
        imageLg: "https://images.unsplash.com/photo-1551908349-8dae1c2eac85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNldCUyMGhhaXIlMjBjbGlwJTIwcGl0YXxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.8, reviews: 267, badge: "new",
        description: "Set 12 hair clip pita ribbon dengan berbagai warna pastel. Bahan satin berkualitas, rapi dan awet. Cocok untuk segala suasana.",
        specs: ["12 pcs per set (6 warna x 2)", "Bahan satin premium", "Clip stainless anti karat", "Cocok untuk semua jenis rambut", "Packaging box cantik"]
    },
    {
        id: 6, name: "Tas Selempang Mini Quilted", category: "tas",
        price: 120000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop&q=80",
        imageLg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop&q=80",
        rating: 4.9, reviews: 445, badge: "bestseller",
        description: "Tas selempang mini dengan pattern quilted yang mewah. Muat HP, dompet, lipstik, dan barang essential lainnya. Chain strap bisa dilepas.",
        specs: ["Pattern quilted premium", "Bahan PU leather berkualitas", "Chain strap gold detachable", "1 ruang utama + 1 saku dalam", "Ukuran 20 x 15 x 7 cm"]
    },
    {
        id: 7, name: "Set Sikat Gigi Bamboo", category: "perawatan",
        price: 42000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop&q=80",
        imageLg: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=600&fit=crop&q=80",
        rating: 4.4, reviews: 123, badge: null,
        description: "Set 4 sikat gigi bamboo eco-friendly. Handle biodegradable, bulu sikat charcoal yang lembut. Ramah lingkungan dan stylish.",
        specs: ["4 pcs per set", "Handle bamboo alami", "Bulu sikat BPA-free charcoal", "Sikat lembut untuk gusi", "Estimasi pakai 3-4 bulan per sikat"]
    },
    {
        id: 8, name: "Cermin LED Vanity Portable", category: "perawatan",
        price: 135000, originalPrice: 165000,
        image: "https://images.unsplash.com/photo-1644916925115-97ef330ab793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VybWluJTIwTEVEfGVufDB8fDB8fHww",
        imageLg: "https://images.unsplash.com/photo-1644916925115-97ef330ab793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VybWluJTIwTEVEfGVufDB8fDB8fHww",
        rating: 4.7, reviews: 201, badge: "discount",
        description: "Cermin vanity portable dengan 3 mode pencahayaan LED. Bisa dilipat ringan, cocok dibawa traveling. Baterai rechargeable tahan lama.",
        specs: ["3 mode cahaya: warm, natural, cool", "Baterai rechargeable 1000mAh", "Bisa dilipat tipis untuk travel", "Dimensi terbuka 23 x 18 cm", "Berat hanya 350 gram"]
    },
    {
        id: 9, name: "Set Scrunchie Satin 8pcs", category: "aksesoris",
        price: 28000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1601544816113-5dd7c7a526b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2V0JTIwc2NydW5jaWUlMjBzYXRpbnxlbnwwfHwwfHx8MA%3D%3D",
        imageLg: "https://images.unsplash.com/photo-1601544816113-5dd7c7a526b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2V0JTIwc2NydW5jaWUlMjBzYXRpbnxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.6, reviews: 178, badge: "new",
        description: "Set scrunchie satin 8 warna cantik. Tidak merusak rambut, tidak meninggalkan bekas karet. Bisa untuk rambut tebal maupun tipis.",
        specs: ["8 pcs per set (warna random)", "Bahan satin premium halus", "Elastis kuat tapi tidak kencang", "Tidak merusak rambut", "Diameter +/- 10 cm"]
    },
    {
        id: 10, name: "Lilin Aromaterapi Soy Wax", category: "dekorasi",
        price: 68000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1612293905607-b003de9e54fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlsaW4lMjBhcm9tYXRlcmFwaHl8ZW58MHx8MHx8fDA%3D",
        imageLg: "https://images.unsplash.com/photo-1612293905607-b003de9e54fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlsaW4lMjBhcm9tYXRlcmFwaHl8ZW58MHx8MHx8fDA%3D",
        rating: 4.8, reviews: 298, badge: "bestseller",
        description: "Lilin aromaterapi dari soy wax murni dengan wangi lavender dan vanilla. Bakar hingga 25 jam. Wadah keramik cantik bisa di-reuse.",
        specs: ["Soy wax murni tanpa parafin", "Wangi lavender & vanilla", "Burn time hingga 25 jam", "Wadah keramik reusable", "Berat bersih 180 gram"]
    },
    {
        id: 11, name: "Sandal Keren", category: "aksesoris",
        price: 55000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop&q=80",
        imageLg: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=600&fit=crop&q=80",
        rating: 4.7, reviews: 156, badge: null,
        description: "Sandal rumah dengan bulu sintetis super lembut. Sol anti-slip yang aman. Bikin kaki nyaman sepanjang hari di rumah.",
        specs: ["Bulu sintetis premium lembut", "Sol anti-slip TPR", "Insole memory foam", "Tersedia ukuran 36-41", "Mudah dicuci"]
    },
    {
        id: 12, name: "Buku Jurnal Aesthetic Linen", category: "aksesoris",
        price: 48000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop&q=80",
        imageLg: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=600&fit=crop&q=80",
        rating: 4.5, reviews: 134, badge: null,
        description: "Buku jurnal dengan cover linen premium. 200 halaman kertas ivory 80gsm. Dilengkapi ribbon bookmark dan pen holder loop.",
        specs: ["Cover linen premium tebal", "200 halaman kertas ivory 80gsm", "Ribbon bookmark integrated", "Pen holder loop elastis", "Ukuran A5 (15 x 21 cm)"]
    },
    {
        id: 13, name: "Sarung Bantal Silk Satin", category: "dekorasi",
        price: 72000, originalPrice: 89000,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop&q=80",
        imageLg: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop&q=80",
        rating: 4.9, reviews: 367, badge: "discount",
        description: "Sarung bantal satin premium yang lembut dan sejuk. Mengurangi rambut kusut dan kerusakan rambut saat tidur. Zipper tersembunyi.",
        specs: ["Bahan satin polyester premium", "Mengurangi rambut kusut saat tidur", "Zipper hidden di samping", "Tersedia warna pastel", "Ukuran 50 x 70 cm (standar bantal)"]
    },
    {
        id: 14, name: "Topi Sun Hat Wide Brim", category: "aksesoris",
        price: 95000, originalPrice: null,
        image: "https://media.istockphoto.com/id/2262597965/id/foto/topi-jerami-musim-panas-tergantung-di-sinar-matahari-cerah.webp?a=1&b=1&s=612x612&w=0&k=20&c=y-Se0sos-8f9CiKCoeu4ATzfAx2LAofko1KMw7j21e0=",
        imageLg: "https://media.istockphoto.com/id/2262597965/id/foto/topi-jerami-musim-panas-tergantung-di-sinar-matahari-cerah.webp?a=1&b=1&s=612x612&w=0&k=20&c=y-Se0sos-8f9CiKCoeu4ATzfAx2LAofko1KMw7j21e0=",
        rating: 4.6, reviews: 145, badge: null,
        description: "Topi wide brim yang elegan untuk perlindungan UV saat outdoor. Bahan straw sintetis yang ringan dan fleksibel, bisa dilipat.",
        specs: ["Wide brim +/- 10 cm", "Bahan straw sintetis ringan", "Fleksibel bisa dilipat", "Lingkar kepala 56-58 cm", "Pita satin dekoratif"]
    },
    {
        id: 15, name: "Sleeve Laptop Quilted 13 inch", category: "tas",
        price: 88000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1611461527944-1a718332613b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNsZWV2ZSUyMExhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
        imageLg: "https://images.unsplash.com/photo-1611461527944-1a718332613b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNsZWV2ZSUyMExhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.7, reviews: 210, badge: "new",
        description: "Sleeve laptop quilted untuk 13 inch dengan bahan empuk anti-guncangan. Desain minimalis, ringan, muat masuk tas besar.",
        specs: ["Cocok laptop 13-13.3 inch", "Bahan quilted sponge tebal", "Anti-shock protection", "Resleting YKK dua arah", "Ukuran 35 x 25 cm"]
    },
    {
        id: 16, name: "Set Hair Mask 3in1 Botol Mini", category: "perawatan",
        price: 58000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop&q=80",
        imageLg: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&h=600&fit=crop&q=80",
        rating: 4.8, reviews: 256, badge: "bestseller",
        description: "Set 3 hair mask mini dengan varian wangi: cherry blossom, shea butter, dan green tea. Ukuran travel-friendly, non-sticky.",
        specs: ["3 varian wangi berbeda", "Ukuran 30ml per botol (travel size)", "Non-sticky, cepat menyerap", "Mengandung vitamin E", "Packaging box gift-ready"]
    },
      {
        id: 14, name: "Lampu Tidur Silicon Karakter", category: "dekorasi",
        price: 229000, originalPrice: null,
        image: "https://media.istockphoto.com/id/1458016361/id/foto/lampu-malam-berbentuk-kucing.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uttz8bXg8q31du8D_VaD_GeaFv37hTM2VY8Tq0ehgTk=",
        imageLg: "https://media.istockphoto.com/id/1458016361/id/foto/lampu-malam-berbentuk-kucing.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uttz8bXg8q31du8D_VaD_GeaFv37hTM2VY8Tq0ehgTk=",
        rating: 4.6, reviews: 145, badge: null,
        description: "Terbuat dari silikon BPA-free yang lembut, lampu ini tidak hanya berfungsi sebagai penerangan saat tidur, tetapi juga sebagai dekorasi kamar yang estetik dan pelepas stres (",
        specs: ["Fitur Tap Control", "Rechargeable", "Fleksibel bisa dilipat", "Timer Otomatis", "Lucu & Usefull"]
    },
    {
        id: 15, name: "Mini Humidifier", category: "dekorasi",
        price: 890000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1617775047746-5b36a40109f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWluaSUyMEh1bWlkaWZpZXJ8ZW58MHx8MHx8fDA%3D",
        imageLg: "https://images.unsplash.com/photo-1617775047746-5b36a40109f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWluaSUyMEh1bWlkaWZpZXJ8ZW58MHx8MHx8fDA%3D",
        rating: 4.7, reviews: 750, badge: "new",
        description: "Alat ini membantu menjaga kelembapan udara di ruangan ber-AC agar kulit dan tenggorokan tidak kering. Banyak model terbaru menggunakan desain unik.",
        specs: ["Silent Operation", "Lampu Ambient", "Fungsi Aromaterapi" ]
    },
    {
        id: 16, name: "Puffer Tote Bag", category: "tas",
        price: 340000, originalPrice: null,
        image: "https://images.unsplash.com/photo-1588122698107-836d3c39704c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHVmZmVyJTIwVG90ZSUyMEJhZ3xlbnwwfHwwfHx8MA%3D%3D",
        imageLg: "https://images.unsplash.com/photo-1588122698107-836d3c39704c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHVmZmVyJTIwVG90ZSUyMEJhZ3xlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.8, reviews: 876, badge: "bestseller",
        description: "Terbuat dari bahan nilon atau parasut yang diisi dengan busa/kapas sintetis sehingga memberikan efek puffy. Tas ini sangat ringan namun memiliki struktur yang kuat untuk membawa banyak barang tanpa membuat bahu terasa sakit karena talinya yang empuk.",
        specs: ["Kapasitas Besar", "Bahan Water-Resistant", "Banyak Kompartemen", "Pilihan Warna Variatif"]
    },
];

var cart = [];
var currentFilter = "semua";
var checkoutStep = 1;
var detailQty = 1;
var selectedPayment = null;
var shippingInfo = {};

var productsGrid = document.getElementById("productsGrid");
var cartBadge = document.getElementById("cartBadge");
var cartBtn = document.getElementById("cartBtn");
var cartDrawer = document.getElementById("cartDrawer");
var cartOverlay = document.getElementById("cartOverlay");
var closeCartBtn = document.getElementById("closeCartBtn");
var cartBody = document.getElementById("cartBody");
var cartFooter = document.getElementById("cartFooter");
var detailModal = document.getElementById("detailModal");
var detailContent = document.getElementById("detailContent");
var checkoutModal = document.getElementById("checkoutModal");
var checkoutBody = document.getElementById("checkoutBody");
var checkoutSteps = document.getElementById("checkoutSteps");
var closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
var successModal = document.getElementById("successModal");
var successInfo = document.getElementById("successInfo");
var successCloseBtn = document.getElementById("successCloseBtn");
var confettiContainer = document.getElementById("confettiContainer");
var toastContainer = document.getElementById("toastContainer");
var scrollTopBtn = document.getElementById("scrollTopBtn");
var filterBar = document.getElementById("filterSection");
var header = document.getElementById("header");
var mobileMenuBtn = document.getElementById("mobileMenuBtn");
var mobileNav = document.getElementById("mobileNav");
var mobileMenuIcon = document.getElementById("mobileMenuIcon");
var helpModal = document.getElementById("helpModal");
var helpModalTitle = document.getElementById("helpModalTitle");
var helpModalBody = document.getElementById("helpModalBody");

/* ============================================
   SISTEM SUARA
   ============================================ */
var audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }
}

function playClick() {
    initAudio();
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(660, audioCtx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.08);
}

function playAddToCart() {
    initAudio();
    var times = [0, 0.08];
    var freqs = [660, 990];
    times.forEach(function(t, i) {
        var osc = audioCtx.createOscillator();
        var gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freqs[i], audioCtx.currentTime + t);
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime + t);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + t + 0.12);
        osc.start(audioCtx.currentTime + t);
        osc.stop(audioCtx.currentTime + t + 0.12);
    });
}

function playWishlist() {
    initAudio();
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.25);
}

function playRemove() {
    initAudio();
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, audioCtx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.15);
}

function playNext() {
    initAudio();
    var freqs = [523, 659, 784];
    freqs.forEach(function(f, i) {
        var osc = audioCtx.createOscillator();
        var gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = "sine";
        var t = audioCtx.currentTime + i * 0.07;
        osc.frequency.setValueAtTime(f, t);
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
        osc.start(t);
        osc.stop(t + 0.12);
    });
}

function playBack() {
    initAudio();
    var freqs = [784, 659, 523];
    freqs.forEach(function(f, i) {
        var osc = audioCtx.createOscillator();
        var gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = "sine";
        var t = audioCtx.currentTime + i * 0.07;
        osc.frequency.setValueAtTime(f, t);
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
        osc.start(t);
        osc.stop(t + 0.12);
    });
}

function playSelect() {
    initAudio();
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(700, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1000, audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.12);
}

function playSuccess() {
    initAudio();
    var melody = [523, 659, 784, 1047];
    melody.forEach(function(f, i) {
        var osc = audioCtx.createOscillator();
        var gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = "sine";
        var t = audioCtx.currentTime + i * 0.15;
        osc.frequency.setValueAtTime(f, t);
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.setValueAtTime(0.15, t + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        osc.start(t);
        osc.stop(t + 0.35);
    });
}

function playClose() {
    initAudio();
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.1);
}

function playFilter() {
    initAudio();
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(900, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.06);
}

document.addEventListener("click", function(e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    if (btn.classList.contains("btn-add-cart")) return;
    if (btn.classList.contains("product-wishlist")) return;
    if (btn.classList.contains("cart-remove-btn")) return;
    if (btn.classList.contains("cart-qty-btn")) return;
    if (btn.classList.contains("qty-btn")) return;
    if (btn.classList.contains("payment-option")) return;
    if (btn.id === "successCloseBtn") return;
    if (btn.id === "closeCartBtn") return;
    if (btn.id === "closeCheckoutBtn") return;
    if (btn.id === "mobileMenuBtn") return;
    playClick();
});

/* ============================================
   UTILITAS
   ============================================ */
function formatRupiah(num) {
    return "Rp" + num.toLocaleString("id-ID");
}

function renderStars(rating) {
    var html = '<div class="stars">';
    for (var i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) html += '<i class="fa-solid fa-star"></i>';
        else if (i - rating < 1) html += '<i class="fa-solid fa-star-half-stroke"></i>';
        else html += '<i class="fa-regular fa-star empty"></i>';
    }
    return html + "</div>";
}

function showToast(message, icon) {
    icon = icon || "fa-solid fa-heart";
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = '<i class="' + icon + '"></i><span>' + message + '</span>';
    toastContainer.appendChild(toast);
    setTimeout(function() { if (toast.parentNode) toast.remove(); }, 3000);
}

function generateOrderNumber() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var result = "PC-";
    for (var i = 0; i < 8; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
    return result;
}

function handleImgError(img) {
    img.style.display = "none";
    var fallback = document.createElement("div");
    fallback.className = "img-fallback";
    fallback.innerHTML = '<i class="fa-solid fa-image"></i>';
    img.parentNode.appendChild(fallback);
}

/* ============================================
   NAVIGASI
   ============================================ */
function smoothNav(e, targetId) {
    e.preventDefault();
    playClick();
    var el = document.getElementById(targetId);
    if (el) {
        var top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: "smooth" });
    }
}

function scrollToTop(e) {
    if (e) e.preventDefault();
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

var mobileOpen = false;
mobileMenuBtn.addEventListener("click", function() {
    playClick();
    mobileOpen = !mobileOpen;
    if (mobileOpen) {
        mobileNav.classList.add("open");
        mobileMenuIcon.className = "fa-solid fa-xmark";
    } else {
        mobileNav.classList.remove("open");
        mobileMenuIcon.className = "fa-solid fa-bars";
    }
});

function closeMobileAndGo(e, targetId) {
    e.preventDefault();
    mobileOpen = false;
    mobileNav.classList.remove("open");
    mobileMenuIcon.className = "fa-solid fa-bars";
    playClick();
    var el = document.getElementById(targetId);
    if (el) {
        var top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: "smooth" });
    }
}

document.addEventListener("click", function(e) {
    if (mobileOpen && !header.contains(e.target)) {
        mobileOpen = false;
        mobileNav.classList.remove("open");
        mobileMenuIcon.className = "fa-solid fa-bars";
    }
});

function showContactToast(e) {
    e.preventDefault();
    playClick();
    showToast("Hubungi kami via WhatsApp: 0812-3456-7890", "fa-brands fa-whatsapp");
}

/* ============================================
   MODAL BANTUAN
   ============================================ */
var helpData = {
    "cara-belanja": {
        title: '<i class="fa-solid fa-bag-shopping"></i> Cara Belanja',
        body: '<p><strong>1. Pilih Produk</strong> — Telusuri katalog dan klik produk yang kamu suka.</p><p><strong>2. Masukkan Keranjang</strong> — Tentukan jumlah lalu klik "Tambah ke Keranjang".</p><p><strong>3. Checkout</strong> — Buka keranjang, klik "Checkout", isi data pengiriman.</p><p><strong>4. Bayar</strong> — Pilih metode pembayaran dan selesaikan pesanan.</p><p><strong>5. Tunggu</strong> — Pesanan akan diproses dan dikirim ke alamatmu. Estimasi 2-4 hari kerja.</p>'
    },
    "pengiriman": {
        title: '<i class="fa-solid fa-truck-fast"></i> Pengiriman',
        body: '<p>Kami menggunakan <strong>JNE, J&T, dan SiCepat</strong> untuk pengiriman seluruh Indonesia.</p><ul><li><strong>Gratis ongkir</strong> untuk pembelian di atas Rp100.000</li><li>Ongkir reguler mulai <strong>Rp15.000</strong></li><li>Estimasi pengiriman <strong>2-4 hari kerja</strong> (Jawa) dan <strong>3-7 hari kerja</strong> (luar Jawa)</li><li>No. resi dikirim via WhatsApp</li></ul>'
    },
    "pengembalian": {
        title: '<i class="fa-solid fa-rotate-left"></i> Pengembalian',
        body: '<p>Pengembalian bisa dilakukan dalam <strong>7 hari</strong> setelah barang diterima dengan kondisi:</p><ul><li>Barang belum dipakai / dicuci</li><li>Tag masih menempel</li><li>Kemasan asli masih utuh</li></ul><p>Hubungi CS kami via WhatsApp untuk memulai proses retur.</p>'
    },
    "faq": {
        title: '<i class="fa-solid fa-circle-question"></i> FAQ',
        body: '<p><strong>Apakah produk original?</strong><br>Ya, semua produk 100% original dan sudah kurasi ketat.</p><p><strong>Bisa request warna?</strong><br>Bisa! Tulis catatan warna saat checkout atau chat CS kami.</p><p><strong>Bagaimana tracking pesanan?</strong><br>No. resi dikirim via WhatsApp setelah pesanan diproses.</p><p><strong>Apakah ada membership?</strong><br>Segera hadir! Stay tuned di media sosial kami ya.</p>'
    }
};

function showHelpToast(e, key) {
    e.preventDefault();
    playClick();
    var data = helpData[key];
    if (!data) return;
    helpModalTitle.innerHTML = data.title;
    helpModalBody.innerHTML = data.body;
    helpModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeHelpModal() {
    playClose();
    helpModal.classList.remove("active");
    document.body.style.overflow = "";
}

helpModal.addEventListener("click", function(e) {
    if (e.target === helpModal) closeHelpModal();
});

/* ============================================
   RENDER PRODUK
   ============================================ */
function renderProducts() {
    var filtered = currentFilter === "semua"
        ? products
        : products.filter(function(p) { return p.category === currentFilter; });

    productsGrid.innerHTML = filtered.map(function(p, idx) {
        var badgeHTML = "";
        if (p.badge === "bestseller") badgeHTML = '<span class="product-badge badge-bestseller">Terlaris</span>';
        else if (p.badge === "discount") badgeHTML = '<span class="product-badge badge-discount">Diskon</span>';
        else if (p.badge === "new") badgeHTML = '<span class="product-badge badge-new">Baru</span>';
        var priceHTML = '<span class="price-current">' + formatRupiah(p.price) + '</span>';
        if (p.originalPrice) priceHTML += '<span class="price-original">' + formatRupiah(p.originalPrice) + '</span>';
        return '<div class="product-card reveal" style="transition-delay:' + (idx * 0.05) + 's" onclick="openDetail(' + p.id + ')">' +
            '<div class="product-card-img">' + badgeHTML +
            '<button class="product-wishlist" onclick="event.stopPropagation();toggleWishlist(this)" aria-label="Favorit"><i class="fa-regular fa-heart"></i></button>' +
            '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" onerror="handleImgError(this)">' +
            '</div><div class="product-card-info">' +
            '<div class="product-card-category">' + p.category + '</div>' +
            '<div class="product-card-name">' + p.name + '</div>' +
            '<div class="product-card-rating">' + renderStars(p.rating) + '<span class="rating-text">' + p.rating + ' (' + p.reviews + ')</span></div>' +
            '<div class="product-card-price">' + priceHTML + '</div>' +
            '<div class="product-card-footer"><button class="btn-add-cart" onclick="event.stopPropagation();addToCart(' + p.id + ',1)"><i class="fa-solid fa-cart-plus"></i> Tambah</button></div>' +
            '</div></div>';
    }).join("");
    requestAnimationFrame(function() {
        document.querySelectorAll(".product-card.reveal").forEach(function(el) { observeReveal(el); });
    });
}

function toggleWishlist(btn) {
    playWishlist();
    btn.classList.toggle("liked");
    var icon = btn.querySelector("i");
    if (btn.classList.contains("liked")) {
        icon.className = "fa-solid fa-heart";
        showToast("Ditambahkan ke wishlist!", "fa-solid fa-heart");
    } else {
        icon.className = "fa-regular fa-heart";
        showToast("Dihapus dari wishlist", "fa-regular fa-heart");
    }
}

/* ============================================
   DETAIL PRODUK
   ============================================ */
function openDetail(id) {
    var p = products.find(function(x) { return x.id === id; });
    if (!p) return;
    detailQty = 1;
    var badgeHTML = "";
    if (p.badge === "bestseller") badgeHTML = '<span class="product-badge badge-bestseller">Terlaris</span>';
    else if (p.badge === "discount") badgeHTML = '<span class="product-badge badge-discount">Diskon</span>';
    else if (p.badge === "new") badgeHTML = '<span class="product-badge badge-new">Baru</span>';
    var priceHTML = '<span class="price-current">' + formatRupiah(p.price) + '</span>';
    if (p.originalPrice) priceHTML += '<span class="price-original">' + formatRupiah(p.originalPrice) + '</span>';
    var specsHTML = p.specs.map(function(s) { return '<li><i class="fa-solid fa-check"></i> ' + s + '</li>'; }).join("");
    detailContent.innerHTML =
        '<div class="detail-img-wrap">' + badgeHTML +
        '<button class="detail-close" onclick="closeDetail()" aria-label="Tutup"><i class="fa-solid fa-xmark"></i></button>' +
        '<img src="' + (p.imageLg || p.image) + '" alt="' + p.name + '" onerror="handleImgError(this)"></div>' +
        '<div class="detail-info"><div class="detail-category">' + p.category + '</div>' +
        '<h2 class="detail-name">' + p.name + '</h2>' +
        '<div class="detail-rating">' + renderStars(p.rating) + '<span class="rating-text">' + p.rating + ' (' + p.reviews + ' ulasan)</span></div>' +
        '<div class="detail-price">' + priceHTML + '</div>' +
        '<p class="detail-desc">' + p.description + '</p>' +
        '<ul class="detail-specs">' + specsHTML + '</ul>' +
        '<div class="detail-qty"><span>Jumlah:</span><div class="qty-control">' +
        '<button class="qty-btn" onclick="changeDetailQty(-1)"><i class="fa-solid fa-minus"></i></button>' +
        '<div class="qty-value" id="detailQtyVal">1</div>' +
        '<button class="qty-btn" onclick="changeDetailQty(1)"><i class="fa-solid fa-plus"></i></button></div></div></div>' +
        '<div class="detail-actions"><button class="btn-primary" onclick="addToCart(' + p.id + ', detailQty); closeDetail();"><i class="fa-solid fa-cart-shopping"></i> Masukkan Keranjang</button>' +
        '<button class="btn-outline" onclick="toggleWishlist(this)"><i class="fa-regular fa-heart"></i></button></div></div></div>';
    detailModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeDetail() {
    playClose();
    detailModal.classList.remove("active");
    document.body.style.overflow = "";
}

function changeDetailQty(delta) {
    playClick();
    detailQty = Math.max(1, Math.min(20, detailQty + delta));
    document.getElementById("detailQtyVal").textContent = detailQty;
}

detailModal.addEventListener("click", function(e) {
    if (e.target === detailModal) closeDetail();
});

/* ============================================
   KERANJANG
   ============================================ */
function addToCart(id, qty) {
    playAddToCart();
    var existing = cart.find(function(item) { return item.product.id === id; });
    if (existing) { existing.quantity = Math.min(20, existing.quantity + qty); }
    else { var product = products.find(function(p) { return p.id === id; }); cart.push({ product: product, quantity: qty }); }
    updateCartBadge();
    renderCart();
    showToast("Ditambahkan ke keranjang!", "fa-solid fa-cart-shopping");
}

function updateCartBadge() {
    var total = cart.reduce(function(s, i) { return s + i.quantity; }, 0);
    cartBadge.textContent = total;
    if (total > 0) cartBadge.classList.add("show");
    else cartBadge.classList.remove("show");
}

function renderCart() {
    if (cart.length === 0) {
        cartBody.innerHTML = '<div class="cart-empty"><i class="fa-solid fa-bag-shopping"></i><p>Keranjang masih kosong nih,<br>yuk belanja dulu!</p></div>';
        cartFooter.innerHTML = "";
        return;
    }
    cartBody.innerHTML = cart.map(function(item) {
        return '<div class="cart-item"><div class="cart-item-img"><img src="' + item.product.image + '" alt="' + item.product.name + '" loading="lazy" onerror="handleImgError(this)"></div>' +
        '<div class="cart-item-info"><div class="cart-item-name">' + item.product.name + '</div><div class="cart-item-price">' + formatRupiah(item.product.price) + '</div>' +
        '<div class="cart-item-bottom"><div class="cart-qty-control">' +
        '<button class="cart-qty-btn" onclick="updateCartQty(' + item.product.id + ', -1)"><i class="fa-solid fa-minus"></i></button>' +
        '<div class="cart-qty-val">' + item.quantity + '</div>' +
        '<button class="cart-qty-btn" onclick="updateCartQty(' + item.product.id + ', 1)"><i class="fa-solid fa-plus"></i></button></div></div>' +
        '<button class="cart-remove-btn" onclick="removeFromCart(' + item.product.id + ')"><i class="fa-solid fa-trash-can"></i> Hapus</button></div></div></div></div>';
    }).join("");
    var t = getCartTotals();
    cartFooter.innerHTML =
        '<div class="cart-summary-row"><span class="label">Subtotal</span><span>' + formatRupiah(t.subtotal) + '</span></div>' +
        '<div class="cart-summary-row"><span class="label">Ongkir</span><span class="' + (t.shipping === 0 ? 'free-shipping' : '') + '">' + (t.shipping === 0 ? 'GRATIS' : formatRupiah(t.shipping)) + '</span></div>' +
        '<div class="cart-summary-row total"><span>Total</span><span>' + formatRupiah(t.total) + '</span></div>' +
        '<button class="btn-primary" onclick="openCheckout()"><i class="fa-solid fa-bag-shopping"></i> Checkout</button></div>';
}

function updateCartQty(id, delta) {
    playClick();
    var item = cart.find(function(i) { return i.product.id === id; });
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter(function(i) { return i.product.id !== id; });
    else item.quantity = Math.min(20, item.quantity);
    updateCartBadge();
    renderCart();
}

function removeFromCart(id) {
    playRemove();
    cart = cart.filter(function(i) { return i.product.id !== id; });
    updateCartBadge();
    renderCart();
    showToast("Produk dihapus dari keranjang", "fa-solid fa-trash-can");
}

function getCartTotals() {
    var subtotal = cart.reduce(function(s, i) { return s + i.product.price * i.quantity; }, 0);
    var shipping = subtotal >= 100000 ? 0 : 15000;
    return { subtotal: subtotal, shipping: shipping, total: subtotal + shipping };
}

function openCart() {
    playClick();
    renderCart();
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    playClose();
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

cartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

/* ============================================
   CHECKOUT
   ============================================ */
function openCheckout() {
    if (cart.length === 0) return;
    closeCart();
    checkoutStep = 1;
    selectedPayment = null;
    shippingInfo = {};
    renderCheckoutStep();
    checkoutModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCheckout() {
    playClose();
    checkoutModal.classList.remove("active");
    document.body.style.overflow = "";
}

closeCheckoutBtn.addEventListener("click", closeCheckout);
checkoutModal.addEventListener("click", function(e) { if (e.target === checkoutModal) closeCheckout(); });

function updateStepIndicator() {
    var steps = checkoutSteps.querySelectorAll(".step");
    var lines = checkoutSteps.querySelectorAll(".step-line");
    steps.forEach(function(s, i) {
        s.classList.remove("active", "done");
        if (i + 1 < checkoutStep) s.classList.add("done");
        else if (i + 1 === checkoutStep) s.classList.add("active");
    });
    lines.forEach(function(l, i) {
        l.classList.remove("done");
        if (i + 1 < checkoutStep) l.classList.add("done");
    });
}

function renderCheckoutStep() {
    updateStepIndicator();
    switch (checkoutStep) {
        case 1: renderCheckoutSummary(); break;
        case 2: renderCheckoutShipping(); break;
        case 3: renderCheckoutPayment(); break;
        case 4: renderCheckoutConfirm(); break;
    }
}

function renderCheckoutSummary() {
    var t = getCartTotals();
    var itemsHTML = cart.map(function(item) {
        return '<div class="checkout-item"><div class="checkout-item-img"><img src="' + item.product.image + '" alt="' + item.product.name + '" loading="lazy" onerror="handleImgError(this)"></div><div class="checkout-item-info"><div class="checkout-item-name">' + item.product.name + '</div><div class="checkout-item-meta">' + item.quantity + ' x ' + formatRupiah(item.product.price) + '</div></div><div class="checkout-item-subtotal">' + formatRupiah(item.product.price * item.quantity) + '</div></div>';
    }).join("");
    checkoutBody.innerHTML = '<div class="checkout-section-title">Ringkasan Pesanan</div>' + itemsHTML +
    '<div style="margin-top:16px;"><div class="confirm-row"><span class="c-label">Subtotal</span><span class="c-value">' + formatRupiah(t.subtotal) + '</span></div>' +
    '<div class="confirm-row"><span class="c-label">Ongkir</span><span class="c-value" style="' + (t.shipping === 0 ? 'color:var(--mint-dark)' : '') + '">' + (t.shipping === 0 ? 'GRATIS' : formatRupiah(t.shipping)) + '</span></div>' +
    '<div class="confirm-row total-row"><span class="c-label">Total</span><span class="c-value">' + formatRupiah(t.total) + '</span></div></div>' +
    '<div class="checkout-actions"><button class="btn-secondary" onclick="goBackFromCheckout()"><i class="fa-solid fa-arrow-left"></i> Kembali</button><button class="btn-primary" onclick="goToStep(2)">Lanjut <i class="fa-solid fa-arrow-right"></i></button></div>';
}

function goBackFromCheckout() { playBack(); closeCheckout(); }

function renderCheckoutShipping() {
    checkoutBody.innerHTML = '<div class="checkout-section-title">Data Pengiriman</div><form id="shippingForm" onsubmit="return false;">' +
    '<div class="form-group" id="fg-name"><label for="shipName">Nama Lengkap</label><input type="text" id="shipName" placeholder="Masukkan nama lengkap" value="' + (shippingInfo.name || '') + '"><div class="form-error">Nama wajib diisi</div></div>' +
    '<div class="form-group" id="fg-phone"><label for="shipPhone">No. Telepon</label><input type="tel" id="shipPhone" placeholder="Contoh: 08123456789" value="' + (shippingInfo.phone || '') + '"><div class="form-error">No. telepon wajib diisi</div></div>' +
    '<div class="form-group" id="fg-address"><label for="shipAddress">Alamat Lengkap</label><textarea id="shipAddress" placeholder="Jalan, nomor rumah, RT/RW">' + (shippingInfo.address || '') + '</textarea><div class="form-error">Alamat wajib diisi</div></div>' +
    '<div class="form-row"><div class="form-group" id="fg-city"><label for="shipCity">Kota</label><input type="text" id="shipCity" placeholder="Kota/Kabupaten" value="' + (shippingInfo.city || '') + '"><div class="form-error">Kota wajib diisi</div></div>' +
    '<div class="form-group" id="fg-postal"><label for="shipPostal">Kode Pos</label><input type="text" id="shipPostal" placeholder="12345" value="' + (shippingInfo.postal || '') + '"><div class="form-error">Kode pos wajib diisi</div></div></div></div>' +
    '<div class="form-group"><label for="shipNotes">Catatan (opsional)</label><textarea id="shipNotes" placeholder="Catatan tambahan untuk kurir...">' + (shippingInfo.notes || '') + '</textarea></div></form>' +
    '<div class="checkout-actions"><button class="btn-secondary" onclick="goToStepBack(1)"><i class="fa-solid fa-arrow-left"></i> Kembali</button><button class="btn-primary" onclick="validateShipping()">Lanjut <i class="fa-solid fa-arrow-right"></i></button></div>';
}

function validateShipping() {
    var fields = [
        { id: "shipName", key: "name", fg: "fg-name" },
        { id: "shipPhone", key: "phone", fg: "fg-phone" },
        { id: "shipAddress", key: "address", fg: "fg-address" },
        { id: "shipCity", key: "city", fg: "fg-city" },
        { id: "shipPostal", key: "postal", fg: "fg-postal" }
    ];
    var valid = true;
    fields.forEach(function(f) {
        var el = document.getElementById(f.id);
        var fg = document.getElementById(f.fg);
        if (!el.value.trim()) { fg.classList.add("error"); valid = false; }
        else { fg.classList.remove("error"); shippingInfo[f.key] = el.value.trim(); }
    });
    shippingInfo.notes = document.getElementById("shipNotes").value.trim();
    if (valid) goToStep(3);
}

function renderCheckoutPayment() {
    var methods = [
        { id: "gopay", name: "GoPay", sub: "Scan QR atau deeplink", icon: "pi-gopay", label: "GP" },
        { id: "ovo", name: "OVO", sub: "Transfer via OVO", icon: "pi-ovo", label: "OV" },
        { id: "dana", name: "Dana", sub: "Transfer via Dana", icon: "pi-dana", label: "DN" },
        { id: "bca", name: "BCA", sub: "Transfer manual", icon: "pi-bca", label: "BCA" },
        { id: "mandiri", name: "Mandiri", sub: "Transfer manual", icon: "pi-mandiri", label: "MDR" },
        { id: "bni", name: "BNI", sub: "Transfer manual", icon: "pi-bni", label: "BNI" },
        { id: "cod", name: "COD", sub: "Bayar di tempat", icon: "pi-cod", label: "COD" }
    ];
    var methodsHTML = methods.map(function(m) {
        return '<div class="payment-option ' + (selectedPayment === m.id ? 'selected' : '') + '" onclick="selectPayment(\'' + m.id + '\')"><div class="payment-radio"></div><div class="payment-icon ' + m.icon + '">' + m.label + '</div><div><div><div class="payment-label">' + m.name + '</div><div class="payment-sublabel">' + m.sub + '</div></div></div></div>';
    }).join("");
    checkoutBody.innerHTML = '<div class="checkout-section-title">Metode Pembayaran</div><div class="payment-grid">' + methodsHTML + '</div>' +
    '<div class="checkout-actions"><button class="btn-secondary" onclick="goToStepBack(2)"><i class="fa-solid fa-arrow-left"></i> Kembali</button>' +
    '<button class="btn-primary" id="toConfirmBtn" onclick="goToStep(4)" style="' + (!selectedPayment ? 'opacity:0.5;pointer-events:none' : '') + '">Lanjut <i class="fa-solid fa-arrow-right"></i></button></div></div>';
}

function selectPayment(id) {
    playSelect();
    selectedPayment = id;
    renderCheckoutPayment();
}

function renderCheckoutConfirm() {
    var t = getCartTotals();
    var pn = { gopay: "GoPay", ovo: "OVO", dana: "Dana", bca: "Transfer BCA", mandiri: "Transfer Mandiri", bni: "Transfer BNI", cod: "COD (Bayar di Tempat)" };
    var notesRow = shippingInfo.notes ? '<div class="confirm-row"><span class="c-label">Catatan</span><span class="c-value">' + shippingInfo.notes + '</span></div>' : '';
    checkoutBody.innerHTML = '<div class="checkout-section-title">Konfirmasi Pesanan</div>' +
    '<div class="confirm-box"><div class="confirm-row"><span class="c-label">Nama</span><span class="c-value">' + shippingInfo.name + '</span></div>' +
    '<div class="confirm-row"><span class="c-label">Telepon</span><span class="c-value">' + shippingInfo.phone + '</span></div>' +
    '<div class="confirm-row"><span class="c-label">Alamat</span><span class="c-value" style="text-align:right;max-width:60%">' + shippingInfo.address + ', ' + shippingInfo.city + ' ' + shippingInfo.postal + '</span></div>' + notesRow + '</div>' +
    '<div class="confirm-box"><div class="confirm-row"><span class="c-label">Pembayaran</span><span class="c-value">' + (pn[selectedPayment] || "-") + '</span></div>' +
    '<div class="confirm-row"><span class="c-label">Jumlah Item</span><span class="c-value">' + cart.reduce(function(s, i) { return s + i.quantity; }, 0) + ' item</span></div>' +
    '<div class="confirm-row"><span class="c-label">Subtotal</span><span class="c-value">' + formatRupiah(t.subtotal) + '</span></div>' +
    '<div class="confirm-row"><span class="c-label">Ongkir</span><span class="c-value" style="' + (t.shipping === 0 ? 'color:var(--mint-dark)' : '') + '">' + (t.shipping === 0 ? 'GRATIS' : formatRupiah(t.shipping)) + '</span></div>' +
    '<div class="confirm-row total-row"><span class="c-label">Total Bayar</span><span class="c-value">' + formatRupiah(t.total) + '</span></div></div></div>' +
    '<div class="checkout-actions"><button class="btn-secondary" onclick="goToStepBack(3)"><i class="fa-solid fa-arrow-left"></i> Kembali</button>' +
    '<button class="btn-primary" onclick="placeOrder()"><i class="fa-solid fa-check"></i> Bayar Sekarang</button></div></div>';
}

function goToStep(step) { playNext(); checkoutStep = step; renderCheckoutStep(); }
function goToStepBack(step) { playBack(); checkoutStep = step; renderCheckoutStep(); }

/* ============================================
   PESANAN SUKSES
   ============================================ */
function placeOrder() {
    var orderNumber = generateOrderNumber();
    var t = getCartTotals();
    var pn = { gopay: "GoPay", ovo: "OVO", dana: "Dana", bca: "Transfer BCA", mandiri: "Transfer Mandiri", bni: "Transfer BNI", cod: "COD (Bayar di Tempat)" };
    closeCheckout();
    playSuccess();

    confettiContainer.innerHTML = "";
    var colors = ["var(--pink)", "var(--mint)", "var(--yellow)", "var(--lavender)", "var(--peach)", "var(--coral)"];
    for (var i = 0; i < 50; i++) {
        var piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = (Math.random() * 2) + "s";
        piece.style.animationDuration = (2 + Math.random() * 2) + "s";
        piece.style.width = (6 + Math.random() * 8) + "px";
        piece.style.height = (6 + Math.random() * 8) + "px";
        piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        confettiContainer.appendChild(piece);
    }

    successInfo.innerHTML =
        '<div class="confirm-row"><span class="c-label">No. Pesanan</span><span class="c-value">' + orderNumber + '</span></div>' +
        '<div class="confirm-row"><span class="c-label">Total</span><span class="c-value">' + formatRupiah(t.total) + '</span></div>' +
        '<div class="confirm-row"><span class="c-label">Pembayaran</span><span class="c-value">' + pn[selectedPayment] + '</span></div>' +
        '<div class="confirm-row"><span class="c-label">Estimasi</span><span class="c-value" style="color:var(--mint-dark)">2-4 hari kerja</span></div>';

    successModal.classList.add("active");
    document.body.style.overflow = "hidden";
    cart = [];
    updateCartBadge();
    renderCart();
}

successCloseBtn.addEventListener("click", function() {
    playClick();
    successModal.classList.remove("active");
    document.body.style.overflow = "";
});

successModal.addEventListener("click", function(e) {
        if (e.target === successModal) {
            successModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

/* ============================================
   FILTER KATEGORI
   ============================================ */
filterBar.addEventListener("click", function(e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    playFilter();
    filterBar.querySelectorAll(".filter-btn").forEach(function(b) { b.classList.remove("active"); });
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderProducts();
});

/* ============================================
   SCROLL REVEAL
   ============================================ */
var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

function observeReveal(el) { revealObserver.observe(el); }

/* ============================================
   HEADER SCROLL & SCROLL TOP
   ============================================ */
window.addEventListener("scroll", function() {
    var y = window.scrollY;
    if (y > 20) header.classList.add("scrolled"); else header.classList.remove("scrolled");
    if (y > 400) scrollTopBtn.classList.add("show"); else scrollTopBtn.classList.remove("show");
});

scrollTopBtn.addEventListener("click", function() {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================================
   KEYBOARD: ESC tutup modal
   ============================================ */
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        if (helpModal.classList.contains("active")) closeHelpModal();
        else if (successModal.classList.contains("active")) { successModal.classList.remove("active"); document.body.style.overflow = ""; }
        else if (checkoutModal.classList.contains("active")) closeCheckout();
        else if (detailModal.classList.contains("active")) closeDetail();
        else if (cartDrawer.classList.contains("active")) closeCart();
    }
});

/* ============================================
   INISIALISASI
   ============================================ */
renderProducts();
updateCartBadge();