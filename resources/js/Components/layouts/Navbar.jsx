import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Navbar = () => {
    return (
        <>
            <nav className="fixed bg-white shadow-lg top-0 w-full z-50">
                <div className="container mx-auto flex p-4">
                    <div className="w-7/12">
                        <Link href="/">
                            <img
                                src="/img/logo.jpg"
                                alt="Nusa Agency"
                                className="w-11"
                            />
                        </Link>
                    </div>
                    <div className="w-5/12 flex items-center justify-end">
                        <ul className="flex space-x-10">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:underline hover:decoration-biru-logo font-semibold uppercase"
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/katalog"
                                    className="hover:underline hover:decoration-biru-logo font-semibold uppercase"
                                >
                                    Katalog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
