import React from "react";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";

import AdminLayout from "@/Layouts/AdminLayout";

const editKategori = (props) => {
    // console.log(props);
    // const { kategori } = usePage();
    // console.log("kategori : ", kategori);
    const { data, setData, errors, put } = useForm({
        id: props.data.id,
        deskripsi: props.data.deskripsi || "",
        slug: props.data.slug || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.kategori.update", data));
    };

    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <AdminLayout auth={props.auth}>
                <form onSubmit={handleSubmit}>
                    <div className="container mx-auto mt-10">
                        <h1 className="text-4xl">{props.title}</h1>
                        <div className="relative z-0 my-6 w-full group">
                            <input
                                type="text"
                                name="deskripsi"
                                id="deskripsi"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                value={data.deskripsi}
                                onChange={(e) =>
                                    setData("deskripsi", e.target.value)
                                }
                            />
                            <label
                                htmlFor="deskripsi"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Deskripsi
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-orange-logo hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                        >
                            Update
                        </button>
                    </div>
                </form>
            </AdminLayout>
        </>
    );
};

export default editKategori;
