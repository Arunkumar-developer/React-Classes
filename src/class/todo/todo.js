import { Component } from "react";

class TodoComponent extends Component{
    state = {
        todos:["apple","banana"]
    }
    addTodoMethod=()=>{
        const newState=[...this.state.todos,"Water Melon"]
        this.setState({
            todos:newState
        })
    }

    clearAllTodos=()=>{
        const newState=[]
        this.setState({
            todos:newState
        })
    }
    deleteSelectedTodo=(index)=>{
 
    const filteredArray = this.state.todos.filter((item,i) => i!==index)
    this.setState({
        todos:filteredArray
    })
    }
    updateSelectedTodo=(index)=>{
        let updatedArray = this.state.todos.map((eachFruit,i)=>{
            if(i===index){
                return "kiwi"
            }
            else  return eachFruit
            
        })
        this.setState({
            todos:updatedArray
        })

    }


    render(){
        return(
            <>
            <h2>TODO COMPONENT</h2>
            <button onClick={this.addTodoMethod}>add Todo</button>
            <button onClick={this.clearAllTodos}>Clear all Todo</button>
            {
                this.state.todos.map((eachTodo,index)=>{
                    return(
                        <>
                        <h3>{index+1}{eachTodo}</h3>
                        <button onClick={()=>this.deleteSelectedTodo(index)}>Delete The todo</button>
                        <button onClick={()=>this.updateSelectedTodo(index)}>Update The todo</button>
                        </>
                    )
                })
            }
            </>
        )
    }
}

export default TodoComponent