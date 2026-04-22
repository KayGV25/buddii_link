'use client'

import { PillButton, PillButtonIcon } from './_components/pill_button';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-8 w-svw max-h-svh">
      <main className="flex flex-1 w-full max-w-md h-fit flex-col items-center justify-between py-32 px-16 sm:inset-shadow-white sm:inset-shadow-2xs sm:shadow-white sm:shadow-2xl rounded-4xl">
        <div className='w-full h-fit flex flex-col justify-center items-center gap-y-8'>
          <div className='flex flex-col justify-center items-center gap-y-4'>
            <Image 
              loading="eager"
              src="/budii_logo.jpg"
              alt="Budii Logo"
              width={150}
              height={150}
              className='rounded-full border-white border-8 shadow-2xl shadow-white'
            />
            <h1 className='text-5xl font-bold text-white'>BUDII</h1>
            <p className='font-light italic text-center text-sm'>
              &quot;Turn intention into real life 🌍 no more “we should hang out”we actually do it 💥find your people ↓&quot;
            </p>
          </div>
          <div className="flex flex-col gap-y-4 w-full h-fit">
              <PillButton 
              text={"Whatsapp"} 
              icon={PillButtonIcon.WHATSAPP} 
              onClick={
                () => { window.open(`https://chat.whatsapp.com/LGAtm5LTcyvI6jo48a7emo`, '_blank') }
              }/>
              <PillButton 
              text={"Instagram"} 
              icon={PillButtonIcon.INSTAGRAM} 
              onClick={
                () => { window.open(`https://www.instagram.com/buddii_app`, '_blank') }
              }/>
              <PillButton 
              text={"Waitlist"} 
              icon={PillButtonIcon.LINK} 
              onClick={
                () => { window.open(`https://tally.so/r/7RoqdR`, '_blank') }
              }/>
          </div>
        </div>
      </main>
    </div>
  );
}
