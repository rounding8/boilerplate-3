
import * as Cookies from 'js-cookie';

import Settings from 'session/settings';

const Session = {

    // Session Cookie Expiration set to 1 Day; User Idle Session timeout of 30 min. overrides this
    EXPIRES: 1,

    destroy: function() {
        // User Logout or Session is invalid - Terminate Session & Destroy cookie
        Cookies.remove('session');
    },

    expired: function() {
        // User Session Expired - this.destroy() + Redirect User Home => Central Auth
        Session.destroy();
        location.href = Settings['HOME_URL'];
    },

    get: function() {
        // User Actions - Return Session & User Info
        return Cookies.getJSON('session') || {};
    },

    set: function(token, user) {
        // User Login Authentication - Store Info in Session & Redirect Home
        Session.update(token, user);

        location.href = Settings['HOME_URL'];
    },

    update: function(token, user) {
        // Update Session Info
        Cookies.set('session', {
            expires : Session['EXPIRES'],
            token   : token,
            user    : user
        });
    }
};

export default Session
