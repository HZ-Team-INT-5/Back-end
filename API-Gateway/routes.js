const ROUTES = [{
        url: '/free',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        }
    },
    {
        url: '/premium',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/premium`]: '',
            },
        }
    },
    {
        url: '/courses',
        proxy: {
            target: 'http://courses:3001',
            changeOrigin: true,
            timeout: 60000
        }
    },
    {
        url: '/get-events',
        proxy: {
            target: 'http://calendar:3002',
            changeOrigin: true,
            timeout: 60000
        }
    },
    {
        url: '/notifications',
        proxy: {
            target: 'http://notifications:3004',
            changeOrigin: true,
            timeout: 60000
        }
    }
]

exports.ROUTES = ROUTES;