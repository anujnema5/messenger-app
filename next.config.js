/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains: ['w7.pngwing.com', 'github.com', 'raw.githubusercontent.com'],
    },

    experimental : {
        serverActions : true
    }
}

module.exports = nextConfig
