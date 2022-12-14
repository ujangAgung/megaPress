import React from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";

import AdminLayout from "@/Layouts/AdminLayout";

const KategoriMaster = ({ categories }) => {
    return categories.length > 0
        ? categories.map((category) => {
              return (
                  <Link
                      href={route("admin.kategori.edit", category.slug)}
                      key={category.id}
                      className="p-2 shadow-lg bg-white rounded-lg flex hover:bg-orange-logo hover:text-white"
                  >
                      <div className="m-auto text-center">
                          <h3 className="text-xl font-bold mb-2">
                              {category.deskripsi}
                          </h3>
                      </div>
                  </Link>
              );
          })
        : "";
};

const KategoriAdmin = ({ categories }) => {
    return categories.length > 0
        ? categories.map((category) => {
              return (
                  <div
                      className="p-2 shadow-lg bg-white rounded-lg flex hover:bg-orange-logo hover:text-white"
                      key={category.id}
                  >
                      <div className="m-auto text-center">
                          <h3 className="text-xl font-bold mb-2">
                              {category.deskripsi}
                          </h3>
                      </div>
                  </div>
              );
          })
        : "";
};

const Kategori = (props) => {
    const Categories = props.kategori;
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <AdminLayout auth={props.auth} title={props.title}>
                <div className="container mx-auto px-5">
                    <Link
                        href="/admin/tambah-kategori"
                        className="py-2 px-3 font-bold border rounded-xl shadow-2xl border-orange-logo hover:bg-orange-logo hover:text-white"
                    >
                        Tambah Kategori
                    </Link>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
                        {props.auth.role != "admin" ? (
                            <KategoriMaster categories={Categories} />
                        ) : (
                            <KategoriAdmin categories={Categories} />
                        )}
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default Kategori;
