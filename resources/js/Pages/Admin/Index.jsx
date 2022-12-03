import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

import AdminLayout from "@/Layouts/AdminLayout";

const Paginator = ({ links, meta }) => {
    console.log(links);
    const totalBook = meta.total;
    const from = meta.from;
    const to = meta.to;
    // const links = meta.links;

    return (
        <div className="flex flex-col items-center">
            {/* <!-- Help text --> */}
            <span className="text-sm text-gray-700 ">
                Menampilkan
                <span className="font-semibold text-gray-900 mx-1">{from}</span>
                sampai
                <span className="font-semibold text-gray-900 mx-1">{to}</span>
                dari
                <span className="font-semibold text-gray-900 mx-1">
                    {totalBook}
                </span>
                buku.
            </span>
            {/* <!-- Buttons --> */}
            <div className="inline-flex mt-2 xs:mt-0">
                {links.prev != null && (
                    <Link
                        href={links.prev}
                        className="px-4 py-2 text-sm font-medium text-white bg-orange-logo rounded-l hover:bg-orange-700"
                    >
                        &laquo;
                    </Link>
                )}

                {links.next != null && (
                    <Link
                        href={links.next}
                        className="px-4 py-2 text-sm font-medium text-white bg-orange-logo border-0 border-l border-orange-500 rounded-r hover:bg-orange-700 "
                    >
                        &raquo;
                    </Link>
                )}
            </div>
        </div>
    );
};

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
