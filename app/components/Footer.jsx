"use client";
import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const Footer = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogType, setDialogType] = useState(null); // 'privacy' or 'terms'

  return (
    <section className='w-screen bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText relative'>
      <div className='text-xs ps-24 pt-20 bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText'>
        <p>AdobeStock Image By: <i>DC Studio, MyCreative, agcreativelab, A Stockphoto, infiniteFlow, Take Production</i></p>
        <p>iStockphoto video By: <i>Kanenori</i></p>
      </div>
      <div className='w-full px-[12%] text-center scroll-mt-20 bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText'>
        {/* Icon Footer */}
        <div className='text-center sm:flex items-center bg-stone-50 justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-lightText dark:bg-darkBg dark:text-darkText text-xs'>
          <p><cite>&#169; 2025 Solis. All right reserved.</cite></p>
          <ul className='flex items-center justify-center gap-10 text-xs'>
            <li>
              <a href='https://github.com/sund20' target='_blank' rel='noopener noreferrer'>
                Github
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/sunita-d-69041918a' target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
            </li>
            <li>
              <button
                className="underline hover:text-orange-500"
                onClick={() => { setShowDialog(true); setDialogType('privacy'); }}
                type="button"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                className="underline hover:text-orange-500"
                onClick={() => { setShowDialog(true); setDialogType('terms'); }}
                type="button"
              >
                Terms of Service
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Dialog Box */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-darkBg rounded-lg shadow-lg max-w-lg w-full p-8 relative">
            <button
              className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-orange-500"
              onClick={() => setShowDialog(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="max-h-[60vh] overflow-y-auto">
              {dialogType === 'privacy' && <PrivacyPolicy />}
              {dialogType === 'terms' && <TermsOfService />}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Footer;