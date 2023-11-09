import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";



const SignUp = () => {

    const navigate = useNavigate();

    const {createUser, updateUser} = useContext(AuthContext)

    const handleSignUp =(e) =>{

        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.url.value;
        const userInfo = {name, email, password, image}
        console.log(userInfo);

        createUser(email, password)
        .then(userCredential=>{
           const user = userCredential.user
           updateUser(user, name, image)
           toast.success('Account Created Successfully!')
           navigate('/');  
                })
        .catch((error) => {
            toast.error(`${error.message}`)
        })
        


    }
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>ServiSwap | Sign UP</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type="text" name="name"className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required=""/>
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email"className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password"placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  {/* photo url */}
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                      <input type="text" name="url"className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://example.com" required=""/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label  className="font-light text-gray-500 dark:text-gray-300">I accept the <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</span> </label>
                      </div>
                  </div>
                  <button type="submit" className="w-full bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign Up</button>
                  <NavLink to='/log-in' className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <span href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</span>
                  </NavLink>
              </form>
          </div>
      </div>
  </div>
</section>
        </div>
    );
};

export default SignUp;