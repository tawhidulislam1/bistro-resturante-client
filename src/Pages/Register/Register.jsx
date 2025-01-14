import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider";

import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const Register = () => {
    const { creatUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        creatUser(data.email, data.password)
            .then(result => {
                console.log("User created:", result.user);
                Swal.fire("Account Create Succesfully!");
            })
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="Name" name="name"{...register("name", { required: true })} placeholder="Name" className="input input-bordered" required />
                            {errors.name && <span>Name field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email"{...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            {errors.name && <span>Email field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password"{...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character",
                                },
                            })} placeholder="password" className="input input-bordered" required />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p><small>Have you have account<Link className='link' to={"/login"}>Login!</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;