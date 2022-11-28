import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

import AdminLayout from "@/Layouts/AdminLayout";

const Index = (props) => {
    const Books = props.books;
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
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-8">
                        {Books.length > 0 ? Books.map((book) => {
                            return(
                                <Link href="#" key={book.id}>
                                    <div className="text-center hover:shadow-2xl rounded-lg border" key={book.id}>
                                        <img 
                                        className="bg-black rounded-t-lg"
                                        src="/img/buku1.png"
                                        alt={book.slug}/>
                                        <div className="p-2">
                                        <h3 className="text-xl font-semibold">{ book.judul }</h3>
                                        <h1 className="text-2xl my-2 text-orange-logo">{ book.harga }</h1>
                                        <div className="flex justify-between">
                                            <p className="text-sm px-2 rounded-full border border-green-500">{ book.penulis }</p>
                                            <p className="text-sm px-2 rounded-full border border-blue-700">{ book.kategori }</p>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }) : 
                        <div className="flex">
                            <div className="m-auto">
                                <h1 >Buku Belum Tersedia!</h1>
                            </div>
                        </div>
                        }
                    </div>
                    {/* <table className="w-full table-auto mt-5">
                        <thead>
                            <tr>
                                <th className="p-2">No.</th>
                                <th className="p-2">Gambar</th>
                                <th className="p-2">Judul</th>
                                <th className="p-2">Detail</th>
                            </tr>
                        </thead>
                        <tbody className="text-center space-y-6">
                            {Books
                                ? Books.map((book, i) => {
                                      i++;
                                      return (
                                          <tr
                                              key={book.id}
                                              className="hover:bg-white hover:cursor-pointer"
                                          >
                                              <th className="py-1">{i}</th>
                                              <td className="py-1">
                                                  {book.gambar}
                                              </td>
                                              <td className="py-1">
                                                  {book.judul}
                                              </td>
                                              <td className="py-1">
                                                  <Link
                                                      href="#"
                                                      className="text-sm py-1 px-2 rounded-lg bg-blue-700 text-white mr-2"
                                                  >
                                                      Edit
                                                  </Link>
                                                  <Link
                                                      href="#"
                                                      className="text-sm py-1 px-2 rounded-lg bg-red-700 text-white"
                                                  >
                                                      Delete
                                                  </Link>
                                              </td>
                                          </tr>
                                      );
                                  })
                                : "Tidak ada buku"}
                        </tbody>
                    </table> */}
                </div>
            </AdminLayout>
        </>
    );
};

export default Index;
