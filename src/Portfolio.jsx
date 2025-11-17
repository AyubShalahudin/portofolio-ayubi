import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">MS</div>
            <div>
              <h1 className="text-xl font-semibold">Muhammad Shalahudin Ayubi Firmansyah</h1>
              <p className="text-sm text-gray-500">Web Developer • Backend (Laravel, Node.js) • Data & Forecasting • UI/UX tweaks</p>
            </div>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section id="hero" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Halo, saya Muhammad Shalahudin</h2>
            <p className="mt-4 text-gray-600">Saya seorang web developer berpengalaman dengan baik backend maupun frontend (Laravel, Node.js,MySql, Laragon, Figma, CSS, Tailwind, Bootsrap), perancangan sistem internal untuk pemerintahan/perusahaan kecil, dan analisis data sederhana untuk kebutuhan peramalan stok.</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium">Lihat Project</a>
              <a href="mailto:youremail@example.com" className="inline-block px-4 py-2 rounded-lg border border-gray-200">Hubungi saya</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                <div className="text-xl font-bold">Laravel</div>
                <div className="text-sm text-gray-500">Backend</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                <div className="text-xl font-bold">MySQL</div>
                <div className="text-sm text-gray-500">Database</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                <div className="text-xl font-bold">UI/UX</div>
                <div className="text-sm text-gray-500">Frontend</div>
              </div><div className="p-4 bg-white rounded-lg shadow-sm text-center">
                <div className="text-xl font-bold">Disiplin</div>
                <div className="text-sm text-gray-500">Teamwork</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold">Quick facts</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li><strong>Magang:</strong> Bakesbangpol — Website pengaduan WASDIN (Laravel).</li>
              <li><strong>Proyek Skripsi:</strong> Website Pengelolaan persediaan barang (Laravel) dengan fitur tambah dan hapus data, admin, dan forecasting stok (WMA).</li>
              <li><strong>Tools & Hosting:</strong> XAMPP, Laragon, VS Code.</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          <p className="mt-2 text-gray-600">Portofolio ringkasan beberapa pekerjaan dan proyek yang sudah dikerjakan.</p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <article className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Skripsi Pembuatan Sistem Informasi Pengelolaan Produk dan Barang  (UD Mulia Rasa)</h4>
              <p className="mt-2 text-gray-600">Sistem e-commerce sederhana lengkap dengan fitur tambah dan hapus data, admin, kategori produk, import/export Excel dan algoritma peramalan stok (Weighted Moving Average) Kunjungi: <a href="https://muliarasa.site" className="text-blue-600 underline" target="_blank">muliarasa.site</a></p>
              <p className="mt-3 text-sm text-gray-500"><strong>Stack:</strong> Laravel, MySQL, Niagahoster </p>
            </article>

            <article className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Admin UI & UX aplikasi pembayaran Spp siswa — SDN Bringin</h4>
              <p className="mt-2 text-gray-600">Pembuatan Aplikasi Website Pembayaran Spp siswa  SDN Bringin.</p>
            </article>
            
            <article className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Magang Bersertifikat Infinite Learning</h4>
              <p className="mt-2 text-gray-600">Mendapatkan nilai memuaskan saat menjalani program magang bersertifikat MSIB bersama dengan infinite learning.</p>
            </article>
          </div>
        </section>

        <section id="experience" className="mt-12">
          <h3 className="text-2xl font-semibold">Experience & Education</h3>
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Magang — Bakesbangpol (Website WASDIN)</h4>
                  <p className="text-sm text-gray-600">Agustus 2024 — Desember 2024 (6 Bulan )</p>
                  <p className="mt-2 text-gray-600">Membangun sistem pelaporan berbasis Laravel sesuai permintaan Bakesbangpol Kota Batu — multi-role, manajemen laporan, dan otorisasi.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Proyek Skripsi — Sistem pengelolaan stok produk untuk UD Mulia Rasa</h4>
              <p className="mt-2 text-gray-600">Pengembangan full-stack dengan fitur inventory forecasting, import/export data penjualan, dan implementasi metode forecasting.</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Studi Independen & Courses</h4>
              <p className="text-sm text-gray-600">Januari 2024 — Juni 2025 (timeline magang (6 bulan) )</p>
              <p className="mt-2 text-gray-600">Mengikuti program Studi Independen Bersertifikat — topik: MySQL, NodeJS, Express, cloud, cybersecurity fundamentals, design video showcase,Softskill Training.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-12">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">Laravel</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">PHP</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">MySQL</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Node.js & Express</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Authentication (Passport.js)</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Proper Softskill & Hardskill</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Intermediate English Speaker</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Frontend (Blade, Tailwind)</div>
          </div>
        </section>

        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-semibold">Contact & Download</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-gray-600">Siap untuk bekerja sama atau membutuhkan revisi portofolio? Hubungi saya:</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li><strong>Email:</strong> <a href="mailto:fayub643@gmail.com" className="hover:underline">fayub643@gmail.com</a></li>
                <li><strong>Location:</strong> Sidoarjo, Indonesia</li>
                <li><strong>CV:</strong> <a href="#" className="underline">Download CV (placeholder)</a></li>
              </ul>
            </div>

            <form className="p-6 bg-white rounded-lg shadow-sm">
              <label className="block text-sm font-medium text-gray-700">Nama</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" placeholder="Nama Anda" />

              <label className="block text-sm font-medium text-gray-700 mt-4">Pesan</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" rows="4" placeholder="Tulis pesan..." />

              <div className="mt-4">
                <button type="button" className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white">Kirim</button>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">© {new Date().getFullYear()} Muhammad Shalahudin Ayubi Firmansyah — Built with ❤️</footer>
      </main>
    </div>
  );
}
