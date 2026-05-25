import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import {SigninSchema } from '../Schema/SignInForm'
import loginServices from '../Services/loginservices'



export default function SignInForm() {
    const {register, handleSubmit,formState:{ errors }} = useForm({resolver:yupResolver(SigninSchema)})
    
    const onSubmit = async (data)=>{
        console.log(data)
        const response = await loginServices(data.email, data.password);
        if (response.status === 200){
            console.log("Login Successfull", response.data)
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
        }
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