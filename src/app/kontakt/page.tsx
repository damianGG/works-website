import Link from "next/link";
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Kontakt do projektu „Kobieta * Aktywność * Sukces',
    description: 'Kontakt do projektu „Kobieta * Aktywność * Sukces” w Radomiu i gminie Wieniawa oraz do biura projektu J&P Moritz Consulting Group Jacek Poproch w Wrocławiu',
}
export default function Kontakt() {
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
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',

                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: '#f48118' }}>
                                Kontakt
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>

            <title>Biuro</title>

            <div className="container mt-5">

                <div className="row">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d269.21678824712797!2d21.73242894731764!3d50.06313874000564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1724363515980!5m2!1spl!2spl"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="row mt-10">
                    <div className="col text-center">
                        <h2>Work &amp; Training Service Sp. z o.o.</h2>
                        <p><strong>Adres: </strong> Sielec 1A 39-120 Sędziszów Małopolski</p>
                        <p><strong>Strona: </strong><Link href="http://workts.pl/" className="link-primary" target="_blank">www.workts.pl</Link></p>
                        {/* <p><strong>Facebook: </strong><Link href="https://www.facebook.com/profile.php?id=61558567391191" className="link-primary" target="_blank">J&P</Link></p> */}
                        <p><strong>Tel: </strong>17 22 26951</p>
                        <p><strong>E-mail: </strong><a href="mailto:biuro@workts.pl" className="link-primary" target="_blank">biuro@workts.pl</a> </p>
                    </div>

                </div>
                <div className="row">
                    {/* <div className="col text-center mb-15">
                        <Link
                            href="https://www.facebook.com/search/top/?q=%23funduszeue%20%23FunduszeEuropejskie"
                            className="link-primary" target="_blank"
                        >
                            #FunduszeUE #FunduszeEuropejskie
                        </Link>

                    </div> */}
                </div>
            </div>
        </>
    );
};

