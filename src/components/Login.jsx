
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
        <div className="h-screen w-screen bg-slate-50 flex flex-row justify-center items-center">
            <form className="h-[26rem] w-[24rem] md:w-[26rem] border-2 border-orange-700 rounded-2xl bg-white box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); flex flex-col gap-6 justify-center items-center">
                    <h1 className="text-2xl  text-black font-bold hover:text-orange-400">LOGIN</h1>
                <input className="px-9 py-4 border-b-2 border-orange-400 outline-none bg-orange-50" type="email" name="email" id="em" placeholder="E-Mail" required/>
                <input className="px-9 py-4 border-b-2 border-orange-400 outline-none bg-orange-50" type="password" name="pass" id="ps" placeholder="Password" required/>
                <div>
                <p className="font-semibold text-orange-400">
          New? <Link to="/SignUp" className="text-black">Register</Link>
        </p>
                </div>
                <input type="submit" value="Submit" className="px-10 py-3 bg-orange-300 hover:text-white text-black font-semibold hover:bg-orange-500 border-4 border-orange-300 hover:border-orange-500 rounded-md"/>
            </form>
        </div>   
    </>
  )
}

export default Login