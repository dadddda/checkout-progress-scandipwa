import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ProgressBar.style';

/** @namespace Component/ProgressBar/Component */
export class ProgressBar extends PureComponent {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    // static defaultProps = {
    //     text: ""
    // };

    render() {
        const {
            text
        } = this.props;

        return (
            <div className="ProgressBar">
                {text}
            </div>
        );
    }
};

export default ProgressBar;
