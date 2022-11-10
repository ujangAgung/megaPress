import React from "react";

import Navbar from "@/Components/layouts/Navbar";

const Katalog = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta
                    name="description"
                    content="Katalog Buku Penerbit Buku Sumedang Bandung Indonesia"
                />
                <link rel="icon" href="/img/icons.png" />
            </Head>
            <Navbar />
            <section className="flex h-screen">
                <div className="m-auto">
                    <h1>Ini halaman {props.title}</h1>
                </div>
            </section>
        </>
    );
};

export default Katalog;
