/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    const handleLogin = () =>{
        e.preventDefault();
        console.log(e.cureenTarget)
        const form = new FormData(e.cureenTarget);
        console.log(form.get('password'));
    }



    return (
        <div>
            <Navbar></Navbar>
           <div className="mt-12">
           <h2 className="text-3xl text-center">PLease login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
            </form>
            <p className="text-center mt-4">Don't have an account <Link className="text-blue-600 font-bold" to='/register'>Register</Link> </p>
           </div>
        </div>
    );
};

export default Login;