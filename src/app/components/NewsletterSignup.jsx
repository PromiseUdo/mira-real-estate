import React from "react";
import { AiOutlineMail } from "react-icons/ai";
const NewsletterSignup = () => {
  return (
    <div className="px-10 bg-zee-dark-teal-100 text-white px-[2rem] py-[2rem]">
      <div className="flex justify-center gap-20 lg:gap-28 items-center">
        <div
          id="illustration"
          className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full hidden md:block"
          style={{
            background: "url('/notification.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {/* <img
            src="/notification.jpg"
            className="w-[300px] h-[300px] rounded-[100%] object-cover"
          /> */}
        <div className=" ">
          <h5 className="text-center md:text-start">Get Notified</h5>
          <p className="text-center md:text-start">
            Enter your email to get latest information on new listings{" "}
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="w-full flex items-center  border py-2 px-4 my-2 rounded-lg">
              <input
                className=" text-white w-full bg-transparent outline-none"
                type="text"
                placeholder="Your Email Address"
              />
              <AiOutlineMail className="text-[#fff]" />
            </div>
            <button className="w-full md:w-auto rounded-lg bg-white px-6 py-3 text-zee-teal-100 lg:w0">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
