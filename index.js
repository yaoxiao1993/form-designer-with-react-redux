// Write your code here
// Write your code here
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyDialog from './dialog.js'

class Form extends Component {
    constructor(){
      super()
      this.state={
        display:'none',
        selectType:'text',
      }
    }

    addItems(){
        if(this.state.selectType==='text'){
            this.state.add.push('<input></input><button>删除</button>')
        }else if(this.state.selectType==='date'){
            this.state.add.push('<input type="date"></input><button>删除</button>')
        }
    }

    render(){
        return <div>
        <button>添加</button><button>预览</button>
        <MyDialog />
        </div>
    }

}

ReactDOM.render(<Form />, document.getElementById('root'));