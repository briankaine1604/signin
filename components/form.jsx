import Link from 'next/link'
import React from 'react'

const Form = ({
    type, post, setPost, submitting, handleSubmit
}) => {
  return (
    <section className='w-full flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-slate-500'>{type} post</h1>
        <p>{type} and Post your Comment </p>
        <form onSubmit={handleSubmit}  className='w-1/2 h-48'>
            <label >
                <span>Your Comment</span>
                <textarea 
                value={post.prompt}
                onChange={(e)=>setPost({...post,
                prompt: e.target.value
                })}
                placeholder='Write comment here'
                required
                className='w-full h-full '
                ></textarea>
            </label>
        </form>
        <form onSubmit={handleSubmit}  className='w-1/2 h-48 mt-10'>
            <label >
                <span>Tag</span>
                <input 
                value={post.tag}
                onChange={(e)=>setPost({...post,
                tag: e.target.value
                })}
                placeholder='#tag'
                required
                className='w-full h-full'
                ></input>
            </label>
        </form>
        <Link href='/' className='text-gray-300 mt-10'>Cancel</Link>
        <button type='submit' disabled={submitting} >
        {submitting ? `${type}...`:type}
        </button>
    </section>
  )
}

export default Form