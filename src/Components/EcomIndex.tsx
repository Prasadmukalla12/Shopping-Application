import { BrowserRouter, Route, Routes} from "react-router-dom";
import { lazy, Suspense } from "react";

const Login = lazy(()=>import("./Login"))
const ECommerceHome = lazy(()=>import("./EcomHome"))
const Register = lazy(()=>import("./register"))
const MensDashboard = lazy(()=>import("./mensDashboard"))
const WomensDashboard = lazy(()=>import("./womensDashboard"))
const KidsDashboard = lazy(()=>import("./kidsDashboard"))
const MobilesDashboard = lazy(()=>import("./mobilesDashboard"))
const Payments = lazy(()=>import("./payment"))





export default function ECommerceIndex(){

    return(
        <div className="container-fluid">
            <BrowserRouter>
               <Suspense fallback={<h3 className="text-center mt-5 bg-dark text-white" style={{height:"700px"}}>Please wait...</h3>}>
                <Routes>
                 <Route path="/" element={<Login/>} />
                 <Route path="register" element={<Register/>} />
                 <Route path="home" element={<ECommerceHome/>}/>
                 <Route path="mensdashboard" element={<MensDashboard/>}/>
                 <Route path="womensdashboard" element={<WomensDashboard/>}/>
                 <Route path="kidsdashboard" element={<KidsDashboard/>}/>
                 <Route path="mobilesdashboard" element={<MobilesDashboard/>}/>
                 <Route path="payments" element={<Payments/>}/>
               </Routes>
               </Suspense>
            </BrowserRouter>
        </div>
    )
}