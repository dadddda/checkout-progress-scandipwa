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

    componentDidMount() {
        const {progress} = this.props;
        const lineElement = this.lineRef.current;
        lineElement.style.backgroundPosition = `${100 - Math.round(progress)}%`;
    }

    componentDidUpdate() {
        const {progress} = this.props;
        const lineElement = this.lineRef.current;
        lineElement.style.backgroundPosition = `${100 - Math.round(progress)}%`;
    }

    render() {
        this.lineRef = React.createRef();

        return (
            <div ref={this.lineRef} className="ProgressBarLine"></div>
        );
    }
};

export default ProgressBarLine;
