import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ProgressBarLine.style';

/** @namespace Component/ProgressBarLine/Component */
export class ProgressBarLine extends PureComponent {
    static propTypes = {
        destProgress: PropTypes.number.isRequired
    };

    static defaultProps = {
        initProgress: 0
    };

    render() {
        const {
            initProgress,
            destProgress
        } = this.props;

        return (
            <div className="ProgressBarLine"></div>
        );
    }
};

export default ProgressBarLine;
