import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";

import { AiOutlineAlignLeft, AiOutlineCloseCircle } from "react-icons/ai";

const AdminLayout = ({ auth, children, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
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
                    <h1 className="uppercase text-2xl font-bold text-center mb-5">
                        Mega Press
                    </h1>
                </Link>
                <hr />
                <p className="my-2 rounded-md hover:bg-orange-logo hover:shadow-xl hover:text-white px-3 py-2 font-bold uppercase">
                    {auth.name}
                </p>
                <hr />
                <ul>
                    <Link href="/admin">
                        <li className="my-2 rounded-md hover:bg-orange-logo hover:shadow-xl hover:text-white px-3 py-2">
                            Buku
                        </li>
                    </Link>
                    <Link href="/admin/kategori">
                        <li className="my-2 rounded-md hover:bg-orange-logo hover:shadow-xl hover:text-white px-3 py-2">
                            Kategori
                        </li>
                    </Link>
                    <Link href="/admin/tag">
                        <li className="my-2 rounded-md hover:bg-orange-logo hover:shadow-xl hover:text-white px-3 py-2">
                            Tag
                        </li>
                    </Link>
                </ul>
                <hr />
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="my-2 w-full rounded-md bg-orange-logo text-white px-3 py-2"
                >
                    Logout
                </Link>
                <AiOutlineCloseCircle
                    className="w-7 h-7 mt-5 mx-auto md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            <div className="md:w-10/12 w-full min-h-screen absolute right-0 top-0 bg-slate-100">
                <div className="flex justify-between px-5">
                    <AiOutlineAlignLeft
                        className="h-7 w-7 hover:cursor-pointer mt-5 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <h3 className="text-4xl font-bold my-5">{title}</h3>
                </div>
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
