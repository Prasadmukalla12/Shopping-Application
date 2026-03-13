
import { Link } from "react-router-dom"
import "./EcomHome.css"

export default function Payments(){

    return(
        <div className="container-fluid bg" style={{height:"650px"}}>
            <div className="p-2">
                <Link to="/home" className="btn btn-primary">Back to home</Link>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="p-3 border border-2 rounded rounded-2 page ">
                    <h4 className="text-center ">Choose Payment </h4>
                    <hr />
                    <table className="table table-hover table-bordered">
                        <tbody>
                            <tr className="input-group">
                                <td><button className="bi bi-phone-fill btn btn-outline-dark"></button></td>
                                <td><button className="btn btn-primary fw-semibold">PhonePay..</button></td>
                                <td><a href="https://www.phonepe.com/" target="_blank" className="btn btn-outline-dark">send</a></td>
                            </tr>
                            <tr className="input-group">
                                <td><button className="bi bi-phone-fill btn btn-outline-dark"></button></td>
                                <td><button className="btn btn-primary fw-semibold">Googlepay</button></td>
                                <td><a href="https://paytm.com/" target="_blank" className="btn btn-outline-dark">send</a></td>
                            </tr>
                            <tr className="input-group">
                                <td><button className="bi bi-phone-fill btn btn-outline-dark"></button></td>
                                <td><button className="btn btn-primary fw-semibold">PaytmPay..</button></td>
                                <td><a href="https://paytm.com/" target="_blank" className="btn btn-outline-dark">send</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}