import { memo, useState } from "react"



function Counter({countVal,onClick}){
    console.log("this is rendered ",countVal,onClick);
    return (
        <div>
            <p>{countVal}</p>
            <button onClick={onClick}>Click</button>
        </div>
    )
}
 

export default memo(Counter);