import { useEffect, useState } from "react";


function useFetch(url,options={}){
    const [data,setFetch]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    async function  fetchData() {
        setLoading(true);
        try{
            const apiRes =await fetch(url,{...options});
            if(!apiRes.ok) throw new Error(apiRes.statusText);
            const result= await apiRes.json();
            if(result){
                setFetch(result);
                setLoading(false);
                setError(null);
            }
        }
        catch(error){
            console.log(error);
            setLoading(false);
            setError(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[url]);

    return{
        data,loading,error
    };
    
}


export default useFetch;