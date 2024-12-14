import { useState } from "react";
import { Link } from "react-router-dom"; // Use react-router-dom's Link for routing
import Button from "../layouts/Buttons";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    return (
        <div className="fixed w-full z-10 bg-white shadow-md">
            <div className="flex justify-between items-center p-5 md:px-32 px-5">
                <div className="flex items-center cursor-pointer">
                    <BiRestaurant size={32} />
                    <h1 className="text-xl font-semibold">Foodiee-Staurant</h1>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
                    <Link to="/" className="hover:text-orange-400 cursor-pointer">
                        Home
                    </Link>
                    <Link to="/dishes" className="hover:text-orange-400 cursor-pointer">
                        Dishes
                    </Link>
                    <Link to="/about" className="hover:text-orange-400 cursor-pointer">
                        About
                    </Link>
                    <Link to="/menu" className="hover:text-orange-400 cursor-pointer">
                        Menu
                    </Link>
                    <Link to="/products" className="hover:text-orange-400 cursor-pointer">
                        Products
                    </Link>
                    <Link to="/Cart" className="hover:text-orange-400 cursor-pointer">
                        Cart
                    </Link>
                    <Link to="/Login">
                    <Button title="Login" />
                    </Link>
                    
                </nav>

                <div className="md:hidden">
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                        <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                    )}
                </div>
            </div>

            {menu && (
                <div className="absolute bg-black text-white left-0 top-16 w-full flex flex-col text-center py-4 gap-4">
                    <Link to="/" onClick={handleChange} className="hover:text-orange-400 cursor-pointer">
                        Home
                    </Link>
                    <Link to="/dishes" onClick={handleChange} className="hover:text-orange-400 cursor-pointer">
                        Dishes
                    </Link>
                    <Link to="/about" onClick={handleChange} className="hover:text-orange-400 cursor-pointer">
                        About
                    </Link>
                    <Link to="/menu" onClick={handleChange} className="hover:text-orange-400 cursor-pointer">
                        Menu
                    </Link>
                    <Link to="/products" onClick={handleChange} className="hover:text-orange-400 cursor-pointer">
                        Products
                    </Link>
                    <Link to="/Cart" onClick={handleChange} className="hover:text-orange-400 cursor-pointer">
                        Cart
                    </Link>
                    <Button title="Login" />
                </div>
            )}
        </div>
    );
};

export default Navbar;
