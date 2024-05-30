import image from "../assets/image.svg";
import bgblur from "../assets/bgblur.svg";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import React from "react";
import girl from "../assets/Avatar.svg";

 const Home = () => {
  return (
    <div className="px-11">
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-[100px] text-left">
          <h className="text-5xl  font-bold ">
            Empower Your Purchasing Power with Our Credit Cards
          </h>

          <div>
            <p className="w-3/4 pt-5">
              With a wide range of credit cards to choose from, you're sure to
              find the one that fits your lifestyle. From travel rewards to cash
              back, there's something for everyone.
            </p>

            <div className="border border-gray-400 p-1 w-3/4 flex justify-between rounded-lg mt-2">
              <input type="text" placeholder="Enter email address" className="flex-grow bg-[#FAFAFA] focus:outline-none text-black focus:border-black pl-3 pr-2" />
              <button className="text-white">Get Free card</button>
            </div>
            <div className="flex w-full gap-10 pt-5">
              <div className="flex gap-2 w-[150px]">
                <div className="text-4xl">5000</div>{" "}
                <div className="text-sm">Card delivered</div>
              </div>
              <div className="flex gap-2 w-[150px]">
                <div className="text-4xl">$1M+</div>{" "}
                <div className="text-sm">Transaction completed</div>
              </div>
              <div className="flex gap-2 w-[150px]">
                <div className="text-4xl">230</div>{" "}
                <div className="text-sm">Happy customer </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-[170px]">
          <img src={image} alt="Credit Card" className="w-636 h-686" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-[70px] ">
        <div className="text-left pt-[12%] px-[20%] items-center mt-10">
          <div className="pb-2">
            <h className="text-xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#2F8DC2] via-[#6D94B0] to-[#FF675E]">
              improve your worklife
            </h>
          </div>

          <h className="text-4xl  font-semibold mt-4 ">
            Track all your payments in one place
          </h>
          <p className="pt-2">
            Our app provides real-time access to your account information, so
            you can stay on top of your spending and keep track of your rewards.
          </p>
        </div>

        <div>
          <img src={man} alt="Credit Card" className="w-636 h-686" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src={woman} alt="Credit Card" className="w-636 h-686" />
        </div>
        <div className="mt-[100px] text-left">
          <div>
            <h className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#2F8DC2] via-[#6D94B0] to-[#FF675E]">
              improve your worklife
            </h>
          </div>
          <h className="text-4xl  font-semibold ">
            Redeeming rewards has never been easier
          </h>
          <p>
            With a wide range of credit cards to choose from, you're sure to
            find the one that fits your lifestyle. From travel rewards to cash
            back, there's something for everyone.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen px-10">
        <div className="text-4xl w-[70%]  font-semibold">
          <h className="w-1/2 ">
            With <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F8DC2] via-[#6D94B0] to-[#FF675E]">UPMONEY</span> app, you'll never miss a beat when it comes to managing
            your credit card
          </h>
          <img src={bgblur} alt="bg" />
        </div>
      </div>


      <div className="w-3/4 mx-auto ">
        <p className="bg-clip-text text-transparent bg-[#FF675E]">we're hiring</p>
        <h className="text-4xl font-semibold">Meet our team</h>
        <p className="w-1/2 mx-auto">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</p>

      <div className="grid grid-cols-4 mt-4 gap-4">
        <div className="flex flex-col items-center">
          <img src={girl} alt="jenifer" />
          <p>jenifer</p>
          <p>Founder & CEO</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={girl} alt="jenifer" />
          <p>jenifer</p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F8DC2] via-[#6D94B0] to-[#FF675E]">Founder & CEO</p>
        </div>
        
        <div className="flex flex-col items-center">
          <img src={girl} alt="jenifer" />
          <p>jenifer</p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F8DC2] via-[#6D94B0] to-[#FF675E]" >Founder & CEO</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={girl} alt="jenifer" />
          <p>jenifer</p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F8DC2] via-[#6D94B0] to-[#FF675E]" >Founder & CEO</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={girl} alt="jenifer" />
          <p>jenifer</p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F8DC2] via-[#6D94B0] to-[#FF675E]" >Founder & CEO</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={girl} alt="jenifer" />
          <p>jenifer</p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F8DC2] via-[#6D94B0] to-[#FF675E]" >Founder & CEO</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={girl} alt="jenifer" />
          <p>jenifer</p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F8DC2] via-[#6D94B0] to-[#FF675E]" >Founder & CEO</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={girl} alt="jenifer" />
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F8DC2] via-[#6D94B0] to-[#FF675E]" >jenifer</p>
          <p>Founder & CEO</p>
        </div>
      </div>
      </div>

      <div className="w-3/4 mx-auto mt-10 mt-[70px] ">
        <p className="font-semibold text-4xl ">Frequently asked questions</p>
        <p className="text-[#667085] text-lg pt-5">Everything you need to know about the product and billing.</p>
      <div className="w-3/4 mx-auto"> 
        <p className="text-sm">Is there a free trial available?</p>
        <hr className="border  bg-[#EAECF0] mt-2"/>
        <p className="text-sm"> Can I change my plan later?</p>
        <hr className="border  bg-[#EAECF0] mt-2"/>
        <p className="text-sm">Can other info be added to an invoice?</p>
        <hr className="border  bg-[#EAECF0] mt-2"/>
        <p className="text-sm">How does billing work?</p>
        <hr className="border  bg-[#EAECF0] mt-2"/>
        <p className="text-sm">How do I change my account email? </p>
        </div>
      </div>


    </div>
  );
};

{/* <div className="grid grid-cols-2 sm:grid-cols-4 mt-4 gap-4">
          {Array(8).fill(0).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={girl} alt="Jenifer" />
              <p>Jenifer</p>
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F8DC2] via-[#6D94B0] to-[#FF675E]">Founder & CEO</p>
            </div>
          ))}
        </div> */}


export default Home;