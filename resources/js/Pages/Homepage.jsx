import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

import Navbar from "@/Components/layouts/Navbar";

const Homepage = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="Your page description" />
            </Head>
            <Navbar />
            <section className="min-h-screen flex">
                <div className="m-auto">
                    <h1>{props.welcome}</h1>
                </div>
            </section>
        </>
    );
};

export default Homepage;
