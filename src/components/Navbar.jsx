import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <div className="flex">
            <p className="text-[18px] p-6 font-inter font-light">Quality Inspection and <br/>NDT Services</p>

            <div className="ml-[68%] mt-5 cursor-pointer">
                <ul className="font-inter flex gap-6">
                    <li className="text-gray-300 hover:text-white">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="text-gray-300 hover:text-white">
                      <Link to="/about-us">About us</Link>
                    </li>
                    <li className="text-gray-300 hover:text-white">
                      <Link to="/about-us">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar