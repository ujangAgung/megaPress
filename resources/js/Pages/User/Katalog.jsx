import React from "react";
import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

import Navbar from "@/Components/layouts/Navbar";
import Footer from "@/Components/layouts/Footer";

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
            <section className="bg-slate-100">
                <div className="container mx-auto min-h-screen text-center px-5 py-10">
                    <h1 className="font-bold text-5xl uppercase mb-3">
                        {props.title}
                    </h1>
                    <h5 className="font-semibold text-2xl uppercase mb-10">
                        {props.title}
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-lg hover:shadow-xl pb-10">
                            <img src="/img/buku1.png" alt="buku acakan" />
                            <h5 className="text-xl font-bold uppercase">
                                acakan
                            </h5>
                            <p className="font-semibold text-orange-logo mb-2">
                                Rp. 54.000,-
                            </p>
                            <Link
                                href="#"
                                className="py-1 text-sm px-2 border border-orange-logo rounded-md hover:bg-orange-logo hover:text-white hover:shadow-xl"
                            >
                                Detail
                            </Link>
                        </div>
                        <div className="rounded-lg hover:shadow-xl pb-10">
                            <img src="/img/buku1.png" alt="buku acakan" />
                            <h5 className="text-xl font-bold uppercase">
                                acakan
                            </h5>
                            <p className="font-semibold text-orange-logo mb-2">
                                Rp. 54.000,-
                            </p>
                            <Link
                                href="#"
                                className="py-1 text-sm px-2 border border-orange-logo rounded-md hover:bg-orange-logo hover:text-white hover:shadow-xl"
                            >
                                Detail
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Katalog;
