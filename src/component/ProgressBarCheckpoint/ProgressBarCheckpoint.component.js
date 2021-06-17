import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ProgressBarCheckpoint.style';

/** @namespace Component/ProgressBarCheckpoint/Component */
export class ProgressBarCheckpoint extends PureComponent {
    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.number
    };

    static defaultProps = {
        location: 1
    };

    render() {
        const {
            id,
            title,
            location
        } = this.props;

        const isGrayed = id > location ? "Grayed" : "";
        const isFinished = id < location ? "\u2713" : id;

        return (
            <div className={"ProgressBarCheckpoint " + isGrayed + isFinished}>
                <span className="Id">{isFinished}</span>
                <span className="Title">{title}</span>
            </div>
        );
    }
};

export default ProgressBarCheckpoint;
