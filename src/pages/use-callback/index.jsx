import { useCallback, useState } from "react";
import Counter from "./counter";


function CallBackExample(){
    const [countOne,setCountOne]=useState(0);
    const [countTwo,setCountTwo]=useState(0);
    const memorizeCountOne=useCallback(()=>setCountOne(countOne+1),[countOne]);
    const memorizeCountTwo=useCallback(()=>setCountTwo(countTwo+1),[countTwo]);
    return (
        <div>
            <h1>Use callback</h1>
            <Counter countVal={countOne} onClick={memorizeCountOne} />
            <Counter countVal={countTwo}  onClick={memorizeCountTwo} />
        </div>
    );
}

export default CallBackExample;