import React from "react";
import { Head, usePage, Link } from "@inertiajs/inertia-react";

import KatalogLayout from "@/Layouts/KatalogLayout";

const TampilKatalog = () => {
    const { data } = usePage().props;
    const books = data.books;
    const kategori = data.kategori;

    const nominal = books.harga;
    const harga = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(nominal);

    const pesan = `https://api.whatsapp.com/send?phone=6281995877769&text=Hai%2C+Saya+akan+membeli%3A%0D%0A%0D%0A*${books.judul}*%0A*Harga:*%20${harga}%0A*URL:*%20https%3A%2F%2Fmegapress.com%2Fkatalog%2F${books.slug}%2F%0D%0A%0D%0ATerima+kasih%21`;

    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <KatalogLayout categories={data.categories} title={data.title}>
                <div className="p-5">
                    <div className="md:flex">
                        <div className="md:w-1/2 flex">
                            <div className="m-auto">
                                <img
                                    src={`/img/book/${books.gambar}`}
                                    alt={books.slug}
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3 text-left mt-5 md:mt-0">
                            <h1 className="text-3xl font-bold mb-5">
                                {books.judul}
                            </h1>
                            <h3 className="text-2xl font-semibold text-orange-logo mb-3">
                                {harga}
                            </h3>
                            <p>
                                <span className="font-bold">Penulis : </span>
                                {books.penulis}
                            </p>
                            <ul className="space-y-1 my-5">
                                <li>Cetakan : {books.cetakan}</li>
                                <li>ISBN : {books.isbn}</li>
                                <li>Ukuran : {books.ukuran}</li>
                                <li>Halaman : {books.halaman}</li>
                                <li>Keterangan : {books.keterangan}</li>
                            </ul>
                            <p>
                                <span className="font-bold">Kategori : </span>
                                {kategori}
                            </p>
                            <p className="mb-5">
                                <span className="font-bold">Tag : </span>
                                {books.tag}
                            </p>
                            <a
                                href={pesan}
                                className="text-xl rounded-full uppercase py-1 font-bold px-4 mr-3 text-white bg-green-800 hover:cursor-pointer hover:bg-green-800"
                                target={"_blank"}
                            >
                                Beli
                            </a>
                        </div>
                    </div>
                    <div className="text-justify mt-10">
                        <p className="font-bold uppercase">Sinopsis : </p>
                        <p>{books.sinopsis}</p>
                    </div>
                </div>
            </KatalogLayout>
        </>
    );
};

export default TampilKatalog;
