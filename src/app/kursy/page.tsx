import About6 from "@/components/blocks/about/About6Project";
import About6v2 from "@/components/blocks/about/About6v2";
import About6v3 from "@/components/blocks/about/About6v3";
import Image from "next/image";

export default function News() {
    return (
        <>
            <section
                className="wrapper"

            >

                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: '#f48118' }}>
                                Kursy zawodowe
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15" >
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/spawacz.webp"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <p className="display-6 mb-3">Oferujemy kursy zawodowe dla osób chcących zdobyć uprawnienia w określonym zawodzie:</p>



                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Operator obrabiarek sterowanych numerycznie CNC
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Monter rusztowań budowlanych
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Operator suwnic sterowanych z poziomu roboczego
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Operator wózków widłowych
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Operator żurawia samojezdnego
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Spawacz
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Instalator odnawialnych źródeł energii
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mt-4 mb-15">


                </div>

            </div>
        </>
    );
};

