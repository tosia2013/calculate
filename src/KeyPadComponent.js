import React, {Component} from 'react'
import './Style/KeyPadComponent.css';

class KeyPadComponent extends Component{

    render(){
        return(
            <div className='button'>
                <div className='button_row'>
                    <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                    <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                    <button name="√" onClick={e => this.props.onClick(e.target.name)}>√</button>
                    <button name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
                </div>
                <div className='button__row'>
                    <button name="7" onClick={e => this.props.onClick(e.target.name)} className="button__color">7</button>
                    <button name="8" onClick={e => this.props.onClick(e.target.name)} className="button__color">8</button>
                    <button name="9" onClick={e => this.props.onClick(e.target.name)} className="button__color">9</button>
                    <button name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>
                </div>
                <div className='button__row'>
                    <button name="4" onClick={e => this.props.onClick(e.target.name)} className="button__color">4</button>
                    <button name="5" onClick={e => this.props.onClick(e.target.name)} className="button__color">5</button>
                    <button name="6" onClick={e => this.props.onClick(e.target.name)} className="button__color">6</button>
                    <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                </div>
                <div className='button__row'>
                    <button name="1" onClick={e => this.props.onClick(e.target.name)} className="button__color">1</button>
                    <button name="2" onClick={e => this.props.onClick(e.target.name)} className="button__color">2</button>
                    <button name="3" onClick={e => this.props.onClick(e.target.name)} className="button__color">3</button>
                    <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                </div>
                <div className='button__row'>
                    <button name="-" onClick={e => this.props.onClick(e.target.name)} className="button__color">+/-</button>
                    <button name="0" onClick={e => this.props.onClick(e.target.name)} className="button__color">0</button>
                    <button name="." onClick={e => this.props.onClick(e.target.name)} className="button__color">,</button>
                    <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                </div>
            </div>
        );
    }

}


export default KeyPadComponent