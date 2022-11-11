import React from "react";
import { Head } from "@inertiajs/inertia-react";

import Navbar from "@/Components/layouts/Navbar";
import Hero from "./Hero";
import BukuTerbaru from "./BukuTerbaru";

const User = (props) => {
    return (
        <>
            <Head>
                <title>props.title</title>
                <meta name="description" content={props.description} />
                <link rel="icon" href="/img/icons.png" />
            </Head>
            <Navbar />
            <Hero />
            <BukuTerbaru books={props.books} />
        </>
    );
};

export default User;
