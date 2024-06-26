import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'





const RightSideNav = () => {
    return (
        <div>

           <div className="p-4 space-y-3 mb-6">
            <h2 className="text-3xl">Login With</h2>
            <button className="btn btn-outline w-full"> <FaGoogle></FaGoogle>Login with Google </button>
            <button className="btn btn-outline w-full"> <FaGithub></FaGithub>Login with GitHub</button>
           </div>

           <div className="p-4 mb-6">
            <h2 className="text-3xl">Find Us On</h2>
            <a className="flex p-4 text-lg items-center border rounded-t-lg" href=""> <FaFacebook className="mr-3"></FaFacebook> Facebook</a>
            <a className="flex p-4 text-lg items-center border-x " href=""> <FaTwitter className="mr-3"></FaTwitter>Twitter </a>
            <a className="flex p-4 text-lg items-center border rounded-b-lg" href=""> <FaInstagram className="mr-3"></FaInstagram> Facebook</a>
           </div>
           {/* Q Zone */}
           <div className="p-4 space-y-3 mb-6">
            <h2 className="text-3xl">Q Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
           </div>
        </div>
    );
};

export default RightSideNav;