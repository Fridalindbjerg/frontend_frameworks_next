import Image from "next/image";
import Logo from "../img/Logo.png";
import Search from "../img/search.png";
import ShoppingBag from "../img/shoppingbag.png";
import { DiApple } from "react-icons/di";
import { IoSearch } from "react-icons/io5";
import { TbBasket } from "react-icons/tb";

const Header = () => {
  return (
    <header className="wrapper">
      <a href="#">
        <DiApple size={50} color="white" />
      </a>
      <ul>
        <li>Mac</li>
        <li>iPhone</li>
        <li>iPad</li>
        <li>iWatch</li>
        <li>Support</li>
      </ul>
      <div>
        <a href="#">
          <IoSearch size={50} color="white" />
        </a>
        <div>|</div>
        <a href="#">
          <TbBasket size={50} color="white" />
        </a>
      </div>
    </header>
  );
};

export default Header;
