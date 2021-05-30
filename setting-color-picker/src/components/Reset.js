import React, {Component} from 'react';


class Reset extends Component{
    reset(){
        this.props.resetDefault();
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.reset()}} type="button" className="btn btn-primary" >reset</button>
            </div>
        )
    }
}
export default Reset;
