import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

import AdminLayout from "@/Layouts/AdminLayout";
import Paginator from "@/Components/Paginator";

const Index = (props) => {
    console.log(props.links);
    const Books = props.books.data;
    const meta = props.books.meta;
    const links = props.books.links;
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <AdminLayout auth={props.auth}>
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold mt-10 mb-5">
                        Daftar Buku
                    </h2>

                    <Link
                        href="/admin/tambah-buku"
                        className="py-2 px-3 font-bold border rounded-xl shadow-2xl border-orange-logo hover:bg-orange-logo hover:text-white"
                    >
                        Tambah Buku
                    </Link>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-8">
                        {Books.length > 0 ? (
                            Books.map((book) => {
                                const judul = book.judul;
                                const res =
                                    judul.length > 20
                                        ? `${judul.substring(0, 20)}...`
                                        : judul;
                                const nominal = book.harga;
                                const harga = new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(nominal);

                                return (
                                    <Link
                                        href={route(
                                            "admin.buku.show",
                                            book.slug
                                        )}
                                        key={book.id}
                                        className="text-center hover:shadow-2xl rounded-lg border"
                                    >
                                        <div>
                                            <img
                                                className="bg-black rounded-t-lg"
                                                src={`/img/book/${book.gambar}`}
                                                alt={book.slug}
                                            />
                                            <div className="p-2">
                                                <h3 className="text-sm font-semibold">
                                                    {res}
                                                </h3>
                                                <h1 className="text-lg my-2 text-orange-logo">
                                                    {harga}
                                                </h1>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })
                        ) : (
                            <div className="flex">
                                <div className="m-auto">
                                    <h1>Buku Belum Tersedia!</h1>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-center items-center my-10">
                        <Paginator links={links} meta={meta} />
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default Index;
