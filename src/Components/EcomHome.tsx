import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import "./EcomHome.css"
import "./Styles.css"
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom"
import { removeFromCart } from "../slicer/slicer"

  import { useEffect} from "react";
   import {Carousel} from "bootstrap"
import { useDispatch, useSelector } from "react-redux"


export default function ECommerceHome(){

    const [ cookie, , removeCookie] = useCookies(['user_id'])
    const navigate = useNavigate()
    const products = useSelector((state: any)=>state.products)
    const productsCount = useSelector((state:any)=>state.productCount)
    const dispatch = useDispatch()

    function handleRemoveClick(product:any){
        dispatch(removeFromCart(product))
    }

    var total = 0;
    products.map((product:any)=>{
        total+=product.price
    })

    function signOutClick(){
        removeCookie('user_id')
        navigate("/")
    }

    function handleClick(action:any){
       switch(action){
          case "mens":
            navigate("/mensdashboard")
            return;
        case "womens":
            navigate("/womensdashboard")
            return;
        case "kids":
            navigate("/kidsdashboard")
            return;
        case "mobiles":
            navigate("/mobilesdashboard")
            return
       }
    }




useEffect(() => {
   const element = document.querySelector("#banner");
   if (element) {
      new Carousel(element, {
         interval: 3000,
         ride: "carousel"
      });
   }
   if(!cookie['user_id']){
    navigate("/")
   }
}, []);


    return(
        <div className="container-fluid" id="home">

            {/* Header Section */}

             <header className="bg position-sticky top-0 z-3" >
                <nav className="navbar navbar-expand-lg p-3 navbar-dark">
                <div className="navbar-brand">
                    <span className="fs-4 fw-bold text-white fst-italic">SHOPPER.CO</span>
                </div>
                <div>
                    <Button variant="outlined" color="warning" onClick={signOutClick}>Sign out</Button>
                </div>
                <div className="ms-5">
                    <Button data-bs-target="#cart" data-bs-toggle="offcanvas" variant="contained" color="primary" className="bi bi-cart4 position-relative"><span className="badge bg-danger position-absolute" style={{top:"-8px", right:"8px"}}>{productsCount}</span></Button>
                </div>
                <Button data-bs-toggle="collapse" data-bs-target="#menu" variant="outlined" className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <div className="navbar-collapse collapse" id="menu">
                    <ul className="list-unstyled navbar-nav fw-bold ms-auto">
                        <li className="nav-item"><a href="#home" className="nav-link"><span className="nav-text text-white">Home</span></a></li>
                        <li className="nav-item"><a href="#blog" className="nav-link"><span className="nav-text text-white">Blog</span></a></li>
                        <li className="nav-item"><a href="#about" className="nav-link"><span className="nav-text text-white">About</span></a></li>
                        <li className="nav-item"><a href="#help" className="nav-link"><span className="nav-text text-white">Help</span></a></li>
                    </ul>
                </div>
             </nav>
             </header>

             <div className="offcanvas offcanvas-end" id="cart">
                    <div className="offcanvas-header d-flex justify-content-between align-items-center">
                            <h3>Cart items</h3>
                            <span><button className="btn btn-close" data-bs-dismiss="offcanvas"></button></span>
                            <span><Link to="/payments" className="btn btn-secondary">Pay</Link></span>
                    </div>
                    <div className="offcanvas-body">
                        <table className="table table-hover table-bordered table-secondary">
                            <thead>
                                <th>product</th>
                                <th>title</th>
                                <th>Action</th>
                                <th>Price</th>
                            </thead>
                            <tbody>
                                {
                                    products.map((product:any,i:number)=>
                                       <tr key={i}>
                                        <td><img src={product.image} height="100" width="100" /></td>
                                        <td className="fw-bold">{product.title}</td>
                                        <td><button  onClick={()=>{handleRemoveClick(product)}} className="btn btn-danger bi bi-trash-fill"></button></td>
                                        <td className="fw-bold">{product.price}</td>
                                       </tr>
                                    )
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={3}>Total</td>
                                    <td className="fs-5 fw-bold">{total.toLocaleString("en-in")}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

             {/* Article Section */}

             <article className="p-3 border border-2 mt-1 mb-1 bg-dark">
                 <h4 className="text-warning text-center"><span className="bi bi-lightning-fill"></span><span>New Offers Started</span><span className="bi bi-lightning-fill"></span></h4>
             </article>

             {/* Entry Point */}

             <section className="bg">
                 <main className="row mt-2">
                    <div className="col-12  col-md-6 col-lg-3 col-sm-6 p-3 mb-2 ">
                        <div onClick={()=>{handleClick("mens")}} className="mensFashion rounded rounded-3 d-flex flex-column justify-content-end align-items-center">
                            <div className="mb-5">
                                <span><span className="men me-2">Men's Clothing</span><span><Link to="/mensdashboard" className="bi bi-arrow-right text-warning fs-4"></Link></span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 p-3 col-md-6 col-lg-3 col-sm-6 mb-2 ">
                        <div  onClick={()=>{handleClick("womens")}} className="womensFashion rounded rounded-3 d-flex flex-column justify-content-end align-items-center">
                            <div className="mb-5">
                               <span><span className="men me-2">Women's Clothing</span><span><Link to="/womensdashboard" className="bi bi-arrow-right text-dark fs-4"></Link></span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 p-3 col-md-6 col-lg-3 col-sm-6 mb-2 ">
                        <div  onClick={()=>{handleClick("kids")}} className="kidsFashion rounded rounded-3 d-flex flex-column justify-content-end align-items-center">
                            <div className="mb-5">
                               <span><span className="men me-2">Kid's Clothing</span><span><Link to="/kidsdashboard" className="bi bi-arrow-right text-dark fs-4"></Link></span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 p-3 col-md-6 col-lg-3 col-sm-6 mb-2">
                        <div  onClick={()=>{handleClick("mobiles")}} className="mobiles rounded rounded-3 d-flex flex-column justify-content-end align-items-center">
                            <div className="mb-5">
                               <span><span className="men me-2">Electronics</span><span><Link to="/mobilesdashboard" className="bi bi-arrow-right text-dark fs-4"></Link></span></span>
                            </div>
                        </div>
                    </div>
                 </main>

                 {/* Carousel Section */}

                 <div className="container-fluid my-4">
                    <div className=" carousel slide" data-bs-ride="carousel" id="banner">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/carousel1.jpg" height="280" className="w-100 d-block" />
                            </div>
                            <div className="carousel-item">
                                <img src="/carousel2.jpg" height="280" className="w-100 d-block" />
                            </div>
                            <div className="carousel-item">
                                <img src="/carousel3.jpg" height="280" className="w-100 d-block" />
                            </div>
                        </div>
                        <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#banner"><span className="carousel-control-next-icon"></span></button>
                            <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#banner"><span className="carousel-control-prev-icon"></span></button>
                            <div className="carousel-indicators" >
                                <button data-bs-slide-to="0" className="active" data-bs-target="#banner"></button>
                                <button data-bs-slide-to="1" data-bs-target="#banner"></button>
                                <button data-bs-slide-to="2" data-bs-target="#banner"></button>
                            </div>
                    </div>
                 </div>
                 <br /><br />

                 {/* Blog Section */}

                 <div className="blog mb-3 p-2" id="blog">
                    <h3 className="text-center fst-italic text-warning p-2">Latest from out blogs</h3>
                    <br /><br />
                    <div className="row p-2 g-2">
                        <div className="col-12 col-md-6">
                            <img src="/trends.jpg" className="card-img-top" height="280" />
                        </div>
                        <div className="col-12 col-md-6 h-100">
                            <p className="p-3 fs-4 fw-bold fst-italic text-white">Discover the hottest fashion trends for 2026 and stay ahead of the style curve</p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="row p-2 mt-4 g-2">
                        <div className="col-12 col-md-6">
                            <p className="p-3 fs-4 fw-bold fst-italic text-white">Learn top tips to save money and make the most of your online shopping</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="/smartShop.jpg" className="card-img-top" height="280" />
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="row p-2 mt-4 g-2">
                        <div className="col-12 col-md-6">
                            <img src="/deals.jpg" className="card-img-top" height="280" />
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="p-3 fs-4 fw-bold fst-italic text-white">Checkout the best discounts and offers available this week.</p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="row p-2 mt-4 g-2">
                        <div className="col-12 col-md-6">
                            <p className="p-3 fs-4 fw-bold fst-italic text-white">We are providing fastest delivery and free delivery above 599/- orders. Don't miss out.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="/delivery.jpg" className="card-img-top" height="280" />
                        </div>
                    </div>
                    <br />
                 </div>
                  <br /><br />

                  {/* About Section */}

                  <div className="about text-white" id="about">
                    <h3 className="text-center fst-italic mb-5 text-warning">Welcome to Shopper.co</h3>
                    <div className="row p-3 mt-3">
                        <div className="col-12 col-md-6">
                            <img src="/about.jpg" height="350" className="rounded rounded-3 img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column">
                            <span className="fs-4 fw-semibold">We are an online shopping platform that provides high-quality fashion and 
                              lifestyle products at affordable prices. Our goal is to deliver trendy products 
                               with a smooth and enjoyable shopping experience for our customers. We focus on customer satisfaction, fast delivery, and reliable service. 
                             Our mission is to make online shopping simple for everyone.
                            </span>
                            <span className="fs-4 mt-4 fw-semibold" >
                                Thank you...
                            </span>
                        </div>
                    </div>
                  </div>
                  <br /><br />

                  {/* Help Section */}

                  <div className="container-fluid bg-secondary mt-4 p-3" id="help">
                    <div>
                        <h3 className="text-center text-white mb-4">FAQ's</h3>
                        
                        <Accordion >
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography sx={{fontSize:"22px",fontWeight:"bold",fontStyle:"italic"}}>what is Shopper.co</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{fontSize:"18px",fontWeight:"bold"}}>
                                    Shopper.co is one of the most famous shopping platform, Where we provided Men, Women, Kids and Mobiles related products. We also provide fastest and free delevery 
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <br />
                        <Accordion >
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography sx={{fontSize:"22px",fontWeight:"bold",fontStyle:"italic"}}>How to login/register Shopper.co?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{fontSize:"18px",fontWeight:"bold"}}>
                                    Go to the Login page and enter your userid and password. If you don't have any account just click new register link and add your details and login the page.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <br />
                        <Accordion >
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography sx={{fontSize:"22px",fontWeight:"bold",fontStyle:"italic"}}>Where can I watch?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{fontSize:"18px",fontWeight:"bold"}}>
                                    Watch anywhere, anytime. Login in with your Shopper account to watch instantly on the web at shopper.com from your personal computer or on any internet-connected device that offers the Shopper.co app, including smart TVs, smartphones, tablets, and game consoles.

                                   You can also move your favourite items into the cart and you can buy anytime.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <br />
                        <Accordion >
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography sx={{fontSize:"22px",fontWeight:"bold",fontStyle:"italic"}}>Is it trustable shopping platform?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{fontSize:"18px",fontWeight:"bold"}}>
                                    yes. It is trustable Shopping platform. Here we provide quality products with less prize. We also provide the customer support and reasonable warranty.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                  </div>
             </section>
             {/* Footer Section */}
             <footer className="my-4">
                 <div className="bg-dark text-white p-3" style={{height:"250px"}}>
                   <div className="row h-100 p-3">
                    <div className="col-12 col-md-6 mb-3 d-flex flex-column justify-content-start align-items-start">
                        <h2>Shopper.co</h2>
                    </div>
                    <div className="col-12 col-md-6">
                        <h5>Contact Us : </h5>
                        <span className="d-block my-3">Ph : +91-9876543210</span>
                        <span className="d-block mb-3">Email : support@shopper.co</span>
                        <span><a href="https://www.facebook.com" target="_blank"><span className="bi bi-facebook"></span></a></span>
                        <span className=" mx-3"><a href="https://www.x.com" target="_blank" className="text-white"><span className="bi bi-twitter-x"></span></a></span>
                        <span><a href="https://www.instagram.com" target="_blank" className="text-white"><span className="bi bi-instagram"></span></a></span>
                        <span className=" mx-3"><a href="https://www.youtube.com" target="_blank" className="text-danger"><span className="bi bi-youtube"></span></a></span>
                    </div>
                   </div>
                 </div>
             </footer>
        </div>
    )
}