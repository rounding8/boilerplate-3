
import PropTypes from 'prop-types';
import React     from 'react';

export default class Menu extends React.Component {
    static propTypes = {
        app: PropTypes.object.isRequired
    }

    componentDidMount() {
        console.log('Menu mounted...');
    }

    composeMenu() {
        return (
            <div>
                <nav>
                    <span></span>
                </nav>
                <menu>
                    <a href="/"><i className="fa fa-home"></i> Home</a>
                    <ul>
                        <title>TITLE #1</title>
                        <li>
                            <a><i className="fa fa-users"></i> Item #1<span>15</span></a>
                        </li>
                        <li>
                            <a><i className="fa fa-clock-o"></i> Item #2<span>2</span></a>
                        </li>
                        <title>TITLE #2</title>
                        <li>
                            <a><i className="fa fa-line-chart"></i> Item #3</a>
                        </li>
                        <li>
                            <a><i className="fa fa-file-text-o"></i> Item #4</a>
                        </li>
                        <li>
                            <a><i className="fa fa-database"></i> Item #5</a>
                        </li>
                    </ul>
                </menu>
            </div>
        );
    }

    render() {
        const menuElement = this.composeMenu();

        return (
            <header>
                <div className="columns">
                    <div className="column">
                        {menuElement}
                    </div>
                    <div className="column">
                        Demo #3 ∞ React + webpack Application v2 🍽
                    </div>
                    <div className="column" />
                </div>
            </header>
        );
    }
}
