import React from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

import AdminLayout from "@/Layouts/AdminLayout";

const Tags = (props) => {
    const Tags = props.tag;
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
                        href="/admin/tambah-tag"
                        className="py-2 px-3 font-bold border rounded-xl shadow-2xl border-orange-logo hover:bg-orange-logo hover:text-white"
                    >
                        Tambah Tag
                    </Link>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
                        {Tags.length > 0
                            ? Tags.map((tag) => {
                                  return (
                                      <Link
                                          href={route(
                                              "admin.tag.edit",
                                              tag.slug
                                          )}
                                          key={tag.id}
                                          className="p-2 shadow-lg bg-white rounded-lg flex hover:bg-orange-logo hover:text-white"
                                      >
                                          <div className="m-auto text-center">
                                              <h3 className="text-xl font-bold mb-2">
                                                  {tag.deskripsi}
                                              </h3>
                                          </div>
                                      </Link>
                                  );
                              })
                            : ""}
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default Tags;
