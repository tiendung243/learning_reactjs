import React, {Component} from 'react';

class SizeSetting extends Component{
    increaseSize(){
        if(this.props.fontSize < 16){
            this.props.onChangeSize(this.props.fontSize + 1);
        }
    }
    decreaseSize(){
        if(this.props.fontSize > 8){
            this.props.onChangeSize(this.props.fontSize - 1);
        }
    }
    
    render(){
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" 
                    className="btn btn-success" 
                    onClick={()=>this.decreaseSize()}>
                        Giảm
                    </button>&nbsp;
                    <button type="button" className="btn btn-success" 
                    onClick={()=>this.increaseSize()}>Tăng</button>
                </div>
            </div>
        )
    }
}

export default SizeSetting;
