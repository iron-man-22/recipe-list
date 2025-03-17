import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, fetchProductList } from "./api";
import { useState } from "react";


function ReactQueryDemo(){

    const [productTitle,setProductTitle]=useState('');

    const {data:productList,isLoading}=useQuery({
        queryKey:["productList"],
        queryFn:()=> fetchProductList()
    })

    const getQueryClient=useQueryClient();

    const {mutateAsync:handleAddNewProductMutation}=useMutation({
        mutationFn:addNewProduct,
        onSuccess:()=>{
            getQueryClient.invalidateQueries(["productList"])
        }
    });

    async function handleNewProduct() {
        await handleAddNewProductMutation(productTitle);
        setProductTitle("");
    }

    if(isLoading) return <h2>Finding Products. Please Wait..</h2>
    
    
    return (
        <div>
            <h1>React Query Demo</h1>
            <div>
                <input value={productTitle} onChange={(event)=>setProductTitle(event.target.value)} name="name" placeholder="Enter Product Title"/>
                <button onClick={handleNewProduct} disabled={productTitle.trim()===''} type="button">Add New Product</button>
            </div>
            <ul>
                {
                    productList.length >0 ?
                    productList.map((product)=><li key={product.id}>{product.title}</li>)
                    : <h3>No Products Found..</h3>
                }
            </ul>
        </div>
    );
}

export default ReactQueryDemo;