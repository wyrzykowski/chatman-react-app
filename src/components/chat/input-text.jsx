import React,{Component} from 'react';

class InputText extends Component {
    render() {
        return (
            <div>
                <input type={"text"} value={this.props.text} onChange={(value)=>{this.props.onType(value)}}>
                </input>
            </div>
        );
    }
}

export default InputText;