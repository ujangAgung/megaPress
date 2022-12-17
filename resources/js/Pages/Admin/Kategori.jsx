import React from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";

import AdminLayout from "@/Layouts/AdminLayout";
import Paginator from "@/Components/Paginator";

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

const Kategori = () => {
    const { auth, title, kategori, flash } = usePage().props;
    const links = kategori.links;
    const meta = kategori.meta;

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
                <title>{title}</title>
            </Head>
            <AdminLayout auth={auth} title={title}>
                <div className="container mx-auto px-5 pt-5">
                    <Link
                        href="/admin/tambah-kategori"
                        className="py-2 px-3 font-bold border rounded-xl shadow-2xl border-orange-logo hover:bg-orange-logo hover:text-white"
                    >
                        Tambah Kategori
                    </Link>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
                        {auth.role != "admin" ? (
                            <KategoriMaster categories={kategori.data} />
                        ) : (
                            <KategoriAdmin categories={kategori.data} />
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

export default Kategori;
