import React from 'react'

function Portofolio() {
    return (
        <section id="portofolio" className="bg-slate-100 pt-10 pb-16">
            <br></br>
            <div className="container">
                <div className="w-full px-4" data-aos="zoom-in">
                    <div className="max-w-xl mx-auto text-center mb-10">
                        <h4 className="font-bold uppercase text-primary text-center text-lg mb-2 lg:text-2xl">Portofolio</h4>
                        <div className="w-[150px] lg:w-[210px] h-1 bg-dark-light mb-10 ml-24 -translate-x-2 lg:ml-48 lg:-translate-x-3"></div>
                        <h2 className="font-bold text-dark text-3xl mb-4">Project Terbaru</h2>
                        <p className="capitalize ">Dibawah Ini Adalah Project-project yang pernah saya buat baik project latihan,Freelance,atau Pun proyek Internal Perusahaan</p>
                    </div>
                </div>
                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto gap-5">

                    {/* mbanking */}
                    <div className="card w-100 bg-base-100 shadow-xl" data-aos="zoom-in">
                        <figure><img className="hover:scale-125 duration-300 w-100" src="/images/portofolio/restapi2.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                Rest API mBanking
                                <div className="badge badge-primary">Personal / Latihan</div>
                            </h2>
                            <p>
                                Ini adalah rest api dari web service mBanking yang simple
                            </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Nodejs</div>
                                <div className="badge badge-outline">Express js</div>
                                <div className="badge badge-outline">Sequelize</div>
                                <div className="badge badge-outline">MySql</div>
                            </div>
                        </div>
                    </div>

                    {/* Ruang Kelas */}
                    <div className="card w-100 bg-base-100 shadow-xl" data-aos="zoom-in">
                        <figure><img className="hover:scale-125 duration-300 w-100" src="/images/portofolio/ruang_kelas_1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                Ruang Kelas
                                <div className="badge badge-primary">Personal / Latihan</div>
                            </h2>
                            <p>Ruang Kelas adalah aplikasi layaknya seperti google classroom,
                                guru atau pemilik kelas dapat membuat tugas ke siswa yang bergabung ke kelasnya,
                                serta pemilik kelas dapat memberikan nilai kepada siswa yang mengumpulkan tugasnya masing-masing
                            </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Laravel</div>
                                <div className="badge badge-outline">Jquery</div>
                                <div className="badge badge-outline">Ajax</div>
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">Postgres Sql</div>
                            </div>
                        </div>
                    </div>

                    {/* PPDB */}
                    <div className="card w-100 bg-base-100 shadow-xl" data-aos="zoom-in">
                        <figure><img className="hover:scale-125 duration-300 w-100" src="/images/portofolio/ppdb_1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                PPDB Dinas
                                <div className="badge badge-primary">Perusahaan / Internal</div>
                            </h2>
                            <p>Layanan PPDB Online adalah sebuah sistem layanan yang dirancang untuk melakukan
                                otomasi seleksi Pendaftaran Peserta Didik Baru (PPDB), mulai dari proses pendaftaran, proses seleksi hingga
                                pengumuman hasil seleksi, yang dilakukan secara online dan berbasis waktu nyata (realtime).Mulai Dari Jalur Prestasi,Afirmasi,Pindah Tugas Hingga Jalur Zonasi</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Laravel</div>
                                <div className="badge badge-outline">Jquery</div>
                                <div className="badge badge-outline">Ajax</div>
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">Postgres Sql</div>
                            </div>
                        </div>
                    </div>

                    {/* Api Perikanan */}
                    <div className="card w-100 bg-base-100 shadow-xl" data-aos="zoom-in">
                        <figure><img className="hover:scale-125 duration-300 w-100" src="/images/portofolio/restapi2.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                Rest Api Perikanan Kepri
                                <div className="badge badge-primary">Project Freelance</div>
                            </h2>
                            <p>Sebuah Restful Api Untuk Aplikasi Mobile Yang Ditujukan Untuk Jual Beli Ikan Di Kepulauan Riau </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Nodejs</div>
                                <div className="badge badge-outline">Express Js</div>
                                <div className="badge badge-outline">MongoDb</div>
                            </div>
                        </div>
                    </div>

                    {/* Scoin */}
                    <div className="card w-100 bg-base-100 shadow-xl" data-aos="zoom-in">
                        <figure><img className="hover:scale-125 duration-300" src="/images/portofolio/scoin_1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                Scoin
                                <div className="badge badge-primary">Perusahaan / Internal</div>
                            </h2>
                            <p>Scoin adalah satuan digital yang bernilai ekonomi yang digunakan untuk transaksi akses aplikasi turunan schoolmedia maupun aplikasi lain yang berkerjasama dengan schoolmedia, serta untuk pembayaran royalti terhadap pemilik konten - konten user schoolmedia maupun konten dari user dari platform lain yang bekerja sama dengan schoolmedia</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Laravel</div>
                                <div className="badge badge-outline">Jquery</div>
                                <div className="badge badge-outline">Ajax</div>
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">Postgres Sql</div>
                            </div>
                        </div>
                    </div>

                    {/* mern blog */}
                    <div className="card w-100 bg-base-100 shadow-xl" data-aos="zoom-in">
                        <figure><img className="hover:scale-125 duration-300 w-100" src="/images/portofolio/mern_blog_1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                Blog
                                <div className="badge badge-primary">Personal / Latihan</div>
                            </h2>
                            <p>
                                Ini adalah sebuah blog yang sangat simple yang di bangun dengan mern stack
                            </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Nodejs</div>
                                <div className="badge badge-outline">Express js</div>
                                <div className="badge badge-outline">React js</div>
                                <div className="badge badge-outline">Mongoose</div>
                                <div className="badge badge-outline">MongoDb</div>
                            </div>
                        </div>
                    </div>


                    {/* Tryout */}
                    <div className="card w-100 bg-base-100 shadow-xl" data-aos="zoom-in">
                        <figure><img className="hover:scale-125 duration-300" src="/images/portofolio/tryout_1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                Tryout
                                <div className="badge badge-primary">Perusahaan / Internal</div>
                            </h2>
                            <p>Sebuah Web Aplikasi Untuk Melakukan Ujian Secara online Yang Terintegrasi Dengan Web Aplikasi Materi Ajar Dan Ujian (Tempat Untuk Membuat Soal & Materi)</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Laravel</div>
                                <div className="badge badge-outline">Jquery</div>
                                <div className="badge badge-outline">Ajax</div>
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">Postgres Sql</div>
                            </div>
                        </div>
                    </div>

                    {/* CMS MKKS */}
                    <div className="card w-100 bg-base-100 shadow-xl" data-aos="zoom-in">
                        <figure><img className="hover:scale-125 duration-300" src="/images/portofolio/cmsmkks_2.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                CMS MKKS
                                <div className="badge badge-primary">Perusahaan / Internal</div>
                            </h2>
                            <p>Sebuah Web Aplikasi Musyawarah Kerja Kepala Sekolah disingkat MKKS merupakan forum perkumpulan kepala sekolah dalam satu gugus wilayah atau kecamatan. Anggotanya terdiri dari kepala-kepala sekolah negeri dan swasta dalam satu kecamatan terkait. </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Laravel</div>
                                <div className="badge badge-outline">Jquery</div>
                                <div className="badge badge-outline">Ajax</div>
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">Postgres Sql</div>
                            </div>
                        </div>
                    </div>

                    {/* SI Perpus */}
                    <div className="card w-100 bg-base-100 shadow-xl" data-aos="zoom-in">
                        <figure><img className="hover:scale-125 duration-300" src="/images/portofolio/si_perpus.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                SIPERPUS
                                <div className="badge badge-primary">Personal / Latihan</div>
                            </h2>
                            <p>Sebuah Web Aplikasi Sederhana Untuk Memanajement Peminjaman Buku Serta Memantau Data Buku-buku Yang Ada Diperpustakaan</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Laravel</div>
                                <div className="badge badge-outline">Jquery</div>
                                <div className="badge badge-outline">Ajax</div>
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">MySql</div>
                            </div>
                        </div>
                    </div>

                    {/* Web Berita */}
                    <div className="card w-100 bg-base-100 shadow-xl" data-aos="zoom-in">
                        <figure><img className="hover:scale-125 duration-300" src="/images/portofolio/web_berita.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                Website Berita
                                <div className="badge badge-primary">Personal / Latihan</div>
                            </h2>
                            <p>Sebuah Web Aplikasi Sederhana Untuk Memposting Berita Ke Publik</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Laravel</div>
                                <div className="badge badge-outline">Jquery</div>
                                <div className="badge badge-outline">Ajax</div>
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">MySql</div>
                            </div>
                        </div>
                    </div>

                    {/* Si Kuangan */}
                    <div className="card w-90 bg-base-100 shadow-xl" data-aos="zoom-in">
                        <figure><img className="hover:scale-125 duration-300" src="/images/portofolio/si_keuangan.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                SI Keuangan
                                <div className="badge badge-primary">Personal / Latihan</div>
                            </h2>
                            <p>Sebuah Web Aplikasi Sederhana Untuk Mencatat keluar Masuknya Keuangan Serta Melihat Laporan Berdasarkan Range Waktu</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Laravel</div>
                                <div className="badge badge-outline">Jquery</div>
                                <div className="badge badge-outline">Ajax</div>
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">MySql</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Portofolio