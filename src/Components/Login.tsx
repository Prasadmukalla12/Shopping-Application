import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./log.css"
import {useCookies} from "react-cookie"
import {useFormik} from "formik"
import axios from "axios"




export default function Login(){

    const navigate = useNavigate()
    const [,setCookie,] = useCookies(['user_id'])

    const formik = useFormik({
        initialValues : {
            user_id:"",
            password:""
        },
        onSubmit : (user)=>{
            axios.get("http://localhost:4100/users")
            .then(res=>{
                var result = res.data.find((val:any)=>user.user_id === val.user_id)
                if(result){
                    if(user.password === result.password){
                        setCookie("user_id",user.user_id,{expires : new Date("2027-06-12")})
                        navigate("/home")
                    }else{
                        alert("Invalid password")
                    }
                }else{
                    alert("User not found")
                }
            })
        }
    })

    return(
        <div className="container-fluid bg-dark p-2 log">
            <header className="border border-2 border-white mt-1">
                <h4 className="text-center fst-italic p-3 text-white">Welcome to Shopper.co</h4>
            </header>
            <div className=" d-flex flex-column justify-content-center align-items-center p-3">
                <form onSubmit={formik.handleSubmit} className="rounded rounded-3 frm  border border-2 p-3">
                    <h3 className="text-center"><span className="bi bi-person-fill">User Login</span></h3>
                    <div className="my-3">
                        <TextField onChange={formik.handleChange} name="user_id" type="text" variant="standard" label="UserID" />
                    </div>
                    <div className="my-3">
                        <TextField name="password" onChange={formik.handleChange} type="password" variant="standard" label="Password" />
                    </div>
                    <div className="mt-4">
                        <div>
                            <Button type="submit" variant="contained" color="success" fullWidth>Login</Button>
                        </div>
                        <div className="text-center mt-2">
                            <Link to="/register" className="fw-bold text-white">New user?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}