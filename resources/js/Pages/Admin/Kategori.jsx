import React from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

import AdminLayout from "@/Layouts/AdminLayout";

const Kategori = (props) => {
    const Categories = props.kategori;
    const { kategori } = usePage().props;

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
                <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4">
                    {/* <!-- Modal toggle --> */}
                    <button
                        className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                        dataModalToggle="small-modal"
                    >
                        Small modal
                    </button>
                </div>
                <div
                    id="small-modal"
                    tabindex="-1"
                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full"
                >
                    <div className="relative w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                    Small modal
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    dataModalToggle="small-modal"
                                >
                                    <svg
                                        ariaHidden="true"
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    With less than a month to go before the
                                    European Union enacts new consumer privacy
                                    laws for its citizens, companies around the
                                    world are updating their terms of service
                                    agreements to comply.
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    The European Union’s General Data Protection
                                    Regulation (G.D.P.R.) goes into effect on
                                    May 25 and is meant to ensure a common set
                                    of data rights in the European Union. It
                                    requires organizations to notify users as
                                    soon as possible of high-risk data breaches
                                    that could personally affect them.
                                </p>
                            </div>
                            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button
                                    dataModalToggle="small-modal"
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    I accept
                                </button>
                                <button
                                    dataModalToggle="small-modal"
                                    type="button"
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default Kategori;
