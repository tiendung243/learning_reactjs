import React ,{Component} from 'react';

class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state={
            colors : ['red', 'green', 'blue', '#ccc']
        };
    }
    showColor(color){
        return {
            backgroundColor: color
        }
    }
    setActiveColor(color){
        this.props.onReceiveColor(color);
    }

    render(){
        var elementColors = this.state.colors.map((item, index)=>{
                return <span 
                        key={index} 
                        style={ this.showColor(item)}
                        className={this.props.color === item ? "active": ""}
                        onClick={()=>{this.setActiveColor(item)}}
                        ></span>
            }
        );
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {elementColors}
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorPicker;