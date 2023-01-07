import { Link } from "@inertiajs/inertia-react";

import Paginator from "@/Components/Paginator";

const BooksLayout = ({ books, links, meta }) => {
    // console.log(asset());
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                {books.length > 0 ? (
                    books.map((book) => {
                        const judul = book.judul;
                        const res =
                            judul.length > 20
                                ? `${judul.substring(0, 17)}...`
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
                                className="rounded-lg transition-all hover:-translate-y-1 active:translate-y-1 hover:shadow-xl bg-white"
                            >
                                <div>
                                    <div className="flex justify-center items-center">
                                        <img
                                            // src={`/img/book/${book.gambar}`}
                                            src={`/storage/${book.gambar}`}
                                            alt={book.slug}
                                            className="max-h-28"
                                        />
                                    </div>
                                    <div className="p-2">
                                        {/* <h6 className="text-sm font-extralight my-1">
                                                {book.categories_id}
                                            </h6> */}
                                        <hr />
                                        <h5 className="text-md my-1">{res}</h5>
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
            <div className="flex justify-center items-center my-10">
                <Paginator links={links} meta={meta} />
            </div>
        </>
    );
};

export default BooksLayout;
