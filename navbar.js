// DETEKSI posisi halaman (di dalam folder Album atau tidak)
const baseNavbar = 
    (window.location.pathname.includes("album") || 
     window.location.pathname.includes("lyrics")) 
     ? "../" : "";
// Navbar HTML + Hamburger Menu
document.write(`
<header class="bg-[#6A0000] text-white w-full flex justify-between items-center px-10 py-4 sticky top-0 z-50">
    <div class="flex items-center gap-3">
        <img src="${baseNavbar}LogoPerantaranyaNINTENDOPutih.png" class="h-10">
    </div>

    <!-- Desktop Menu -->
    <nav class="hidden md:flex gap-8 text-[14px] font-semibold">
        <a href="${baseNavbar}index.html" class="hover:opacity-70">Home</a>
        <a href="${baseNavbar}visit.html" class="hover:opacity-70">The Story</a>
        <a href="${baseNavbar}discography.html" class="hover:opacity-70">Discography</a>
        <a href="${baseNavbar}lyrics.html" class="hover:opacity-70">Lyrics</a>
        <a href="${baseNavbar}contact.html" class="hover:opacity-70">Contact Us</a>
    </nav>

    <!-- Hamburger Button -->
    <button id="hamburgerBtn" class="md:hidden text-3xl">
        ☰
    </button>
</header>

<!-- SIDE MENU -->
<div id="sideMenu"
     class="fixed top-0 right-0 h-full w-64 bg-[#6A0000] text-white flex flex-col gap-6 text-lg font-semibold p-8 transform translate-x-full transition-transform duration-300 z-50">

    <button id="closeMenu" class="text-3xl absolute right-4 top-4">✕</button>

    <a href="${baseNavbar}index.html" class="mt-10 hover:opacity-70">Home</a>
    <a href="${baseNavbar}visit.html" class="hover:opacity-70">The Story</a>
    <a href="${baseNavbar}discography.html" class="hover:opacity-70">Discography</a>
    <a href="${baseNavbar}lyrics.html" class="hover:opacity-70">Lyrics</a>
    <a href="${baseNavbar}contact.html" class="hover:opacity-70">Contact Us</a>
</div>

<script>
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");

    // OPEN
    hamburgerBtn.addEventListener("click", () => {
        sideMenu.classList.remove("translate-x-full");
    });

    // CLOSE
    closeMenu.addEventListener("click", () => {
        sideMenu.classList.add("translate-x-full");
    });
</script>
`);
