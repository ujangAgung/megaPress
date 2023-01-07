import { useState } from "react";
import { Head, Link } from "@inertiajs/inertia-react";

import { AiOutlineMenu, AiOutlineCloseCircle, AiFillTag } from "react-icons/ai";
import { SiBookstack } from "react-icons/si";
import { BiCategory, BiUser } from "react-icons/bi";

const AdminLayout = ({ auth, children, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/img/icons.png" />
            </Head>
            <div className="md:flex relative">
                <div
                    className={
                        isOpen == true
                            ? "fixed top-0 left-0 min-h-screen z-50 bg-white w-1/2 p-5 md:hidden"
                            : "md:w-2/12 min-h-screen py-8 px-3 fixed left-0 top-0 drop-shadow-2xl"
                    }
                >
                    <Link href="/">
                        <img
                            src="/img/icons.png"
                            alt="Logo Mega Press"
                            className="mx-auto"
                        />
                        <h3 className="uppercase text-lg font-bold text-center mb-5">
                            Mega Press
                        </h3>
                    </Link>
                    <hr />
                    <p className="p-2 my-2 flex items-center font-semibold justify-center">
                        {/* <BiUser /> */}
                        <span className="ml-2">{auth.name}</span>
                    </p>
                    <hr />
                    <ul>
                        <Link href="/admin">
                            <li
                                className={`my-2 rounded-md px-3 py-2 flex items-center ${
                                    route().current() == "admin.buku"
                                        ? "bg-orange-logo hover:shadow-xl text-white"
                                        : "hover:bg-orange-logo hover:shadow-xl hover:text-white"
                                }`}
                            >
                                <SiBookstack />
                                <span className="ml-2">Buku</span>
                            </li>
                        </Link>
                        <Link href="/admin/kategori">
                            <li
                                className={`my-2 rounded-md px-3 py-2 flex items-center ${
                                    route().current() == "admin.kategori"
                                        ? "bg-orange-logo hover:shadow-xl text-white"
                                        : "hover:bg-orange-logo hover:shadow-xl hover:text-white"
                                }`}
                            >
                                <BiCategory />
                                <span className="ml-2">Kategori</span>
                            </li>
                        </Link>
                        <Link href="/admin/tag">
                            <li
                                className={`my-2 rounded-md px-3 py-2 flex items-center ${
                                    route().current() == "admin.tag"
                                        ? "bg-orange-logo hover:shadow-xl text-white"
                                        : "hover:bg-orange-logo hover:shadow-xl hover:text-white"
                                }`}
                            >
                                <AiFillTag />
                                <span className="ml-2">Tag</span>
                            </li>
                        </Link>
                    </ul>
                    <hr />
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="my-2 w-full rounded-md bg-red-600 text-white px-3 py-2"
                    >
                        Logout
                    </Link>
                    <AiOutlineCloseCircle
                        className="w-7 h-7 mt-5 mx-auto md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
                <div className="md:w-10/12 w-full min-h-screen absolute right-0 top-0 bg-slate-100">
                    <div className="flex justify-between items-center px-5 mt-5">
                        <AiOutlineMenu
                            className="h-7 w-7 hover:cursor-pointer md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        />
                        <h3 className="text-4xl font-bold">{title}</h3>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
