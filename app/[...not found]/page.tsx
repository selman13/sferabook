import Button from '@/components/common/Button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-5'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold'>OOPS...</h1>
          <p>Axtardığınız səhifə mövcud deyil</p>
        </div>
        <div>
          <Link href="/">
            <Button text='Əsas səhifəyə qayıdın'/>
          </Link>
        </div>
    </div>
  )
}

export default NotFound