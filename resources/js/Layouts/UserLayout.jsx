import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { RiContactsBook2Fill, RiGitRepositoryFill } from "react-icons/ri";

const UserLayout = ({ children }) => {
    const Route = window.location.href.split("/");
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/img/icons.png" />
            </Head>
            <nav className="fixed bg-white shadow-lg top-0 w-full z-50 invisible md:visible">
                <div className="container mx-auto flex p-4">
                    <div className="w-7/12">
                        <Link href="/">
                            <img
                                src="/img/logo.png"
                                alt="Nusa Agency"
                                className="w-10"
                            />
                        </Link>
                    </div>
                    <div className="w-5/12 flex items-center justify-end">
                        <ul className="flex space-x-10">
                            <li>
                                <Link
                                    href="/"
                                    className={`navbar ${
                                        Route[3] == "" && "navbar-active"
                                    }`}
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("user.katalog")}
                                    className={`navbar ${
                                        Route[3] == "product" && "navbar-active"
                                    }`}
                                >
                                    Katalog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kontak"
                                    className={`navbar ${
                                        Route[3] == "kontak" && "navbar-active"
                                    }`}
                                >
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <nav className="fixed bg-white shadow-lg bottom-0 w-full z-50 p-3 rounded-t-2xl md:invisible">
                <div className="container mx-auto">
                    <ul className="flex justify-around items-center">
                        <li>
                            <Link href="/">
                                <img
                                    src="/img/logo.png"
                                    alt="Mega Press"
                                    className="w-11"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("user.katalog")}
                                className={`navbar font-bold ${
                                    Route[3] == "product" && "text-orange-700"
                                }`}
                            >
                                <RiGitRepositoryFill className="mx-auto w-6 h-6" />
                                <span className="text-xs">Katalog</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/kontak"
                                className={`navbar ${
                                    Route[3] == "kontak" && "text-orange-700"
                                }`}
                            >
                                <RiContactsBook2Fill className="mx-auto w-6 h-6" />
                                <span className="text-xs">Kontak</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* isi content */}
            <div>{children}</div>

            {/* Footer */}
            <section className="p-5 bg-slate-100 mb-16 md:mb-0">
                <div className="text-center">
                    <Link href="/">
                        <img
                            src="/img/logo.png"
                            alt="Logo"
                            className="w-11 mb-2 md:w-16 mx-auto"
                        />
                    </Link>
                    <p className="font-light">
                        © 2023
                        <strong className="font-bold uppercase ml-2">
                            Mega Press
                        </strong>
                        , All rights reserved.
                    </p>
                    <p className="text-sm">
                        Dibuat dan diterbitkan oleh{" "}
                        <a
                            href="https://nusaagency.com/"
                            target={"_blank"}
                            className="italic text-blue-600 hover:underline"
                        >
                            Nusa Agency
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
};

export default UserLayout;
