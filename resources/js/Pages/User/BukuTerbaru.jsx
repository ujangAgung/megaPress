import React from "react";

const BukuTerbaru = (props) => {
    const books = props.books;
    return (
        <section className="bg-slate-200 py-10">
            <div className="container mx-auto">
                <h2 className="uppercase text-5xl text-center font-bold mb-20">
                    buku terbaru
                </h2>
                {books ? (
                    books.map((book, i) => {
                        const pesan = `https://web.whatsapp.com/send?phone=6281995877769&text=Hai%2C+Saya+akan+membeli%3A%0D%0A%0D%0A*${book.judul}*%0A*Harga:*%20${book.harga}%0A*URL:*%20https%3A%2F%2Fmegapress.com%2Fproduk%2F${book.slug}%2F%0D%0A%0D%0ATerima+kasih%21`;
                        return (
                            <div
                                className={
                                    i % 2 == 0
                                        ? "flex flex-row-reverse mb-12"
                                        : "flex mb-12"
                                }
                                key={book.id}
                            >
                                <div className="w-1/2 flex">
                                    <div className="m-auto">
                                        <h4 className="text-3xl font-bold mb-10">
                                            {book.judul}
                                        </h4>
                                        <p className="font-extralight mb-5">
                                            {book.sinopsis}
                                        </p>
                                        <a
                                            href={pesan}
                                            className="py-2 px-4 font-semibold rounded-md border border-orange-500 hover:bg-orange-500 hover:text-white"
                                            target="_blank"
                                        >
                                            Lihat
                                        </a>
                                    </div>
                                </div>
                                <div className="w-1/2 flex">
                                    <div className="m-auto">
                                        <img
                                            src="/img/buku1.png"
                                            alt="Buku Pertama"
                                        />
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
