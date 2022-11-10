import React from "react";
import { Head } from "@inertiajs/inertia-react";

import Navbar from "@/Components/layouts/Navbar";
import Hero from "./Hero";
import BukuTerbaru from "./BukuTerbaru";

const User = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta
                    name="description"
                    content="Mega Press adalah Penerbit buku di Indonesia yang berdiri pada Tahun 2022, yang sudah memiliki ISBN dan terdaftar sebagai Anggota IKAPI. Bertempatkan di Sumedang Bandung Jawa Barat Indonesia"
                />
                <link rel="icon" href="/img/icons.png" />
            </Head>
            <Navbar />
            <Hero />
            <BukuTerbaru />
        </>
    );
};

export default User;
