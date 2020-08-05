import React, {useState} from 'react'

export default function HookCounter(){

    let [count, setCount] = useState(0)
    return(
        <div>
            <h2>Hook Counter</h2>
            <button onClick = { ()=>setCount(count+1) }> Inc Count {count}</button>
        </div>
    )
}