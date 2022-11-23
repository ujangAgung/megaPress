import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Footer = () => {
    return (
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
                    © 2022
                    <strong className="font-bold uppercase ml-2">
                        Mega Press
                    </strong>
                    , All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;
