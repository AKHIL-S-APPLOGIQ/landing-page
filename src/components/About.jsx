import logo from '../assets/Logo.png';

const About = () => {
  return (
    <div className="px-10 ">
      <div className="flex px-10 py-5 bg-black w-full rounded-lg text-white  justify-between">
        <div className="text-left">
          <p>Newsletter</p>
          <p className="text-xs">
            Be the first one to know about the discount{" "}
          </p>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-black"
          />
          <button className="bg-white text-black font-semibold py-2 px-4 rounded-r ml-2">
            Submit
          </button>
        </div>
      </div>

        <img src={logo} alt="" />
        <p className='text-left'>Introducing the UPMONEY app, the ultimate tool for managing your credit card on-the-go. With our app, you can view your account information, make payments, redeem rewards, and more, all from your smartphone or tablet.</p>
      <div className=""></div>

      <div className=""></div>
    </div>
  );
};

export default About;
