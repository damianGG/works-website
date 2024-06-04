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
                hostname: 'aktywnekobiety.pl',
            },
            {
                protocol: 'https',
                hostname: 'jpmcg.up.railway.app',
            },
        ],
    },
};

export default nextConfig;
