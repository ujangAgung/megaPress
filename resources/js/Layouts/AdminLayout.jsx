import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Admin = (props, children) => {
    return (
        <div className="flex relative">
            <div className="w-2/12 h-screen py-8 px-3 fixed left-0 top-0 bottom-0 bg-violet-300">
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
                <p className="my-2 rounded-md hover:bg-slate-200 px-3 py-2 font-bold">
                    {User.name}
                </p>
                <hr />
                <ul>
                    <Link href="#">
                        <li className="my-2 rounded-md hover:bg-slate-200 px-3 py-2">
                            Buku
                        </li>
                    </Link>
                </ul>
                <hr />
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="my-2 w-full rounded-md hover:bg-orange-logo hover:text-white px-3 py-2 border border-orange-logo"
                >
                    Logout
                </Link>
            </div>
            <div className="w-10/12 min-h-screen absolute right-0 top-0 bg-yellow-300">
                {children}
            </div>
        </div>
    );
};

export default Admin;
