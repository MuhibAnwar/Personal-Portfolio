import React from 'react';
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiLinkDuotone } from "react-icons/pi";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container bg-black-200">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Left side - Contact details */}
        <div className="space-y-2">
          <h2 className="text-5xl" data-aos="zoom-in-up">Contact me</h2>
          <p className="text-gray-600 text-lg pt-2" data-aos="zoom-in-up">
            Feel free to reach out to me via email or phone for any inquiries.
          </p>
          
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <IoMail size={30} /> <span>muhibanwar065@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsFillTelephoneFill size={30} /> <span>+923306249841</span>
          </div>
          <div className='flex gap-3 items-center'data-cos="zoom-in-up">
            <PiLinkDuotone size={30} /><span>Muhib Anwar</span>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="space-y-8 flex flex-col" data-aos="zoom-in-up">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-lg">Name</label>
            <input
              type="text"
              id="name"
              className="h-[40px] bg-transparent border border-accent p-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-lg">Email</label>
            <input
              type="email"
              id="email"
              className="h-[40px] bg-transparent border border-accent p-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="msg" className="text-lg">Message</label>
            <textarea
              id="msg"
              rows={8}
              className="bg-transparent border border-accent p-2"
            ></textarea>
          </div>

          
          <button
  className="p-2 px-6 text-black"
  style={{ backgroundColor:"white" }} // Custom background color
  data-aos="zoom-in-up"
>
  SEND
</button>

        </div>
      </div>
    </div>
  );
};

export default Contact;
