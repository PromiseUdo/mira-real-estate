import React from "react";
import { AiOutlineMail } from "react-icons/ai";
const NewsletterSignup = () => {
  return (
    <div className="px-10 bg-zee-dark-teal-100 text-white px-[2rem] py-[2rem]">
      <div className="flex justify-center gap-32 items-center">
        <div id="illustration" className="hidden md:block">
          <img
            src="/notification.jpg"
            className="w-[300px] h-[300px] rounded-[100%] object-cover"
          />
        </div>
        <div className="flex flex-col items-center md:flex-row ">
          <h5>Get Notified</h5>
          <p>Enter your email to get latest information on new listings </p>
          <div className="flex items-center gap-2">
            <div className="w-full flex items-center  border py-2 px-4 my-2 rounded-lg">
              <input
                className=" text-white w-full bg-transparent outline-none"
                type="text"
                placeholder="Your Email Address"
              />
              <AiOutlineMail className="text-[#fff]" />
            </div>
            <button className="rounded-lg bg-white px-6 py-3 text-zee-teal-100">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
