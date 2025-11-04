import { DiApple } from "react-icons/di";
import { IoSearch } from "react-icons/io5";
import { TbBasket } from "react-icons/tb";

const Header = () => {
  return (
    <header className="col-span-full my-8 flex justify-between text-xl">
      <a href="#">
        <DiApple size={50} color="white" />
      </a>
      <ul className="flex gap-10 p-0">
        <li className="list-none">Mac</li>
        <li className="list-none">iPhone</li>
        <li className="list-none">iPad</li>
        <li className="list-none">iWatch</li>
        <li className="list-none">Support</li>
      </ul>
      <div className="flex gap-3">
        <a href="#">
          <IoSearch size={30} color="white" />
        </a>
        <div className="text-2xl">|</div>
        <a href="#">
          <TbBasket size={30} color="white" />
        </a>
      </div>
    </header>
  );
};

export default Header;
