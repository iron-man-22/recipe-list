import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";


function RecipeList(){
    const loc=useLocation();
    const windowSize=useWindowResize();
    const {data,loading,error}=useFetch("https://dummyjson.com/recipes");
    if(loading) return <h5>Fetching Recipes! Please wait..</h5>
    
    return <div>
        <h1 style={{color:windowSize.width<500 ? "red":"black"}}>Recipe List Page</h1>
        <h3>Current window Width:{windowSize.width} and Height:{windowSize.height}</h3>
        <ul>
            {data?.recipes?.length >0
            ?( data?.recipes?.map((recipeItem)=>(
                <div key={recipeItem?.id}>
                    <img src={recipeItem?.image}/>
                    <label>{recipeItem?.name}</label>
                </div>
            ))):null}
        </ul>
    </div>
}

export default RecipeList;