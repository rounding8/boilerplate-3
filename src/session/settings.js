
// Define constants here for usage throughout application in order to easily reference & maintain; e.g. `API_URL` below

const Settings = {
    // Local Development - `yarn start`
    development: function() {
        return {
            'API_URL'  : '${SAMPLE_API_URL_PLACEHOLDER}',
            'HOME_URL' : 'http://localhost:3000/'
        };
    },

    // Live
    production: function() {
        return {
            'API_URL'  : '${SAMPLE_API_URL_PLACEHOLDER}',
            'HOME_URL' : '${SAMPLE_PROD_URL_PLACEHOLDER}'
        };
    }
};

export default process.env.NODE_ENV == 'production' ? Settings.production() : Settings.development();
