import { useParams } from "react-router-dom";



function RecipeDetails(){
    const params=useParams();
    console.log(params);
    const {id}=params
    return <div>
        <h2>Recipe Item: {id}</h2>
    </div>
}

export default RecipeDetails;