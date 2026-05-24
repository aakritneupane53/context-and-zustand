import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import {SigninSchema } from '../Schema/SignInForm'



export default function SignInForm() {
    const {register, handleSubmit,formState:{ errors }} = useForm({resolver:yupResolver(SigninSchema)})
    
    const onSubmit = (data)=>{
        console.log(data)
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="username"  placeholder="username" {...register("username")}/>
                <p style={{color:'red'}}>{errors.username?.message}</p>
                <input type="password" name="password" placeholder="password" {...register("password")} />
                <p style={{color:'red'}}>{errors.password?.message}</p>
                <button type="submit">Login</button>
            </form>
        </div>
    )

}