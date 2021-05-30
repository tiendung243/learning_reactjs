import React ,{Component} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      color: 'red',
      fontsize: 16,
    }
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.resetDefault = this.resetDefault.bind(this);
  }

  onSetColor(color){
    this.setState({
      color: color
    })
  }
;
  onChangeSize(value){
    this.setState({
      'fontsize': value
    })
  }
  
  resetDefault(params){
   this.setState({
    color: 'red',
    fontsize: 16,
   });
  }

  render(){
    return (
      <div className='container mt-50'>
          <div className='row'>
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting fontSize={this.state.fontsize} onChangeSize={this.onChangeSize}/>
              <Reset resetDefault={this.resetDefault}/>
            </div>
            <Result color={this.state.color} fontSize={this.state.fontsize}/>
          </div>
        </div>
    )
  }
}

export default App;
