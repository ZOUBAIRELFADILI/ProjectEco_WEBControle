import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct, getProductById, updateProduct } from "../services/product.services";
import "./addEdit.css";

export function ProductEdit(){
    const [name,setName]=useState("");
    const [price,setPrice]=useState(0);
    const navigate=useNavigate()
    const {id}=useParams();
    useEffect(()=>{
        fetchProduct();
    },[]);
    async function fetchProduct(){
        const resp=await getProductById(id);
        const p=resp.data;
        setName(p.name);
        setPrice(p.price);
    }
    
    
    function handlForm(event){
        event.preventDefault();
        const p={"_id":id,"name":name,"price":price}
        updateProduct(p);
        navigate("/products");
    }
    return(
      <form onSubmit={(e)=>handlForm(e)}>
      <label htmlFor='name'>Name: </label>
      <input type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <br/>
      <label htmlFor='price'>Prix: </label>
      <input type="text" id='name' value={price} onChange={(e)=>setPrice(e.target.value)}/>
      <br/>
      <button type="submit" value={"Enregistrer"}>Ajouter</button>
      <button type="reset" value={"Annuler"}>Annuler</button>
  </form>
    )}