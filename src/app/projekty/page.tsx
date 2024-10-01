import Link from "next/link"
import type { Metadata } from 'next'
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import './style.css'
import flagaUe from '@/icons/flaga-ue-tlo.png'
const backendLink = process.env.STRAPI_PUBLIC_BACKEND_LINK;


async function getStrapiData() {
    const data = await fetch(`${backendLink}/api/aktualnoscis-workts?sort=id:desc`,

        {
            cache: 'no-store',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
            },
        }
    );
    console.log(data);
    return data.json();
}

export const metadata: Metadata = {
    title: 'Aktualności o projekcie',
    description: 'Aktualności o projekcie',
}

function createSlug(text: string): string {
    const polishChars: { [key: string]: string } = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
        'Ą': 'a', 'Ć': 'c', 'Ę': 'e', 'Ł': 'l', 'Ń': 'n', 'Ó': 'o', 'Ś': 's', 'Ź': 'z', 'Ż': 'z'
    };

    return text
        .split('')
        .map(char => polishChars[char] || char) // Zamień polskie znaki
        .join('')
        .toLowerCase() // Zamień na małe litery
        .replace(/[^a-z0-9\s-]/g, '') // Usuń wszystko oprócz liter, cyfr, spacji i myślników
        .trim() // Usuń białe znaki z początku i końca
        .replace(/\s+/g, '-') // Zamień spacje na myślniki
        .replace(/-+/g, '-'); // Usuń powtarzające się myślniki
}

export default async function News() {
    // const { data } = await getStrapiData();
    // const formattedDate = format(new Date(date), 'dd MMMM yyyy', { locale: pl });


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
                                REALIZOWANE PROJEKTY
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15">
                <div className="row gx-0 gx-md-3 gx-xl-8 gy-8 align-items-center">
                    <div className="col-md-4" >
                        <div className="card news-card">
                            <div className="card-body">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-1 mb-3">„INTEGRACJA-ADAPTACJA!”</h2>
                                    <h3><a href="https://integracja-adaptacja.pl">integracja-adaptacja.pl</a></h3>
                                </div>
                                <div className="post-content">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
};

