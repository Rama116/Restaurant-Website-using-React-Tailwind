
import {Link} from "react-scroll"
import {BiRestaurant} from "react-icons/bi"
const Navbar = () => {
  return (
    <>
        <div>
            <div>
                <div>
                    <span>
                        <BiRestaurant size={32}/>
                    </span>
                        <h1>FoodieWeb</h1>
                </div>
                <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer" >Home</Link>
                <Link to="dishes" spy={true} smooth={true} duration={500} className="cursor-pointer" >Dishes</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer" >About</Link>
                <Link to="menu" spy={true} smooth={true} duration={500} className="cursor-pointer" >Menu</Link>
                <Link to="review" spy={true} smooth={true} duration={500} className="cursor-pointer" >Reviews</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar