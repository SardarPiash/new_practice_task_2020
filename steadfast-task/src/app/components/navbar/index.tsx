import Image from "next/image";
import mainLogo from "../../../../public/assets/main-logo.svg";
import userIcon from "../../../../public/assets/user-icon.png";
import cartIcon from "../../../../public/assets/cart-icon.png";
import searchIcon from "../../../../public/assets/search-icon.png";


export default function Navbar() {


    return (
        <>
            <div className="bg-[#0F172A] md:h-20 flex md:flex-row justify-between items-center md:px-52">
                <div className="md:w-[20%]">
                    <Image src={mainLogo} className="" alt="main-logo" />
                </div>
                <div className="md:w-[60%]">
                    <div className="">
                        <div className="md:w-[70%] md:h-10 relative">
                            <input type="text" className="bg-white w-full md:h-full rounded-[4px] md:pl-3 text-black outline-0" placeholder="Search for anything...."/>
                            <button className="bg-[#00B795] absolute top-0 right-0 h-full md:px-2.5 rounded-r-[4px]">
                                <Image src={searchIcon} className="" alt="search-icon" />
                            </button>
                        </div> 

                    </div>
                </div>
                <div className=" md:w-[20%] flex md:gap-3.5 justify-center items-center">
                    <Image src={cartIcon} className=" md:w-8 md:h-8" alt="cart-logo" />
                    <Image src={userIcon} className=" md:w-6 md:h-7" alt="user-logo" />
                </div>

            </div>
        </>
    )
};