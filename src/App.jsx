import React from 'react'
import "./App.less"

// 导入组件
import NoStateComponent from '@/NoStateComponent'
import StateComponent from '@/StateComponent'

const chenhuanStyle = {
    color:'green',
    fontSize:50
}

// 类组件(有状态组件)
class App extends React.Component{
    // render 是react的声明周期函数之一，用来渲染组件的内容
    render(){
        return <div>
            <NoStateComponent />
            <hr/>
            <StateComponent />
        </div>
    }

    render2(){
        return <div id="app">
            Hello React
            <div className="imgDiv"></div>
            <div>
                <span><i className="iconfont icon-login_user"></i></span>
            </div>
            <div>
                {/* 我是注释  */}
                <p style={{color:'red',fontSize:36+'px'}}>我是一个好人</p> 
                <p style={chenhuanStyle}>陈焕是一个好人</p> 
            </div>
        </div>

        // <div className="main">我是一个好人</div> 底层会调用这个方法

        // return React.createElement('div', {className: "main"},[
        //     React.createElement('h1',{id:'app'},'你也是个好人'),
        //     React.createElement('p',{id:'app2'},'他是个好人'),
        // ])
    }
}

export default App