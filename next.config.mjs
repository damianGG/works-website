/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
            },
            {
                protocol: 'https',
                hostname: 'integracja-adaptacja.pl',
            },
            {
                protocol: 'https',
                hostname: 'jpmcg.up.railway.app',
            },
        ],
    },
    i18n: {
        locales: ['pl', 'u'], // Lista obsługiwanych języków
        defaultLocale: 'pl',   // Domyślny język
    },
};

export default nextConfig;
