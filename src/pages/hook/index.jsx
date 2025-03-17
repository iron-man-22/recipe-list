import { useEffect, useRef } from "react";


function Hook(){
    const CountVal=useRef(0);
    const divElement=useRef();
    const inpElement=useRef();
    function handleClick(){
        CountVal.current++;
        console.log(CountVal.current);
    }
    useEffect(()=>{
        const divRef=divElement.current;
        inpElement.current.focus();
        divRef.style.color="red";
        setTimeout(()=>{
            divRef.style.color="blue";
            setTimeout(()=>{
                divRef.style.color="green";
            },1000);
        },2000);
        console.log(divRef);
    })
    return <div>
        <h3>Custom Hooks : UseRef</h3>
        <button onClick={handleClick}>Click</button>
        <div ref={divElement}>Some Random Text</div>
        <input name="name" placeholder="Enter Name" ref={inpElement}/>
    </div>
}

export default Hook;