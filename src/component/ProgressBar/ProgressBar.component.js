import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import ProgressBarLine from 'Component/ProgressBarLine';
import ProgressBarCheckpoint from 'Component/ProgressBarCheckpoint';

import './ProgressBar.style';

/** @namespace Component/ProgressBar/Component */
export class ProgressBar extends PureComponent {
    static propTypes = {
        checkpointList: PropTypes.array.isRequired,
        currentCheckpoint: PropTypes.number
    };

    static defaultProps = {
        currentCheckpoint: 0
    };

    render() {
        const {
            checkpointList,
            currentCheckpoint
        } = this.props;

        this.progressSteps = 100 / (checkpointList.length + 1);

        return (
            <div className="ProgressBar">
                <ProgressBarLine 
                    progress={(currentCheckpoint + 1) * this.progressSteps}
                />
                <div className="ProgressBarCheckpointWrapper">
                    {checkpointList.map(text => (
                        <ProgressBarCheckpoint 
                            id={checkpointList.indexOf(text) + 1} 
                            title={text} 
                            location={currentCheckpoint + 1}
                            key={text} 
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default ProgressBar;
