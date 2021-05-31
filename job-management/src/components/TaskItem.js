import React, {Component} from 'react';

class TaskItem extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.data.name}</td>
                <td className="text-center">
                    <span className={this.props.data.status ? "badge badge-primary":"badge badge-success"}>
                        {this.props.data.status ? "Kich hoat" : "An"}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }
}
export default TaskItem;