import React from "react";
import { Link } from "@inertiajs/inertia-react";

import UserLayout from "./UserLayout";
// import route from "vendor/tightenco/ziggy/src/js";

const KatalogLayout = ({ categories, children, title }) => {
    return (
        <UserLayout>
            <section className="bg-slate-100">
                <div className="container mx-auto min-h-screen text-center px-5 py-10 md:mt-20">
                    <h1 className="font-bold text-5xl uppercase mb-3">
                        {title}
                    </h1>
                    <h5 className="font-semibold text-2xl uppercase mb-10">
                        {title}
                    </h5>
                    <div className="flex">
                        <div className="w-3/12 p-5 bg-white">
                            <h3 className="font-bold text-xl text-start mb-5">
                                Filter
                            </h3>
                            <ul className="uppercase font-semibold">
                                {categories.length > 0
                                    ? categories.map((category) => {
                                          return (
                                              <Link
                                                  href={route(
                                                      "user.katalog.kategori",
                                                      category.slug
                                                  )}
                                                  key={category.id}
                                                  className="hover:underline"
                                              >
                                                  <li>{category.deskripsi}</li>
                                              </Link>
                                          );
                                      })
                                    : ""}
                            </ul>
                        </div>
                        <div className="w-9/12 pl-3">{children}</div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default KatalogLayout;
