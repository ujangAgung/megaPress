import { useState } from "react";
import { Link, useForm } from "@inertiajs/inertia-react";

import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

import UserLayout from "./UserLayout";

const KatalogLayout = ({ categories, children, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData, errors, post } = useForm({
        cari: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.katalog.cari", data));
    };

    return (
        <UserLayout>
            <section className="bg-slate-100">
                <div className="container mx-auto min-h-screen text-center px-5 pt-4 pb-10 md:mt-20">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h5 className="text-3xl font-bold text-start uppercase hidden md:block">
                                {title}
                            </h5>
                            <h1 className="md:hidden">
                                <AiOutlineMenu
                                    className="w-10 h-10 hover:cursor-pointer"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                />
                            </h1>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label
                                    htmlFor="default-search"
                                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                                >
                                    Cari
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        name="cari"
                                        id="default-search"
                                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Cari judul"
                                        value={data.cari}
                                        onChange={(e) =>
                                            setData("cari", e.target.value)
                                        }
                                    />
                                    <button
                                        type="submit"
                                        className="text-white absolute right-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
                                    >
                                        Cari
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="md:flex">
                        <div
                            className={
                                isOpen == true
                                    ? "fixed top-0 left-0 z-50 h-screen bg-white w-3/5 py-10 md:py-0 px-3"
                                    : "md:w-3/12 md:p-5 invisible md:visible"
                            }
                        >
                            <div className="flex justify-between items-center mb-5">
                                <h3 className="font-bold text-xl text-start">
                                    Filter
                                </h3>
                                <AiOutlineCloseCircle
                                    className="h-8 w-8 hover:cursor-pointer md:hidden"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                />
                            </div>
                            <hr />
                            <ul className="uppercase font-semibold">
                                {categories.length > 0
                                    ? categories.map((category) => {
                                          return (
                                              <>
                                                  <Link
                                                      href={route(
                                                          "user.katalog.kategori",
                                                          category.slug
                                                      )}
                                                      key={category.id}
                                                      className="text-start w-full"
                                                  >
                                                      <li className="py-2 hover:bg-orange-logo hover:text-white rounded-lg hover:pl-3">
                                                          {category.deskripsi}
                                                      </li>
                                                      <hr />
                                                  </Link>
                                              </>
                                          );
                                      })
                                    : ""}
                            </ul>
                        </div>
                        <div className="-mt-24 md:-mt-0 md:w-9/12 md:pl-3">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default KatalogLayout;
