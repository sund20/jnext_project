import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <section className='w-full  bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText relative'>
      <div className='text-xs ps-24 pt-20 bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText'>
        <p>AdobeStock Image By: <i>DC Studio, MyCreative, agcreativelab, A Stockphoto, infiniteFlow, Take Production</i></p>
        <p>iStockphoto video By: <i>Kanenori</i></p>

    </div>
    <div className='w-full px-[12%] text-center scroll-mt-20 bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText'> 
     
           {/* Icon Footer */}

      <div className='text-center sm:flex items-center bg-stone-50 justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-lightText dark:bg-darkBg dark:text-darkText text-xs'><p><cite>&#169; 2025 Solis. All right reserved.</cite></p>
      <ul className='flex items-center justify-center gap-10  text-xs'>
        <li><a href='https://github.com/sund20' target='_blank' rel='noopener noreferrer'>Github</a></li>
        <li><a href='https://www.linkedin.com/in/sunita-d-69041918a' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
        <li><a href='#'>Privacy Policy</a></li>
        <li><a href='#'>Terms of Service</a></li>
      </ul>
      </div>
    </div></section>
  )
}

export default Footer
