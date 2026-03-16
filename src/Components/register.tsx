import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./register.css"
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup"


export default function Register(){

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues : {
            user_id : "",
            user_name : "",
            password : "",
            email : ""
        },
        onSubmit : (user)=>{
            var result = {
                user_id : user.user_id,
                user_name : user.user_name,
                password : user.password,
                email : user.email
            }
            axios.post("http://localhost:4100/users", result)
            .then(()=>{
               alert("User registered")
               navigate("/")
            })
        },
        validationSchema : yup.object({
            user_id : yup.string().required("user_id required"),
            user_name : yup.string().required("user_name required"),
            password : yup.string().required("password required"),
            email : yup.string().required("email required")
        })
    })

    return(
        <div className="container-fluid bg-dark p-2 register">
            <header className="border border-2 border-white mt-1">
                <h4 className="text-center fst-italic p-3 text-white">Welcome to Shopper.co</h4>
            </header>
            <div className=" d-flex flex-column justify-content-center align-items-center p-3">
                <form onSubmit={formik.handleSubmit} className="rounded rounded-3 border border-2 frm p-3">
                    <h3 className="text-center"><span className="bi bi-person-circle">User Register</span></h3>
                    <div className="mt-3">
                        <TextField onChange={formik.handleChange} name="user_id" type="text" variant="standard" label="UserID" />
                    </div>
                    <div>
                        <Typography sx={{fontWeight:"bold",color:"red"}}>{formik.errors.user_id}</Typography>
                    </div>
                    <div className="mt-3">
                        <TextField onChange={formik.handleChange}   name="user_name" type="text" variant="standard" label="UserName" />
                    </div>
                    <div>
                        <Typography sx={{fontWeight:"bold",color:"red"}}>{formik.errors.user_name}</Typography>
                    </div>
                    <div className="mt-3">
                        <TextField onChange={formik.handleChange}  name="password" type="password" variant="standard" label="Password" />
                    </div>
                    <div>
                        <Typography sx={{fontWeight:"bold",color:"red"}}>{formik.errors.password}</Typography>
                    </div>
                    <div className="mt-3">
                        <TextField  onChange={formik.handleChange} name="email" type="email" variant="standard" label="email" />
                    </div>
                    <div>
                        <Typography sx={{fontWeight:"bold",color:"red"}}>{formik.errors.email}</Typography>
                    </div>
                    <div className="mt-4">
                        <div>
                            <Button type="submit" variant="contained" color="success" fullWidth>Register</Button>
                        </div>
                        <div className="text-center mt-2">
                            <Link to="/" className="fw-bold text-white">Already have?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}