import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";

import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillPhone,
    AiFillMail,
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillEnvironment,
} from "react-icons/ai";

import UserLayout from "@/Layouts/UserLayout";

const Kontak = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta
                    name="description"
                    content="Katalog Buku Penerbit Buku Sumedang Bandung Indonesia"
                />
                <link rel="icon" href="/img/icons.png" />
            </Head>
            <UserLayout>
                <section className="bg-slate-100 pt-5 md:pt-24">
                    <div className="container mx-auto p-5">
                        <h1 className="uppercase text-center text-5xl mb-3 font-bold">
                            Kontak Kami
                        </h1>
                        <div className="text-center px-10 mb-10">
                            <p>
                                Jika anda ingin menerbitkan buku boleh kontak
                                kami dibawah.
                            </p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.53811767787317!2d107.75990210250374!3d-6.937141219665867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c3cb63350d0b%3A0x24b4d8a390ad17e8!2sPT%20Arka%20Mega%20Nusantara!5e0!3m2!1sid!2sid!4v1668414843934!5m2!1sid!2sid"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-96 rounded-md shadow-lg mb-7"
                        ></iframe>
                        <div>
                            <ul className="grid gap-5 grid-cols-1 md:grid-cols-4 md:grid-rows-2">
                                <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-orange-logo hover:cursor-pointer md:row-span-1 md:col-span-4">
                                    <div className="m-auto group-hover:text-white text-center">
                                        <AiFillEnvironment className="w-16 h-16 mx-auto mb-2 " />
                                        <p>
                                            Jl. Raya Jatinangor, No 21 A,
                                            Cibeusi, Jatinangor, Sumedang
                                        </p>
                                    </div>
                                </li>
                                <a
                                    href={
                                        "https://www.instagram.com/megapressofficial/"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-orange-logo hover:cursor-pointer">
                                        <div className="m-auto group-hover:text-white">
                                            <AiFillInstagram className="w-16 h-16 mx-auto mb-2 " />
                                            <p>megapressofficial</p>
                                        </div>
                                    </li>
                                </a>
                                <a
                                    href={"tel:+6281212088836"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-orange-logo hover:cursor-pointer">
                                        <div className="m-auto group-hover:text-white">
                                            <AiFillPhone className="w-16 h-16 mx-auto mb-2 " />
                                            <p>0812 1208 8836</p>
                                        </div>
                                    </li>
                                </a>
                                <a
                                    href={"mailto:press.megapress@gmail.com"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-orange-logo hover:cursor-pointer">
                                        <div className="m-auto group-hover:text-white">
                                            <AiFillMail className="w-16 h-16 mx-auto mb-2 " />
                                            <p className="md:text-xs lg:text-base">
                                                press.megapress@gmail.com
                                            </p>
                                        </div>
                                    </li>
                                </a>
                                <a
                                    href={
                                        "https://www.facebook.com/MegaPressNusantara"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <li className="flex bg-white rounded-xl shadow-xl my-3 p-5 group hover:bg-orange-logo hover:cursor-pointer">
                                        <div className="m-auto group-hover:text-white">
                                            <AiFillFacebook className="w-16 h-16 mx-auto mb-2 " />
                                            <p>Mega Press</p>
                                        </div>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </section>
            </UserLayout>
        </>
    );
};

export default Kontak;
