import { Link, Head } from "@inertiajs/inertia-react";

import AdminLayout from "@/Layouts/AdminLayout";
import Paginator from "@/Components/Paginator";

const Index = (props) => {
    const Books = props.books.data;
    const meta = props.books.meta;
    const links = props.books.links;
    const flash = props.flash;

    flash.add &&
        swal({
            title: "Berhasil!",
            text: flash.add,
            icon: "success",
            button: "Wokee",
        });
    flash.delete &&
        swal({
            title: "Dihapus!",
            text: flash.delete,
            icon: "warning",
            button: "Wokee",
        });
    flash.edit &&
        swal({
            title: "Disunting!",
            text: flash.edit,
            icon: "info",
            button: "Wokee",
        });

    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <AdminLayout auth={props.auth} title={props.title}>
                <div className="container mx-auto px-5 pt-5">
                    <Link
                        href="/admin/tambah-buku"
                        className="py-2 px-3 font-bold border rounded-xl shadow-2xl border-orange-logo hover:bg-orange-logo hover:text-white"
                    >
                        Tambah Buku
                    </Link>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-8">
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
                                                src={`/storage/${book.gambar}`}
                                                alt={book.slug}
                                            />
                                            <div className="p-2">
                                                <h3 className="text-sm font-semibold">
                                                    {res}
                                                </h3>
                                                <h1 className=" text-sm md:text-lg lg:text-base my-2 text-orange-logo">
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
