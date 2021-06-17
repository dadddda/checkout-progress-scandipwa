import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import ProgressBarLine from 'Component/ProgressBarLine';
import ProgressBarCheckpoint from 'Component/ProgressBarCheckpoint';

import './ProgressBar.style';

/** @namespace Component/ProgressBar/Component */
export class ProgressBar extends PureComponent {
    static propTypes = {
        titleList: PropTypes.array.isRequired
    };

    render() {
        const {
            titleList
        } = this.props;

        return (
            <div className="ProgressBar">
                <ProgressBarLine 
                    initProgress={0} 
                    destProgress={50}
                />
                {titleList.map(text => (
                    <ProgressBarCheckpoint 
                        id={titleList.indexOf(text) + 1} 
                        title={text} 
                        location={1}
                        key={text} 
                    />
                ))}
            </div>
        );
    }
};

export default ProgressBar;
