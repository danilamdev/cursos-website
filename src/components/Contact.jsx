import {useState} from 'react'
import { Toaster, toast } from 'sonner';

import { EmailIcon } from "./icons/ContactIcons";
import { CopyIcon } from "./icons/ContactIcons";
import { CheckIcon } from './icons/ContactIcons';

import ContactForm from "./ContactForm";

import { ADMIN } from "../const";

export default function Contact () {
  const [isCopy, setIsCopy] = useState(false)

  const handleClick = () => {
    window.navigator.clipboard.writeText(ADMIN.EMAIL)

    toast.success('Email copiado al portapapeles')
    setIsCopy(true)

    setTimeout(() => {
      setIsCopy(false)
    }, 1500);
    
  }

  return (

    <section id="contact" className="py-10 bg-slate-50 pt-24 pb-20 2xl:pb-32 2xl:pt-52">
      <Toaster position="bottom-right" richColors />
      <div
        className="w-11/12 md:w-1/2 lg:w-11/12 px-4 lg:grid-cols-2 lg:max-w-6xl mx-auto grid grid-cols-1 gap-y-10 lg:gap-x-16 2xl:max-w-screen-xl 2xl:gap-x-32"
      >
        <div className="informacion flex flex-col pb-5 lg:pb-10">
          <h2
            className="text-4xl font-bold text-blue-950 tracking-tight mb-5 lg:text-6xl lg:mb-10 2xl:text-7xl lg:leading-[80px]"
          >
            Contácteme para más información
          </h2>
          <p className="text-sm text-slate-600 mb-10 lg:text-xl">
            Envíeme todas sus dudas, serán respondidas a la brevedad
          </p>

          <article
            className="bg-slate-100 rounded-md px-3 py-3 flex items-center gap-2 mt-auto lg:gap-4"
          >
            <div className="bg-blue-500/70 p-1 rounded-md">
              <EmailIcon classname="w-6 lg:w-9" />
            </div>
            <div className="text-xs lg:text-base">
              <p>envíe un email a</p>
              <span className="font-bold text-blue-600"><a href={`mailto:${ADMIN.EMAIL}}`}>{ADMIN.EMAIL}</a></span>
            </div>

            <button 
              onClick={handleClick}
              className="bg-transparent hover:bg-slate-200 transition-colors w-12 h-12 ml-auto grid place-content-center rounded-full"
            >
                <CopyIcon classname={`col-span-full row-span-full w-6 h-6  ${isCopy ? 'scale-0' : 'scale-100' } transition-transform duration-200`} />
                <CheckIcon classname={`col-span-full row-span-full  w-6 h-6   stroke-slate-600 ${isCopy ? 'scale-100' : 'scale-0'} transition-transform duration-200`} />
            </button>
          </article>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}