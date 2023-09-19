"use client"
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Page = () => {

    const {data: session}= useSession();

    const [providers,setProviders]= useState(null);

    useEffect(()=>{
        const setUpProviders = async ()=>{
            const response = await getProviders();

            setProviders(response);
        }

        setUpProviders();
    })

  return (
    <div>
        {
            session?.user ? (
                <div>
                    <button className='btn_style' onClick={()=>{signOut()}}>Sign Out</button>
                    <div className=''>
                        <Image
                        src={session?.user.image}
                        width={50}
                        height={50}
                        className='rounded-full'
                        alt='profile'
                        />
                    </div>
                    <div><Link href='/comment' className='w-28 h-12 border border-black '> Write comment</Link></div>
                    
                </div>
            ):(
                <>
                {providers && Object.values(providers).map((provider)=>(
                    <div>
                    <button 
                    className='btn_style' 
                    type='button'
                    key={provider.name} 
                    onClick={()=>{signIn(provider.id)}}
                    >Sign In</button>
                  
                    </div>
                ))}
                </>
            )
        }
    </div>
  )
}

export default Page