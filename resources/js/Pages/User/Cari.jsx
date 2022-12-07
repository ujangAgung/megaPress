import { Head, usePage } from "@inertiajs/inertia-react";

import KatalogLayout from "@/Layouts/KatalogLayout";
import BooksLayout from "@/Layouts/BooksLayout";

const Cari = () => {
    let { books } = usePage().props;
    const { categories, title } = usePage().props;
    const meta = books.meta;
    const links = books.links;
    books = books.data;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Katalog Buku Penerbit Buku Sumedang Bandung Indonesia"
                />
                <link rel="icon" href="/img/icons.png" />
            </Head>
            <KatalogLayout categories={categories} title={title}>
                <BooksLayout books={books} meta={meta} links={links} />
            </KatalogLayout>
        </>
    );
};

export default Cari;
