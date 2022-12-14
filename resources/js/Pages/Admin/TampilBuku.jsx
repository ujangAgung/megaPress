import React from "react";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

import AdminLayout from "@/Layouts/AdminLayout";

const TampilBuku = () => {
    const { data } = usePage().props;
    const books = data.books;
    const kategori = data.books.categories.deskripsi;

    const destroy = () => {
        if (confirm("Yakin ingin menghapus buku ini?")) {
            Inertia.delete(route("admin.buku.destroy", books.id));
        }
    };

    const nominal = books.harga;
    const harga = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(nominal);

    return (
        <>
            <Head>
                <title>{books.judul}</title>
            </Head>
            <AdminLayout auth={data.auth} title={data.title}>
                <div className="p-5">
                    <div className="flex">
                        <div className="w-1/2 flex">
                            <div className="m-auto">
                                <img
                                    src={`/img/book/${books.gambar}`}
                                    alt={books.slug}
                                />
                            </div>
                        </div>
                        <div className="w-1/2 px-3">
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
                            <p>
                                <span className="font-bold">Tag : </span>
                                {books.tag}
                            </p>
                            {data.auth.role != "admin" && (
                                <ul className="flex my-5">
                                    <Link
                                        href={route(
                                            "admin.buku.edit",
                                            books.slug
                                        )}
                                        className="text-xl rounded-full uppercase py-1 font-bold px-4 mr-3 text-white bg-blue-600 hover:cursor-pointer hover:bg-blue-900"
                                    >
                                        <li>Edit</li>
                                    </Link>
                                    <li className="">
                                        <button
                                            onClick={destroy}
                                            type="button"
                                            className="text-xl rounded-full uppercase py-1 font-bold px-4 mr-3 text-white bg-red-600 hover:cursor-pointer hover:bg-red-900"
                                        >
                                            hapus
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="text-justify">
                        <p className="font-bold uppercase">Sinopsis : </p>
                        <p>{books.sinopsis}</p>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default TampilBuku;
