import React, { useRef, useState } from 'react';
import google from '../../assets/images/google.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import teachingReg from '../../assets/images/teacherRegistration.jpg';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { updateProfile, sendEmailVerification } from 'firebase/auth';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [
        createUserWithEmailAndPassword,
        user,
        error,
        loading,
        sending,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // const handleRegister = async event => {
    //     event.preventDefault();
    //     createUserWithEmailAndPassword(email, password);
    //     toast('verification email sent');
    //     navigate(from, { replace: true });
    // }

    const handleRegister = async (event) => {
        event.preventDefault();
      
        try {
          // Create the user with email and password
          const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
          // Update the user's display name
          await updateProfile(user, {
            displayName: fullName, 
          });
      
      
          toast("Verification email sent");
          navigate(from, { replace: true });
        } catch (error) {
          // Handle any errors
          console.error("Registration Error:", error);
        }
      };
    
//   const [createUserWithEmailAndPassword, user, error, loading, sending] = useCreateUserWithEmailAndPassword(auth);

//   const handleRegister = async (event) => {
//     event.preventDefault();

//     try {
//       // Create the user with email and password
//       await createUserWithEmailAndPassword(email, password);

//       // Update the user's display name
//       const currentUser = auth.currentUser;
//       await updateProfile(currentUser, {
//         displayName: fullName, // Replace 'name' with the actual name value
//       });

//       // Send email verification
//       await sendEmailVerification(currentUser);

//       toast('Verification email sent');
//       navigate(from, { replace: true });
//     } catch (error) {
//       // Handle any errors
//       console.error('Registration Error:', error);
//     }
//   };


    const [error1, setError1] = useState('');
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');



    // registration system  

    const navigateLogin = event => {
        navigate('/login');
    }





    return (
        <div>
            <div className="flex flex-col sm:flex-row">
            <div className="m-auto py-12 px-6 sm:p-20 xl:w-6/12">
                <div className="space-y-4">

                    <p className="font-medium text-lg text-gray-600">Welcome to Edu Match ! Please sign up </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    <button className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                        <div className="flex gap-4 justify-center">
                            <img src={google} className="w-5" alt="" />
                            <span className="block w-max font-medium tracking-wide text-sm text-blue-700">with  Google</span>
                        </div>
                    </button>
                    <button className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                        <div className="flex gap-4 items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            <span className="block w-max font-medium tracking-wide text-sm text-white">with Github</span>
                        </div>
                    </button>
                </div>

                <div role="hidden" className="mt-10 border-t">
                    <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 ">Or</span>
                </div>

                <form onSubmit={handleRegister} className="space-y-6 py-6">




                    <div>
                        <input
                            type="name"
                            id='fullName'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                        />
                    </div>

                    <div className="flex flex-col items-end">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="What's the secret word ?"
                            className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                        />

                    </div>

                    <div>
                        <button type='submit' className="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                            <span className="font-semibold text-white text-lg">Register</span>
                        </button>
                        <a href="#" type="reset" className="w-max p-3 -ml-3">
                            <span onClick={navigateLogin} className="text-sm tracking-wide text-blue-600">Memeber Login</span>
                        </a>
                    </div>

                </form>

                <div className="border-t pt-12">
                    <div className="space-y-2 text-center">
                        <img src="../public/images/logo.svg" className="w-40 m-auto grayscale" alt="" />

                    </div>
                </div>
            </div>

            <div className="hidden sm:block py-12 px-6  sm:p-20 xl:w-6/12">
                    <img src={teachingReg} alt="" />
                </div>

            </div>
            

        </div>
    );
};

export default Register;