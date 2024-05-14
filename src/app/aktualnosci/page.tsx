import Link from "next/link"

export default function News() {
    return (
        <>
            <section className="wrapper bg-soft-primary">
                <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
                    <div className="row"><div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                        <h1 className="display-1 mb-3">Aktualności</h1>
                        <p className="lead px-xxl-10"></p>
                    </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15">
                <div className="row gx-0 gx-md-3 gx-xl-8 gy-8 align-items-center">
                    <div className="col-md-4">

                        <Link href="/aktualnosci/1">
                            <div className="card ">
                                <div className="card-body">
                                    <div className="post-header">
                                        <h2 className="post-title h3 mt-1 mb-3">Rusza I tura naboru do projektu „Kobieta * Aktywność * Sukces”</h2>
                                    </div>
                                    <div className="post-content">
                                        <p>Zapraszamy niepracujące kobiety w wieku 18-59 lat, zamieszkujące miasto Radom lub gminę
                                            Wieniawa do udziału w projekcie „Kobieta * Aktywność * Sukces”.
                                        </p>
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <ul className="post-meta d-flex mb-0">
                                        <li className="post-date">
                                            <i className="uil uil-calendar-alt">
                                            </i>
                                            <span>01 kwiecień 2024</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    );
};

