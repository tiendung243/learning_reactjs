import React, {Component} from 'react';
import './App.css';
// import { Button } from 'reactstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      username : "",
      password : "",
      description: "",
      gender: 0,
      rdlang: "en",
      chkstatus: false
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  handleOnChange(event){
    let target = event.target;
    let name = target.name;
    let value = target.type !== "checkbox" ? target.value :target.checked;
    this.setState({
      [name]: value
    });
  }
  onHandleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <div className="container mt-30">
        <div className="row">
          <div className="panel panel-primary">
            <div className="panel-heading">Form</div>
            <div className="panel-body">
              <form onSubmit={this.onHandleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" name="username" className="form-control" onChange={this.handleOnChange}/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" className="form-control" onChange={this.handleOnChange}/>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" name="description" rows="3" onChange={this.handleOnChange}></textarea>
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleOnChange}>
                    <option value={0}>Nu</option>
                    <option value={1}>Nam</option>
                  </select>
                </div>
                <label>Language</label>
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="rdlang" checked={this.state.rdlang === "en"} 
                    value="en" onChange={this.handleOnChange} />
                    English
                  </label>
                  <br/>
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="rdlang" checked={this.state.rdlang === "vi"}
                    value="vi" onChange={this.handleOnChange} />
                    Vietnamese
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" name="chkstatus"
                    onChange={this.handleOnChange} checked={this.state.chkstatus}
                    />
                    Active
                  </label>
                </div>
                <button className="btn btn-success" type="submit">Submit</button>
                <button className="btn btn-info" type="reset">Reset</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      
      
    )
  }
}
export default App;
