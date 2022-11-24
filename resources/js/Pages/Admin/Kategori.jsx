import React from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

import AdminLayout from "@/Layouts/AdminLayout";

const Kategori = (props) => {
    const Categories = props.kategori;
    const { kategori } = usePage().props;
    // console.log(kategori);
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <AdminLayout auth={props.auth}>
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold mt-10 mb-5">
                        Daftar Kategori
                    </h2>

                    <Link
                        href="/admin/tambah-kategori"
                        className="py-2 px-3 font-bold border rounded-xl shadow-2xl border-orange-logo hover:bg-orange-logo hover:text-white"
                    >
                        Tambah Kategori
                    </Link>
                    <table className="w-full table-auto mt-5">
                        <thead>
                            <tr>
                                <th className="p-2">No.</th>
                                <th className="p-2">Deskripsi</th>
                                <th className="p-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-center space-y-6">
                            {Categories.length > 0
                                ? Categories.map((category, i) => {
                                      i++;
                                      return (
                                          <tr
                                              key={category.id}
                                              className="hover:bg-white hover:cursor-pointer"
                                          >
                                              <th className="py-1">{i}</th>
                                              <td className="py-1">
                                                  {category.deskripsi}
                                              </td>
                                              <td className="py-1">
                                                  <Link
                                                      href={route(
                                                          "admin.kategori.edit",
                                                          category.slug
                                                      )}
                                                      className="text-sm py-1 px-2 rounded-lg bg-blue-700 text-white mr-2"
                                                  >
                                                      Detail
                                                  </Link>
                                              </td>
                                          </tr>
                                      );
                                  })
                                : "Belum ada Kategori"}
                        </tbody>
                    </table>
                </div>
            </AdminLayout>
        </>
    );
};

export default Kategori;
