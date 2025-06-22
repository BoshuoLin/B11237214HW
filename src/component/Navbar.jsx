import { useRef } from "react";
import logo from "../assets/logo.png";
import { FaBeer } from 'react-icons/fa';
import { useEffect } from "react";

//useRef取得一個可持續被引用的元素 不會因為元件重新渲染而被重設

function Navbar() {
  const navRef = useRef(null)
  const textRef = useRef(null)
  useEffect(() => {
    const navScroll = () => {
      const nav = navRef.current;//取得實例
      const text = textRef.current;//取得實例
      if (window.scrollY > window.innerHeight / 2) {
        nav.classList.remove('bg-transparent');
        nav.classList.add('navBlur');
        nav.classList.remove('p-8');
        nav.classList.add('p-2');
        text.classList.remove('text-white');
        text.classList.add('text-primary');
        text.classList.remove('border-white');
        text.classList.add('border-primary');
      } else {
        nav.classList.add('bg-transparent');
        nav.classList.remove('navBlur');
        nav.classList.remove('p-2');
        nav.classList.add('p-8');
        text.classList.remove('text-primary');
        text.classList.add('text-white');
        text.classList.remove('border-primary');
        text.classList.add('border-white');
      }
    }
    window.addEventListener("scroll", navScroll);

    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  })


  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full p-8 px-15 z-40 bg-transparent duration-300">
      <div className='flex justify-between items-center  relative z-50 '>
        <div className="">
          <a href="#"><img src={logo} alt="" className="h-11 " /></a>
        </div>
        <div className="flex items-center">
          <ul ref={textRef} className=' rounded-2xl text-md flex gap-7 bg-transparent  text-white  border-white'>
            <li><a href="#" className="font-bold border-b-1 inline-block pb-1 duration-200 " >首頁</a></li>
            <li><a href="https://iid.yuntech.edu.tw/news" className="hover:font-bold duration-200 " >最新消息</a></li>
            <li><a href="https://iid.yuntech.edu.tw/about/introduction" className="hover:font-bold duration-200 " >學程介紹</a></li>
            <li><a href="https://iid.yuntech.edu.tw/node/7" className="hover:font-bold duration-200 " >課程介紹</a></li>
            <li><a href="https://iid.yuntech.edu.tw/freshman/internship" className="hover:font-bold duration-200 " >實習廠商</a></li>
            <li><a href="https://iid.yuntech.edu.tw/document" className="hover:font-bold duration-200 " >下載專區</a></li>
            <li><a href="https://iid.yuntech.edu.tw/activity" className="hover:font-bold duration-200 " >活動/獲獎成果</a></li>
            <li></li>
          </ul>
        <a href="#forNew" className='hover:scale-90  duration-200 rounded-3xl text-md xl px-5 py-2.5 my-5 inline-block items-center bg-cyan-500 text-white shadow-2xl' >
                新鮮人專區
              </a>

        </div>
      </div>
    </nav>

  )
}

export default Navbar;