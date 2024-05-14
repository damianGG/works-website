// GLOBAL CUSTOM HOOKS
// GLOBAL CUSTOM COMPONENTS
import FigureImage from "@/components/reuseable/FigureImage";

// CUSTOM DATA






export default function BlogDetailsTemplate() {
    // used for image lightbox
    return (
        <>
            <section className="wrapper bg-soft-primary">
                <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
                    <div className="row">
                        <div className="col-md-10 col-xl-8 mx-auto">
                            <div className="post-header">
                                <div className="post-category text-line">
                                </div>
                                <h1 className="display-1 mb-4">
                                    Rusza I tura naboru do projektu „Kobieta * Aktywność * Sukces”
                                </h1>
                                <ul className="post-meta mb-5">
                                    <li className="post-date">
                                        <i className="uil uil-calendar-alt" />
                                        <span>01 kwiecień 2024</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light">
                <div className="container pb-14 pb-md-16">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="blog single mt-n17">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="classic-view">
                                            <article className="post">
                                                <div className="post-content mb-5">
                                                    <h2 className="h1 mb-4">Zapraszamy niepracujące kobiety w wieku 18-59 lat, zamieszkujące miasto Radom lub gminę Wieniawa do udziału w projekcie „Kobieta * Aktywność * Sukces”.</h2>
                                                    <div className="col-lg-12">
                                                        <p className="lead fs-lg">
                                                            W ramach projektu oferujemy:
                                                        </p>
                                                        <div className="row gy-3 ">
                                                            <div className="col-xl-6">
                                                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                                                    <li><i className="uil uil-check"></i> spotkania z doradcą zawodowym</li>
                                                                    <li className="mt-3"><i className="uil uil-check"></i>szkolenia aktywizujące</li>
                                                                    <li className="mt-3"><i className="uil uil-check"></i>szkolenia zawodowe niezbędne w zawodach związanych z usługami zdrowotnymi i
                                                                        opiekuńczymi</li>

                                                                </ul>
                                                            </div>
                                                            <div className="col-xl-6">
                                                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                                                    <li className="mt-3"><i className="uil uil-check"></i>stypendium szkoleniowe za udział w każdym kursie</li>
                                                                    <li className="mt-3"><i className="uil uil-check"></i>wyżywienie w trakcie szkoleń</li>
                                                                    <li className="mt-3"><i className="uil uil-check"></i>możliwość zwrotu kosztów dojazdu</li>
                                                                    <li className="mt-3"><i className="uil uil-check"></i>możliwość zwrotu kosztów opieki nad osobą wymagającą wsparcia w codziennym
                                                                        funkcjonowaniu.</li>
                                                                </ul>
                                                            </div>
                                                            <p className="text-center fs-20 mt-15">Udział w projekcie jest bezpłatny.</p>
                                                        </div>

                                                    </div>

                                                    <div className="">
                                                        <p className="lead fs-lg">
                                                            W Projekcie mogą uczestniczyć kobiety spełniające następujące warunki:
                                                        </p>
                                                        <div className="row gy-3 ">
                                                            <div className="col-xl-12">
                                                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                                                    <li><i className="uil uil-check"></i> wiek 18-59 lat</li>
                                                                    <li className="mt-3"><i className="uil uil-check"></i>zamieszkiwanie: miasto Radom lub gmina Wieniawa</li>
                                                                    <li className="mt-3"><i className="uil uil-check"></i>szkolenia aktywizujące</li>
                                                                    <li className="mt-3"><i className="uil uil-check"></i>osoba bierna zawodowa – osoba, która w danej chwili nie tworzy zasobów siły
                                                                        roboczej (tzn. nie jest osobą pracującą ani bezrobotną); w tym m.in.: studenci studiów
                                                                        stacjonarnych</li>
                                                                </ul>
                                                            </div>

                                                            <p className="">Do wzięcia udziału w projekcie zapraszamy wszystkich chętnych spełniających wyżej
                                                                wymienione kryteria, a w szczególności bierne zawodowo kobiety w wieku 18-29 lat, które
                                                                posiadają wykształcenie ponadgimnazjalne lub niższe.</p>
                                                            <p className="">Komplet dokumentów rekrutacyjnych (patrz zakładka „Rekrutacja”) można składać osobiście
                                                                w Biurze Projektu bądź przesyłać je drogą pocztową, kurierem lub e-mailem.</p>
                                                            <p>I tura rekrutacji trwa od 02.04.2024 r. – 31.05.2024 r.</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}
