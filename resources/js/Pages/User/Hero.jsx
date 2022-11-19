import React from "react";

const Hero = () => {
    return (
        <main className="hero">
            <div className="hero-container">
                <div className="w-6/12 mx-auto">
                    <h1 className="uppercase text-7xl font-bold">Mega Press</h1>
                    <p className="mt-5 mb-10">
                        Mega Press adalah Penerbit buku di Indonesia yang
                        berdiri pada Tahun 2022, yang sudah memiliki ISBN dan
                        terdaftar sebagai Anggota IKAPI.
                    </p>
                    <a
                        href="http://wa.me/6281212088836"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-orange-logo px-5 py-2 rounded-full border border-orange-logo"
                    >
                        Hubungi kami
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Hero;
