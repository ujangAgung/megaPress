import React from "react";
import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

import KatalogLayout from "@/Layouts/KatalogLayout";

const Katalog = (props) => {
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
            <KatalogLayout categories={categories} title={props.title}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                    {books.length > 0 ? (
                        books.map((book) => {
                            const judul = book.judul;
                            const res =
                                judul.length > 20
                                    ? `${judul.substring(0, 30)}...`
                                    : judul;

                            const nominal = book.harga;
                            const harga = new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            }).format(nominal);

                            return (
                                <Link
                                    href={route("user.katalog.show", book.slug)}
                                    key={book.id}
                                    className="rounded-lg hover:shadow-xl"
                                >
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <img
                                                src={`/img/book/${book.gambar}`}
                                                alt={book.slug}
                                                className="max-h-28"
                                            />
                                        </div>
                                        <div className="p-2">
                                            <h6 className="text-sm font-extralight my-1">
                                                {book.kategori}
                                            </h6>
                                            <hr />
                                            <h5 className="text-md font-bold my-1">
                                                {res}
                                            </h5>
                                            <p className="font-light text-orange-logo mb-2">
                                                {harga}
                                            </p>
                                        </div>
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
            </KatalogLayout>
        </>
    );
};

export default Katalog;
