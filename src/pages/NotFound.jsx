// import Navbar from "../components/Navbar"
import Opps from "../assets/notfound.svg"
import { Link } from "react-router"



export default function NotFound() {
    return (
        <>
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    
                <img src={Opps} alt="404" className="w-64 md:w-94 " />
                <div>
                
                    <p className="text-gray-600  mt-2 mb-2">Opps! We can't seem to find the page you looking for</p>
                </div>
                <div>
                    <Link to="/" ><button className="bg-gray-700 text-white px-4 py-2 hover:bg-black rounded-full text-sm font-bold cursor-pointer">Go To HomePage</button></Link>
                </div>
            </section>

        </>

    )
}
