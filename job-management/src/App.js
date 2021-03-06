import './App.css';
import React, {Component} from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { v4 } from 'uuid';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }
    }
    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({'tasks': tasks});
        }
    }

  render(){
      var {tasks} = this.state;
    return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr/>
            </div>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <TaskForm/>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <button type="button" className="btn btn-primary">
                        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>
                    <Control/>
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <TaskList tasks={tasks}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
  }
}

export default App;
