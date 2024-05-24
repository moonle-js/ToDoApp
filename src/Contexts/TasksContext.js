import { createContext, useReducer } from "react";

export const tasksContext = createContext()

var initialState = {

}

var reducer = (state, action) =>{
    switch(action.method){
        case 'addTask': 
            var deyer = {...action.payload}
            console.log(state)
            return {...state, ...deyer}
        case 'removeTask': 
            state = Object.entries(state).filter(([id, item]) => {
                if(id == action.payload){
                    return false
                }else{
                    return true
                }
            })
            return {...state}
        case 'completeTask': 
            state[action.payload].completed = !state[action.payload].completed
            console.log(state[action.payload])
            return {...state}        
    }
}

export default function TasksContext({children}){

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <>
            <tasksContext.Provider value={[state, dispatch]}>
                {children}
            </tasksContext.Provider>
        </>
    )
}