import React, { Component } from 'react';

class MyDialog extends Component {
    constructor(){
        super()
    }

    creatDialog(){
        let body = document.body;
        let showDom = document.createElement("div");
        // 设置基本属性
        showDom.style.position = 'absolute';
        showDom.style.top = '0px';
        showDom.style.left = '0px';
        showDom.style.width = Browser.width;
        showDom.style.height = Browser.height;
        showDom.style.zIndex = zIndex || Browser.FLOAT_VIEW_INDEX;
        body.appendChild(showDom);
    }
    
    // 自我删除的方法
    close(){
        ReactDom.unmountComponentAtNode(showDom);
        body.removeChild(showDom);
    }

    render(){
        <Component onClose={close} />,
        showDom
    }
}

export default MyDialog