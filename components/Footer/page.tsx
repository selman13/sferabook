import React from 'react'
import Loqo from '../common/Loqo'
import Text from '../common/Text'
import SocialMedia from '../common/SocialMedia'

const Footer = () => {
  return (
    <div className='bg-red-800 p-2 flex justify-between items-center'>
        <div className='flex flex-col gap-5'>
            <Loqo/>
            <Text/>
        </div>
        <div>
            <SocialMedia/>
        </div>
    </div>
  )
}

export default Footer