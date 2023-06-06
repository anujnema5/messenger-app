"use client"

import React, { useCallback, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Input from '@/app/components/input/Input';
import Button from '@/app/components/Button';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub } from 'react-icons/bs'
import { BsGoogle } from 'react-icons/bs';

type variant = 'LOGIN' | 'REGISTER'

const Authform = () => {
    const [variant, setVariant] = useState<variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else if(variant==='REGISTER') {
            setVariant('LOGIN')
        }
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            //AXIOS REGSITER
        }

        if (variant === 'LOGIN') {
            //Next-Auth SIGN-IN
        }
    }

    const socialAction = (action: string) => {
        // NextAuth Social Sign in
        setIsLoading(true);
    }

    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md '>
            <div className='bg-white px-4 py-8 shadow sm:shadow-lg sm:px-10 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    {variant === "REGISTER" && (<Input label='Name' register={register} id='Name' errors={errors} />)}
                    <Input label='Email Address' type='email' register={register} id='email' errors={errors} disabled={isLoading}/>
                    <Input label='Password' type='password' register={register} id='password' errors={errors} disabled={isLoading}/>
                    <Button variant={variant} fullWidth type='submit' disabled={isLoading}>{variant === "LOGIN" ? "Sign in" : "Register"}</Button>

                </form>
                <div className="relative mt-6">
                    <div className='absolute inset-0 flex items-center '>
                        <div className='w-full border-t border-gray-200 ' />
                    </div>

                    <div className='relative flex justify-center text-sm'>
                        <span className='bg-white px-2 text-gray-500'>Or continue with</span>
                    </div>
                </div>

                <div className='flex mt-6 gap-2'>
                    <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')} />
                    <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')} />
                </div>
                <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
                    <div>{variant === "LOGIN" ? "New to Messenger" : "Already have an account?"}</div>
                    <div onClick={toggleVariant} className='underline cursor-pointer'>{variant === "LOGIN" ? "Create an account" : "Login"}</div>
                </div>
            </div>

        </div>
    )
}

export default Authform