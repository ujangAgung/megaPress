import React from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

import AdminLayout from "@/Layouts/AdminLayout";

const Kategori = (props) => {
    const Categories = props.kategori;
<<<<<<< HEAD
    const { kategori } = usePage().props;
    console.log(kategori);

    const deletePost = async (id) => {
        Inertia.delete(`/admin/kategori/${id}`);
    };

=======
>>>>>>> 83d20da806e0a0d901b9f4c55f5b69a193a60cb6
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <AdminLayout auth={props.auth}>
                <div className="container mx-auto px-5">
                    <h2 className="text-5xl font-bold mt-10 mb-5">
                        Daftar Kategori
                    </h2>

                    <Link
                        href="/admin/tambah-kategori"
                        className="py-2 px-3 font-bold border rounded-xl shadow-2xl border-orange-logo hover:bg-orange-logo hover:text-white"
                    >
                        Tambah Kategori
                    </Link>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
                        {Categories.length > 0
                            ? Categories.map((category) => {
                                  return (
                                      <Link
                                          href={route(
                                              "admin.kategori.edit",
                                              category.slug
                                          )}
                                          key={category.id}
                                          className="p-2 shadow-lg bg-white rounded-lg flex hover:bg-orange-logo hover:text-white"
                                      >
                                          <div className="m-auto text-center">
                                              <h3 className="text-xl font-bold mb-2">
                                                  {category.deskripsi}
<<<<<<< HEAD
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
                                                  <button
                                                      onClick={() =>
                                                          deletePost(
                                                              category.id
                                                          )
                                                      }
                                                      className="text-sm py-1 px-2 rounded-lg bg-red-700 text-white mr-2"
                                                  >
                                                      DELETE
                                                  </button>
                                              </td>
                                          </tr>
                                      );
                                  })
                                : "Belum ada Kategori"}
                        </tbody>
                    </table>
=======
                                              </h3>
                                          </div>
                                      </Link>
                                  );
                              })
                            : ""}
                    </div>
>>>>>>> 83d20da806e0a0d901b9f4c55f5b69a193a60cb6
                </div>
            </AdminLayout>
        </>
    );
};

export default Kategori;
