import React from "react";

const BukuTerbaru = (props) => {
    const books = props.books;
    return (
        <section className="bg-slate-200 py-10">
            <div className="container mx-auto">
                <h2 className="uppercase text-5xl text-center font-bold mb-20">
                    buku terbaru
                </h2>
                {books.length > 0 ? (
                    books.map((book, i) => {
                        const res =
                            book.sinopsis.length > 250
                                ? `${book.sinopsis.substring(0, 300)}...`
                                : book.sinopsis;
                        return (
                            <div
                                className={
                                    i % 2 == 0
                                        ? "md:flex md:flex-row-reverse mb-5 md:mb-12"
                                        : "md:flex mb-5 md:mb-12"
                                }
                                key={book.id}
                            >
                                <div className="w-full md:w-1/3 flex">
                                    <div className="m-auto">
                                        <img
                                            src={`/storage/${book.gambar}`}
                                            alt={book.slug}
                                        />
                                    </div>
                                </div>
                                <div className="p-6 md:w-2/3 flex">
                                    <div className="m-auto text-center">
                                        <h4 className="text-3xl font-bold mb-10">
                                            {book.judul}
                                        </h4>
                                        <p className="font-extralight mb-5 text-justify">
                                            {res}
                                        </p>
                                        <a
                                            href={route(
                                                "user.katalog.show",
                                                book.slug
                                            )}
                                            className="py-2 px-4 font-semibold rounded-md border border-orange-500 hover:bg-orange-500 hover:text-white"
                                        >
                                            Lihat
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="flex">
                        <div className="m-auto">
                            <p>Buku Belum Tersedia</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BukuTerbaru;
