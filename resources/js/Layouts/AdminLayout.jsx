import React from "react";
import { Link } from "@inertiajs/inertia-react";

const AdminLayout = ({ auth, children }) => {
    return (
        <div className="flex relative">
            <div className="w-2/12 h-screen py-8 px-3 fixed left-0 top-0 bottom-0 drop-shadow-2xl">
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
                    <Link href="#">
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
            </div>
            <div className="w-10/12 min-h-screen absolute right-0 top-0 bg-slate-100">
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
