// DETEKSI posisi halaman (di dalam folder Album atau tidak)
const baseFooter = 
    (window.location.pathname.includes("album") || 
     window.location.pathname.includes("lyrics")) 
     ? "../" : "";
// Footer HTML
document.write(`
<footer class="bg-[#2c2929] text-white py-10 px-6 mt-20">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <!-- LOGO -->
        <div>
            <img src="${baseFooter}LogoPerantaranyaNINTENDOPutih.png" class="h-12 mb-4">
        </div>

        <!-- NAVIGATION -->
        <div>
            <h3 class="font-semibold text-lg mb-3">Navigation</h3>
            <ul class="space-y-2 text-sm">
                <li><a href="${baseFooter}index.html" class="hover:underline">Home</a></li>
                <li><a href="${baseFooter}visit.html" class="hover:underline">The Story</a></li>
                <li><a href="${baseFooter}discography.html" class="hover:underline">Discography</a></li>
                <li><a href="${baseFooter}lyrics.html" class="hover:underline">Lyrics</a></li>
                <li><a href="${baseFooter}contact.html" class="hover:underline">Contact Us</a></li>
            </ul>
        </div>

        <!-- SOSMED -->
        <div>
            <h3 class="font-semibold text-lg mb-3">Follow us</h3>
            <ul class="space-y-2 text-sm">
                <li><a href="https://www.instagram.com/perantaranya?igsh=aXJjYW1haDdobWR2" class="hover:underline">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@perantaranya?_r=1&_t=ZS-922lLqEdzwi" class="hover:underline">TikTok</a></li>
                <li><a href="https://youtube.com/@perantaranya?si=W1Npywk11wxWHwVa" class="hover:underline">YouTube</a></li>
                <li><a href="https://open.spotify.com/artist/2BGEARzgCcVxwfJZeuJzm7?si=z1pwY7jYQ1mYAAiIELbURQ" class="hover:underline">Spotify</a></li>
            </ul>
        </div>
    </div>

    <div class="text-center text-xs opacity-70 mt-10">
        © 2025 Perantaranya. All Rights Reserved.
    </div>
</footer>
`);
