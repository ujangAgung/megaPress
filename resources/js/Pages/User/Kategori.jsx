import { Head, usePage } from "@inertiajs/inertia-react";

import KatalogLayout from "@/Layouts/KatalogLayout";
import BooksLayout from "@/Layouts/BooksLayout";

const Kategori = () => {
    const { categories, title } = usePage().props;
    let { books } = usePage().props;
    const meta = books.meta;
    const links = books.links;

    books = books.data;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <KatalogLayout categories={categories} title={title}>
                <BooksLayout books={books} meta={meta} links={links} />
            </KatalogLayout>
        </>
    );
};

export default Kategori;
