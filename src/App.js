import React from 'react';
import './App.css'; 
import { useState } from 'react';
function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] =useState("")
  const [filter,setFilter]=useState("")
 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>          
      <div className="input"> 
        <input onChange={(e)=> setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{ key:Date.now() ,id:Date.now() ,text:toDo,status:false,delete:false}]) } className="fas fa-plus"></i>
      </div>
        
      <div className='buttons'>
          <button onClick={ ()=>setFilter("all")} >All tasks</button>
          <button onClick={ ()=>setFilter("pending")} >in Progres</button>
          <button onClick={ ()=>setFilter("done")} >Task Done</button>
        </div>
       <div className="todos">   
        {toDos.map((obj,index)=>{       
          if(obj.text===""){
            return null;
          }else{
            if(filter===""||filter==="all"){
             return(
              <div key={index} className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setToDos(toDos.filter(data => {
                    if(data.id === obj.id){
                      data.status = e.target.checked
                    }
                   return data
                  }))
                }} 
                value={obj.status} type="checkbox" name="" id="" checked={obj.status} />
                <p>{obj.status===true?<s>{obj.text}</s>:obj.text}</p>
              </div>
              <div className="right">
                <i onClick={() => {
                 return setToDos(  
                 toDos.filter((obj3) => obj3.id !== obj.id)    
                 );
                }} className="fas fa-times"></i>
              </div>
            </div>
             )
            }else if(filter==="done" || filter ==="pending"){
              const status = filter ==="done"? true:false;
              if(obj.status === status){
                return (
                  <div key={index} className="todo">
                    <div className='left'>
                        <input onChange={(e)=>{
                          setToDos(toDos.filter(obj2=>{
                            if(obj.id === obj2.id ){
                            obj2.status=e.target.checked
                            }
                            return obj2;
                          }))
                        }} name="" id ="" checked={obj.status} type="checkbox" />
                        <p>{obj.status === true ? <s>{obj.text}</s> : obj.text}</p>
                    </div>
                    <div className="right">
                        <i
                          onClick={() => {
                            return setToDos(
                              toDos.filter((obj3) => obj3.id !== obj.id)
                            );
                          }}
                          className="fas fa-times"></i>
                      </div>
                  </div>
                )
              }
            }else{

            }
            return null;
          }
        })
        }      
      </div>
    </div>
  );
}

export default App;