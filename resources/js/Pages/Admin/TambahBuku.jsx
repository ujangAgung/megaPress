import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/inertia-react";

import AdminLayout from "@/Layouts/AdminLayout";

const TambahBuku = (props) => {
    const categories = props.categories;
    const tags = props.tags
    const { data, setData, errors, post } = useForm({
        judul: "",
        gambar: null,
        harga: 0,
        penulis: "",
        cetakan: "",
        isbn: "",
        ukuran: "",
        halaman: "",
        keterangan: "",
        sinopsis: "",
        kategori: "",
        tag: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.buku.store"), {forceFormData: true});
    };

    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <AdminLayout auth={props.auth}>
                <div className="px-5 mb-10">
                    <form name="createForm" onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="container mx-auto mt-10">
                            <h1 className="text-4xl">{props.title}</h1>
                            <div className="relative z-0 my-6 w-full group">
                                <input
                                    type="text"
                                    name="judul"
                                    id="judul"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                    required
                                    value={data.judul}
                                    onChange={(e) =>setData("judul", e.target.value)}
                                />
                                <label
                                    htmlFor="judul"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Judul
                                </label>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="penulis"
                                        id="penulis"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={data.penulis}
                                        onChange={(e) => setData("penulis", e.target.value)}
                                    />
                                    <label
                                        htmlFor="penulis"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Penulis
                                    </label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input
                                        type="number"
                                        name="harga"
                                        id="harga"
                                        min="0"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={data.harga}
                                        onChange={(e) => setData("harga", e.target.value)}
                                    />
                                    
                                    <label
                                        htmlFor="harga"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Harga
                                    </label>
                                    <span className="text-xs italic text-gray-500">*diisi angka dan tidak boleh menggunakan titik.</span>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <input
                                        type="date"
                                        name="cetakan"
                                        id="cetakan"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={data.cetakan}
                                        onChange={(e) => setData("cetakan", e.target.value)}
                                    />
                                    <label
                                        htmlFor="cetakan"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Cetakan
                                    </label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="isbn"
                                        id="isbn"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={data.isbn}
                                        onChange={(e) => setData("isbn", e.target.value)}
                                    />
                                    
                                    <label
                                        htmlFor="isbn"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        ISBN
                                    </label>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="ukuran"
                                        id="ukuran"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={data.ukuran}
                                        onChange={(e) => setData("ukuran", e.target.value)}
                                    />
                                    <label
                                        htmlFor="ukuran"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Ukuran
                                    </label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="halaman"
                                        id="halaman"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={data.halaman}
                                        onChange={(e) => setData("halaman", e.target.value)}
                                    />
                                    
                                    <label
                                        htmlFor="halaman"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Halaman
                                    </label>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="kategori" className="sr-only">Underline select</label>
                                    <select id="kategori" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                    value={data.kategori}
                                    onChange={(e) => setData("kategori", e.target.value)}
                                    >
                                        <option value={""}>Pilih Kategori</option>
                                        {categories.length > 0 ? categories.map((category) => {
                                            return <option key={category.id} value={category.deskripsi}>{category.deskripsi}</option>
                                        }) : <option>--Belum ada kategori--</option>}
                                    </select>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="tag" className="sr-only">Underline select</label>
                                    <select id="tag" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                    value={data.tag}
                                    onChange={(e) => setData("tag", e.target.value)}
                                    >
                                        <option value={""}>Pilih Tag</option>
                                        {tags.length > 0 ? tags.map((tag) => {
                                            return <option key={tag.id} value={tag.deskripsi}>{tag.deskripsi}</option>
                                        }) : <option>--Belum ada Tag--</option>}
                                    </select>
                                </div>
                            </div>
                            <div className="relative z-0 my-6 w-full group">
                                <input
                                    type="text"
                                    name="keterangan"
                                    id="keterangan"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                    required
                                    value={data.keterangan}
                                    onChange={(e) =>setData("keterangan", e.target.value)}
                                />
                                <label
                                    htmlFor="keterangan"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Keterangan
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                            <input
                                type="file"
                                name="gambar"
                                id="gambar"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                                // value={data.gambar}
                                onChange={(e) => setData("gambar", e.target.files[0])}
                            />
                            <label
                                htmlFor="gambar"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Gambar
                            </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <textarea
                                name="sinopsis"
                                id="sinopsis"
                                cols="10"
                                rows="5"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                value={data.sinopsis}
                                onChange={(e) => setData("sinopsis", e.target.value)}
                            ></textarea>
                            <label
                                htmlFor="sinopsis"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Sinopsis
                            </label>
                        </div>
                            <button
                                type="submit"
                                className="text-white bg-orange-logo hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
};

export default TambahBuku;
