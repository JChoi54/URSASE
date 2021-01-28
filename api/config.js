const { isDevelopment } = require('./helper')

/* The host is referring whether the application is deployed on the server or locally. */

const isProduction = true

if (isProduction) {
    module.exports.application = {
        databaseOptions: {
            host: isDevelopment() ? 'localhost' : 'localhost', // TODO: Replace first with server ip.
            database: 'ursase',
            user: 'root',
            password: '',
            port: '3306'
        }
    };
} else {
    module.exports.application = {
        databaseOptions: {
            host: isDevelopment() ? 'localhost' : 'localhost', // TODO: Replace first with server ip.
            database: 'ursase',
            user: 'root',
            password: '',
            port: '3306'
        }
    };
}

module.exports.jwt = {
    secret: 'development' // TODO: Replace when server is in production.
}