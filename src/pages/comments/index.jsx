import useFetch from "../../hooks/use-fetch";

function CommentList(){
    const {data,loading,error}=useFetch('https://dummyjson.com/comments');
    if(loading) return <h5>Fetching Recipes! Please wait..</h5>
    
    return <div>
        <h1>Comment List Page</h1>
        <ul>
            {data?.comments?.length >0
            ?( data?.comments?.map((commentsItem)=>(
                <div key={commentsItem?.id}>
                    
                    <label>{commentsItem?.body}</label>
                    <h5>{commentsItem?.likes}</h5>
                </div>
            ))):null}
        </ul>
    </div>
}

export default CommentList;