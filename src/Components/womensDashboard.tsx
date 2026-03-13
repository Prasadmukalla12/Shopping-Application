import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useLayoutEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { addToCartProduct } from "../slicer/slicer"
import { useCookies } from "react-cookie"


export default function WomensDashboard(){

    const [products,setProducts]= useState([])
    const dispatch = useDispatch()
    const [cookie, , ,] = useCookies(['user_id'])
    const navigate = useNavigate()
    const [searchText,setSearchText] = useState("")

    function LoadProducts(){
        axios.get("http://localhost:4100/womens")
        .then(res=>{
            setProducts(res.data)
        })
    }

    function handleChange(e:any){
        setSearchText(e.target.value)
    }

    function handleButtonClick(product:{}){
        dispatch(addToCartProduct(product))
        alert("Added to Cart")
    }

    const filterProducts = products.filter((product:any)=>product.title.toLowerCase().includes(searchText.toLowerCase()))

    useLayoutEffect(()=>{
        if(!cookie['user_id']){
            navigate("/")
        }
        LoadProducts()
    },[])

    return(
        <div className="container-fluid">
            <div className="p-2 d-flex justify-content-around align-items-center position-sticky top-0 z-3 bg-white">
                <div><Link to="/home" className="btn btn-primary fw-bold"><span className="bi bi-house-fill">Home</span></Link></div>
                <div><TextField onChange={handleChange} type="text" variant="outlined" color="warning" placeholder="Search Products"/></div>
            </div>
            {
                filterProducts.map((product:any)=>
                    <div className="row p-1 my-5 border border-2" key={product.id}>
                       <div className="col-12 col-md-4 col-sm-3">
                         <img src={product.image} height="300" width="250" />
                       </div>
                       <div className="col-12 col-md-8 col-sm-9">
                         <h3>{product.title}</h3>
                         <div>
                            <span className="p-1"><span className="badge bi bi-star-fill bg-success p-1">{product.ratings.rate}</span> &nbsp; <span className="fw-bold bi bi-hand-thumbs-up-fill text-secondary">{product.ratings.likes}</span></span>
                         </div>
                         <div className="mt-4">
                            <span className="bi bi-currency-rupee fs-4 fw-bold"><span className="fs-4 fw-semibold text-secondary"><del>{product.mrp.toLocaleString("en-in")}</del></span><span className="ms-1 fw-bold fs-3">{product.price.toLocaleString("en-in")}</span></span>
                         </div>
                       <div className="mt-2">
                        {
                            product.offers.map((off:string,i:number)=>
                               <span className="d-block text-secondary fw-semibold" key={i}>{off}</span>
                            )
                        }
                       </div>
                       <div className=" d-flex mt-4">
                         <div>
                            <Button variant="contained" color="warning" onClick={()=>{handleButtonClick(product)}}>Buy Now</Button>
                         </div>
                         <div className="ms-3">
                            <Button variant="contained" color="warning"  onClick={()=>{handleButtonClick(product)}}>ADD Cart</Button>
                         </div>
                       </div>
                       </div>
                   </div>
                )
            }
        </div>
    )
}