import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ links, meta }) => {
    const totalData = meta.total;
    const from = meta.from;
    const to = meta.to;

    return (
        <div className="flex flex-col items-center">
            {/* <!-- Help text --> */}
            <span className="text-sm text-gray-700 ">
                Menampilkan
                <span className="font-semibold text-gray-900 mx-1">{from}</span>
                sampai
                <span className="font-semibold text-gray-900 mx-1">{to}</span>
                dari
                <span className="font-semibold text-gray-900 mx-1">
                    {totalData}
                </span>
                data.
            </span>
            {/* <!-- Buttons --> */}
            <div className="inline-flex mt-2 xs:mt-0">
                {links.prev != null && (
                    <Link
                        href={links.prev}
                        className="px-4 py-2 text-sm font-medium text-white bg-orange-logo rounded-l hover:bg-orange-700"
                    >
                        &laquo;
                    </Link>
                )}

                {links.next != null && (
                    <Link
                        href={links.next}
                        className="px-4 py-2 text-sm font-medium text-white bg-orange-logo border-0 border-l border-orange-500 rounded-r hover:bg-orange-700 "
                    >
                        &raquo;
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Paginator;
