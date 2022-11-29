import React from "react";
import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

import Navbar from "@/Components/layouts/Navbar";
import Footer from "@/Components/layouts/Footer";

const Katalog = (props) => {
    // console.log(props.kategori);
    const books = props.books;
    const categories = props.categories;

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
                <div className="container mx-auto min-h-screen text-center px-5 py-10 md:mt-20">
                    <h1 className="font-bold text-5xl uppercase mb-3">
                        {props.title}
                    </h1>
                    <h5 className="font-semibold text-2xl uppercase mb-10">
                        {props.title}
                    </h5>
                    <div className="flex">
                        <div className="w-3/12 p-5 bg-yellow-300">
                            <h3 className="font-bold text-xl text-start mb-5">Filter</h3>
                            <ul className="uppercase font-semibold">
                                {categories.length > 0 ? (
                                    categories.map((category) => {
                                        return(
                                            <Link href="#" key={category.id} className="hover:underline">
                                            <li>{category.deskripsi}</li>
                                            </Link>
                                        )
                                    })
                                ) : ""}
                            </ul>
                        </div>
                        <div className="w-9/12 bg-violet-500"> 
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
                        {books.length > 0 ? (
                            books.map((book) => {
                                return (
                                    <Link
                                        href="#"
                                        key={book.id}
                                        className="rounded-lg hover:shadow-xl"
                                    >
                                        <div className="p-2">
                                            <img
                                                src={`/img/book/${book.gambar}`}
                                                alt={book.slug}
                                            />
                                            <h5 className="text-md font-semibold uppercase">
                                                {book.judul}
                                            </h5>
                                            <p className="font-bold text-orange-logo mb-2">
                                                Rp. {book.harga},-
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })
                        ) : (
                            <div className="m-auto">
                                <p>Buku Belum Tersedia</p>
                            </div>
                        )}
                    </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Katalog;
