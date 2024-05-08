
export default function Kontakt() {
    return (
        <>
            <section className="wrapper bg-soft-primary">
                <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
                    <div className="row"><div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                        <h1 className="display-1 mb-3">Kontakt</h1>
                        <p className="lead px-xxl-10"></p>
                    </div>
                    </div>
                </div>
            </section>

            <title>Biuro Projektu</title>

            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>Biuro Projektu</h1>
                        <p><strong>Adres:</strong> ul. Grzecznarowskiego 2, pok. 204 (II piętro), 26-600 Radom</p>
                        <p>Biuro projektu czynne jest od poniedziałku do piątku w godzinach 8:00 - 16:00 (istnieje możliwość umówienia się na inne godziny spotkania)</p>
                        <p><strong>Tel:</strong> +48 881 500 075</p>
                        <p><strong>E-mail:</strong> aktywnekobiety@jpmcg.pl</p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.7890548955743!2d21.147012361731125!3d51.38988090482032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47185eb9f9d02fad%3A0xf0f1488f81b1133d!2sAleja%20J%C3%B3zefa%20Grzecznarowskiego%202%2C%2026-606%20Radom!5e0!3m2!1spl!2spl!4v1715142817877!5m2!1spl!2spl"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="row mt-10">
                    <div className="col text-center">
                        <h2>Siedziba J&P Moritz Consulting Group Jacek Poproch</h2>
                        <p><strong>Adres:</strong> ul. Plac Solny 14 lok. 3, 50-062 Wrocław</p>
                        <p><strong>WWW:</strong> www.ipmcg.pl</p>
                        <p><strong>Tel:</strong> +48 531 954 000</p>
                        <p><strong>E-mail:</strong> biuro@jpmcg.pl</p>
                    </div>

                </div>
                <div className="row">
                    <div className="col text-center">
                        <p>#FunduszeUE #FunduszeEuropejskie</p>
                    </div>
                </div>
            </div>
        </>
    );
};

