import About6 from "@/components/blocks/about/About6Project";
import About6v2 from "@/components/blocks/about/About6v2";
import About6v3 from "@/components/blocks/about/About6v3";
import Image from "next/image";

export default function News() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',

                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >

                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: '#f48118' }}>
                                O nas
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15" >
                <div className=" mt-4 mb-15">

                    <p className="mb-3 fw-bold lead fs-lg">
                        Work & Training Service to renomowana firma szkoleniowo-doradcza. Specjalizujemy się w aktywizacji zawodowej osób poszukujących pracy oraz w rozwijaniu kompetencji i kwalifikacji pracowników firm oraz klientów indywidualnych. Firma znajduje się w Rejestrze Instytucji Szkoleniowych (RIS) oraz w Krajowym Rejestrze Agencji Zatrudnienia (KRAZ). Posiadane certyfikaty potwierdzają wysoki standard świadczonych usług.

                    </p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/photo-1.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <p className="display-6 mb-3">W ramach prowadzonej działalności:</p>



                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        realizujemy z najwyższą starannością projekty EFS, obejmujące m.in.: doradztwo zawodowe, wsparcie psychologiczne, pośrednictwo pracy, kursy/szkolenia, staże zawodowe,
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        świadczymy usługi rozwojowe dla pracowników firm i klientów indywidualnych,
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        współpracujemy z doświadczoną kadrą ekspertów, szkoleniowców i coachów,
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        wykorzystujemy nowoczesne narzędzia szkoleniowe i doradcze,
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        zapewniamy realizację zajęć z wykorzystaniem nowoczesnego i komfortowego zaplecza szkoleniowego.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mt-4 mb-15">

                    <p className="mb-3 fw-bold lead fs-lg">
                        Wysoką jakość wsparcia potwierdzają nasi Klienci i ich pozytywne rekomendacje. Dokładamy wszelkich starań, aby odpowiadać w pełni na zgłoszone potrzeby. Kładziemy nacisk na praktyczne umiejętności, które można wykorzystać w codziennej pracy. Organizujemy zajęcia szkoleniowe i wsparcie doradcze w oparciu o liczne metody interaktywne oraz warsztatowe. Korzystamy z najlepszych metod kształcenia, co gwarantuje wszystkim uczestnikom praktyczne wykorzystanie nabytych umiejętności. Prowadzone zajęcia odbywają się w komfortowych i nowocześnie wyposażonych salach wykładowych, w dogodnych dla uczestników lokalizacjach. Ustalamy programy zajęć w odpowiedzi na zgłaszane potrzeby firm, czy uczestników indywidualnych, co pozwala na uzyskanie kompetencji
                        i kwalifikacji w ściśle określonych obszarach.
                    </p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        Jesteśmy otwarci na wszelkie sugestie i oczekiwania Klientów.
                    </p>
                    <p className="mb-3 fw-bold lead fs-lg">Zapraszamy do współpracy!</p>
                </div>

            </div>
        </>
    );
};

