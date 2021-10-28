import React, {Component} from 'react';
import './Style/ResultComponent.css'

class ResultComponent extends Component {

    render() {
        let {result} = this.props;
        return (
            <div className='result'>
                <p>{result}</p>
            </div>
        )
    }
}

export default ResultComponent