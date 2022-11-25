import React from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

import AdminLayout from "@/Layouts/AdminLayout";

const Tags = (props) => {
    const Tags = props.tag;
    console.log(Tags);
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <AdminLayout auth={props.auth}>
                <div className="container mx-auto px-5">
                    <h2 className="text-5xl font-bold mt-10 mb-5">
                        Daftar {props.title}
                    </h2>

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
