import path from 'path'
export default {
    port: process.env.PORT || 8080,
    router: {
        dir: './src/controllers'
    },
    mock: {
        dir: path.resolve(process.cwd(), './src/mocks'),
        enabled: process.env.MOCK_ENABLED || true
    },
    service: {
        dir: './src/service'
    },
    cors: {},
    error: {},
    jsonp: {},
    logger: {},
    security: {},
    compress: {},
    parameter: {},
}