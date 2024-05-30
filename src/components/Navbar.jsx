import logo from '../assets/Logo.png';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-full">
            <div className='mx-[80px]'><img src={logo} alt="Logo" /></div>

            <div className="flex gap-4 font-semibold">
                <div>Solution</div>
                <div>Industries</div>
                <div>Fees</div>
                <div>About</div>
            </div>

            <div className='flex gap-4 p-7 justify-evenly'>
                <div>Sign in</div>
                <div>Create free account</div>
            </div>
        </div>
    )
}

export default Navbar;
