import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

const Homepage = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="Your page description" />
            </Head>
            <section className="min-h-screen flex">
                <div className="m-auto">
                    <h1>{props.welcome}</h1>
                </div>
            </section>
        </>
    );
};

export default Homepage;
