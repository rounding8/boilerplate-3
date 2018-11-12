
import axios     from 'axios';
import React     from 'react';
import ReactDOM  from 'react-dom';
import IdleTimer from 'react-idle-timer';

import 'bulma/css/bulma.css';
import 'css/app';

import Auth     from 'components/auth';
import Menu     from 'components/menu';
import Session  from 'session';
import Settings from 'session/settings';
import Utils    from 'utils';

const App = {

    /*
        Main Application Process
    */

    init: function() {
        console.log('App.init()');

        const session = Session.get();

        // Initialize Application User
        App.User = {
            NAME  : '',
            token : ''
        };

        // Initialize Application State
        App.State = {
            modalOpen: false
        };

        // Initialize Application Globals/Constants
        App['TIMEOUT'] = 1000 * 60 * 30;

        // Continue if Authenticated, else redirect user to (fake) auth process; adds #login hash to URL
        session.token && session.user ? App.load(session) : App.auth();
    },

    auth: function() {
        // User isn't authenticated or is in process of logging in
        const action = location.hash ? 'login' : 'auth';

        App.render(App.composeAuth(action));
    },

    load: function(session) {
        console.log('App.load()');

        // Set User info using userProfile/menus API response data
        App.User['NAME']  = session.user;
        App.User['token'] = session.token;

        App.get();
    },

    get: function() {
        // Get API data for Application here...

        /*
            const config = {
                headers: {
                    Authorization: `Bearer ${App.User['token']}`
                }
            };

            axios.get(Settings['API_URL...'], config).then(() => App.next_method()).catch(error => console.error(error));
        */

        App.parse(/* data */);
    },

    parse: function(/* data */) {
        const session = Session.get();

        App.ready(session);
    },

    ready: function(session) {
        const authComponent = App.composeAuth('home');

        const content = (
            <IdleTimer
                element    = {document}
                format     = "MM-DD-YYYY HH:MM:ss.SSS"
                idleAction = {this.handleIdleAction}
                timeout    = {App['TIMEOUT']}>

                {authComponent}
                <div id="modal-overlay" onClick={this.handleModalClick} />
                <Menu app={App} />
            </IdleTimer>
        );

        App.render(content).exec();
    },

    exec: function() {
        console.log('App.exec()');

        // Global Event Handlers
        window.addEventListener('keyup', App.handleKeyup);
    },

    /*
        Main Application Methods
    */

    composeAuth: function(action) {
        return (
            <Auth
                action  = {action}
                app     = {App}
                session = {Session}
            />
        );
    },

    handleIdleAction: function() {
        // User Session has Timed Out - Terminate Session & Destroy cookie
        const session = Session.get();

        App.render(App.composeAuth('logout'));
    },

    handleKeyup: function(event) {
        if (event.key.toLowerCase().indexOf('esc') == 0 && App.State['modalOpen']) {
            App.toggleModal();
        }
    },

    handleModalClick: function(event) {
        App.toggleModal();
    },

    refreshToken: function(token) {
        // `App{}` is passed down to Auth component which updates top-lvl App.User['token'] value when silently renewed
        App.User['token'] = token;
    },

    render: function(element) {
        ReactDOM.render(element, document.getElementById('root'));

        return this;
    },

    toggleModal: function() {
        document.querySelector('body').classList.toggle('show-modal');

        App.State['modalOpen'] = !App.State['modalOpen'];
    }
};

window.onload = () => {
    App.init();
};
