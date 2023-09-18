"use client"
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';
import { useEffect, useState } from 'react';

const Page = () => {

    const IsUserLoggedIn= true;

    const [providers,setProviders]= useState(null);

    useEffect(()=>{
        const setProviders = async ()=>{
            const response = await getProviders();

            setProviders(response);
        }

        setProviders();
    })

  return (
    <div>
        {
            IsUserLoggedIn ? (
                <div>
                    <button className='btn_style' onClick={()=>{signOut()}}>Sign Out</button>
                    
                </div>
            ):(
                <>
                {providers && Object.values(providers).map((provider)=>(
                    <button 
                    className='btn_style' 
                    type='button'
                    key={provider.name} 
                    onClick={()=>{signIn(provider.id)}}
                    >Sign In</button>
                ))}
                </>
            )
        }
    </div>
  )
}

export default Page