import React from "react";
import { Head } from "@inertiajs/inertia-react";

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
            {/* <Navbar /> */}
            <section className="bg-slate-100">
                <div className="">
                    <div className="container mx-auto flex min-h-screen bg-orange-300">
                        <div className="w-3/12 relative bg-violet-400">
                            <div className="sticky h-full w-full bg-black top-0 bottom-0">
                                <h1 className="text-white">acalam</h1>
                            </div>
                        </div>
                        <div className="w-9/12 h-screen bg-yellow-400 grid grid-cols-3 mt-20">
                            <div className="rounded-lg">
                                <h1>Lorem, ipsum dolor.</h1>
                            </div>
                            <div className="rounded-lg">
                                <h1>Lorem, ipsum dolor.</h1>
                            </div>
                            <div className="rounded-lg">
                                <h1>Lorem, ipsum dolor.</h1>
                            </div>
                            <div className="rounded-lg">
                                <h1>Lorem, ipsum dolor.</h1>
                            </div>
                            <div className="rounded-lg">
                                <h1>Lorem, ipsum dolor.</h1>
                            </div>
                            <div className="rounded-lg">
                                <h1>Lorem, ipsum dolor.</h1>
                            </div>
                            <div className="rounded-lg">
                                <h1>Lorem, ipsum dolor.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </>
    );
};

export default Katalog;
