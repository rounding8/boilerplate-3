
import PropTypes from 'prop-types';
import React     from 'react';

import Settings from 'session/settings';

export default class Auth extends React.Component {
    static propTypes = {
        app     : PropTypes.object,
        action  : PropTypes.string.isRequired,
        session : PropTypes.object.isRequired
    }

    componentDidMount() {
        this.init(this.props.action);
    }

    init = action => {
        action == 'home' ? this.exec(this.props.app, this.props.session) : action == 'login' ? this.login(this.props.session) : action == 'logout' ? this.logout(this.props.session) : this.auth();
    }

    auth() {
        //
        // Handle Authentication here...
        //

        // (this sample code assumes user is auth successfully)
        location.href = Settings['HOME_URL'] + '#login';
    }

    exec = (app, session) => {
        //
        // Auth Event Handlers here...
        //
    }

    login(session) {
        // fake creds for demo sake
        const token = '12345';
        const user  = 'dev user';

        session.set(token, user);
    }

    logout(session) {
        // Terminate Session / Logout User & Destroy Session cookie
        session.destroy();
    }

    render() {
        return null;
    }
}
