import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './component/navbar';
import Particles from "./component/reactbits/Particles"
import SplitText from "./component/reactbits/SplitText"
import DotGrid from './component/reactbits//DotGrid';
import Fade from './component/Carousel';
import GridMotion from './component/reactbits/GridMotion';
import Aurora from './component/reactbits/Aurora';
import logogold from "./assets/logogold.png";
import News from "./component/News";
import ScrollFloat from './component/reactbits/ScrollFloat';
import { FaFacebook, FaPhoneAlt, FaChalkboardTeacher } from 'react-icons/fa';
import { AiFillQuestionCircle, AiOutlineFileText, AiOutlineBulb, AiOutlineContacts, AiOutlineTeam, AiOutlineRead, AiOutlineIdcard, AiFillBook } from 'react-icons/ai';
import gsap from "gsap";
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const textRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("announcement");

  const items = [
    './footer/IMG_2128.jpg',
    './footer/IMG_2558.jpg',
    './footer/IMG_9714.jpg',
    './footer/IMG_9787.jpg',
    './footer/IMG_9772.jpg',
    './footer/IMG_9354.jpg',
    './footer/IMG_2523.jpg',
    './footer/IMG_7894.jpg',
    './about/IMG_4000.jpg',
    './about/IMG_2092.jpg',
    './about/IMG_0554.jpg',
    './footer/IMG_9787.jpg',
    './about/IMG_9323.jpg',
    './about/IMG_9324.jpg',
    './about/IMG_9974.jpg',
    './about/IMG_2523.jpg',
    './footer/IMG_2523.jpg',
    './footer/IMG_7894.jpg',
    './about/IMG_4000.jpg',
    './about/IMG_2092.jpg',
    './about/IMG_0554.jpg',
  ];

  useEffect(() => {
    const tween1 = gsap.to(imgRef.current, {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
      }
    });

    const tween2 = gsap.to(imgRef2.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: imgRef2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    const tween3 = gsap.to(textRef.current, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      tween1.kill();
      tween2.kill();
      tween3.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
      lenis.destroy();
    };
  }, []); // ✅ 當 loading 結束才初始化動畫


  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className='scrollbox'>
      <header className="h-screen p-8 rounded-2xl flex flex-col" >
        <Navbar />
        <div className="w-full flex-grow backdrop-blur-md relative  overflow-hidden rounded-3xl  flex justify-center h-full" >
          <div className="h-full w-full absolute top-0 left-0 z-10">
            <Fade />
          </div>

          <div className="w-80  h-20 bg-white absolute top-0 left-0 z-20 rounded-br-2xl "></div>
          <div className="w-96 h-28 bg-white absolute bottom-0 right-0 z-20 rounded-tl-2xl p-4">
            <div className="leading-8">
              <h1 className='text-md inline-block text-primary font-bold relative before:absolute before:border-b-6 before:w-full before:bottom-2 before:opacity-20 before:border-b-cyan-500 before:rounded-2xl'>最新公告</h1>
              <div className="mb-2.5 border-b-1 border-stone-300"></div>
              <p className="text-sm  line-clamp-2">【教育部獎勵金】設計戰國策114年度「教育部鼓勵學生參加藝術與設計類國際競賽計畫」</p>
            </div>
          </div>
          <img className='absolute bottom-24 right-0 z-50 ' alt="" src="https://storage.googleapis.com/studio-design-asset-files/projects/M3aA4ANyqe/s-24x24_d742199a-44ef-4c4f-820e-01a7e7b7e15a.svg" />
          <img className='absolute bottom-0 right-96 z-50 ' alt="" src="https://storage.googleapis.com/studio-design-asset-files/projects/M3aA4ANyqe/s-24x24_d742199a-44ef-4c4f-820e-01a7e7b7e15a.svg" />
          <img className='absolute top-0 left-80 z-50 ' alt="" src="https://storage.googleapis.com/studio-design-asset-files/projects/M3aA4ANyqe/s-24x24_0fe5313c-87df-4841-b27a-fe496f01e523.svg" />
          <img className='absolute top-20 left-0 z-50 ' alt="" src="https://storage.googleapis.com/studio-design-asset-files/projects/M3aA4ANyqe/s-24x24_0fe5313c-87df-4841-b27a-fe496f01e523.svg" />


          <div className="top-0 absolute left-0 w-full h-full  rounded-3xl  z-10 opacity-70" style={{ background: "#000000aa" }}>
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          <div className="container grid grid-cols-2">
            <div className="flex flex-col justify-around ms-15 me-0">
              <div className=""></div>
              <div className="">
                <h1 className="font-semibold z-20 relative  text-white  text-start  inline-block w-fit ">

                  <SplitText
                    text='跨域整合設計'
                    className="text-4xl font-semibold text-center lg:text-5xl md:text-4xl leading-18"
                    delay={250}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                  <br />
                  <SplitText
                    text='學士學位學程'
                    className="text-5xl font-semibold text-center lg:text-6xl md:text-5xl "
                    delay={250}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                  <br />
                </h1>
                <p className=' z-20 relative text-white mt-5 text-md  leading-6.5 lg:w-5/6 md:w-full' >
                  「跨域整合設計學士學位學程」與「設計技優專班」雙軌並行，針對產業現狀及發展訂定彈性課程，實務實習高度接軌產業需求，以產業共構課程與實習模式，縮短產學差距升級實務精進。
                </p>
              </div>
              <div className="z-20 relative flex gap-2.5">
                <a
                  href="https://www.facebook.com/profile.php?id=100064097737418&locale=zh_TW" target='_blank'
                  className=" hover:opacity-60 duration-300 my-2 text-xl w-10 h-10 rounded-3xl font-semibold flex items-center justify-center text-white backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/20"
                  style={{
                    background: "rgba(255, 255, 255, 0.4)"
                  }}
                >
                  <FaFacebook />

                </a>
                <a
                  href="#info" className=" hover:opacity-60 duration-300 my-2 text-xl w-10 h-10 rounded-3xl font-semibold flex items-center justify-center text-white backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/20"
                  style={{
                    background: "rgba(255, 255, 255, 0.4)"
                  }}
                >
                  <FaPhoneAlt />

                </a>
                <a
                  href="https://www.unews.com.tw/Newschool/Department/21/3774" target='_blank'
                  className=" hover:opacity-60 duration-300 my-2 text-xl w-10 h-10 rounded-3xl font-semibold flex items-center justify-center text-white backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/20"
                  style={{
                    background: "rgba(255, 255, 255, 0.4)"
                  }}
                >
                  <AiFillQuestionCircle />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center  ">
              <div className="z-10 relative justify-end flex" style={{ transform: 'translateY(50px)' }}>
                <div className="z-20 absolute bottom-10 ">
                  <p className="text-white">Scroll</p>
                  <div className="mx-4  timeline">
                    <div
                      className=" progressline  "
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div >
      </header >

      <section className='relative flex justify-center' >
        <div className='w-full h-full z-0 absolute top-0 left-0'>
          <DotGrid
            dotSize={2}
            gap={15}
            baseColor="#00000025"
            activeColor="#293c6455"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={700}
            returnDuration={1.5}
          />
        </div>
        <div className="container z-10 h-[80vh] relative flex justify-center">
          <div className="image h-full absolute top-0 w-full" ref={imgRef2}>
            <img src="/about/LINE_240801_15.jpg"
              className="about-img shadow-2xl shadow-gray-400 z-10 absolute 
        top-32 sm:top-36 md:top-36 lg:top-40 xl:top-44 2xl:top-44
        right-6 sm:right-10 md:right-16 lg:right-24 xl:right-28 2xl:right-36
        w-24 sm:w-26 md:w-30 lg:w-36 xl:w-40 2xl:w-44
        rounded-2xl blur"
              alt="" />

            <img src="/about/IMG_2092.jpg"
              className="about-img shadow-2xl shadow-gray-400 z-0 absolute 
        top-48 sm:top-52 md:top-56 lg:top-64 xl:top-64 2xl:top-68
        left-4 sm:left-8 md:left-16 lg:left-24 xl:left-32 2xl:left-40
        w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40
        rounded-2xl blur"
              alt="" />

            <img src="/about/IMG_9324.jpg"
              className="about-img shadow-2xl shadow-gray-400 z-0 absolute 
        bottom-0 sm:bottom-0 md:bottom-4 lg:bottom-4 xl:bottom-6 2xl:bottom-8
        left-36 sm:left-48 md:left-60 lg:left-72 xl:left-84 2xl:left-96
        w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-36
        rounded-2xl blur"
              alt="" />
          </div>

          <div className="image h-full absolute top-0 w-full" ref={imgRef}>
            <img src="/about/IMG_4000.jpg"
              className="about-img shadow-2xl shadow-gray-400 z-0 absolute 
        bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-12 xl:bottom-12 2xl:bottom-12
        left-0 sm:left-2 md:left-6 lg:left-12 xl:left-20 2xl:left-32
        w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 2xl:w-62
        rounded-2xl"
              alt="" />

            <img src="/about/IMG_2092.jpg"
              className="about-img shadow-2xl shadow-gray-400 z-0 absolute 
      -bottom-12 sm:-bottom-12 md:-bottom-12 lg:-bottom-12 xl:-bottom-12 2xl:-bottom-8
        right-16 sm:right-24 md:right-32 lg:right-40 xl:right-48 2xl:right-56
        w-28 sm:w-32 md:w-36 lg:w-44 xl:w-52 2xl:w-62
        rounded-2xl"
              alt="" />

            <img src="/about/IMG_9374.jpg"
              className="about-img shadow-2xl shadow-gray-400 z-10 absolute 
        bottom-28 sm:bottom-32 md:bottom-40 lg:bottom-40 xl:bottom-44 2xl:bottom-44
        right-8 sm:right-10 md:right-14 lg:right-20 xl:right-24 2xl:right-28
        w-28 sm:w-32 md:w-36 lg:w-44 xl:w-52 2xl:w-62
        rounded-2xl"
              alt="" />

            <img src='/about/IMG_0554.jpg'
              className="about-img shadow-2xl shadow-gray-400 z-0 absolute 
        top-12 sm:top-12 md:top-24 lg:top-24 xl:top-28 2xl:top-28 
        left-12 sm:left-20 md:left-28 lg:left-36 xl:left-44 2xl:left-52
        w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56 2xl:w-64
        rounded-2xl"
              alt="" />

            <img src="/about/LINE_230601_6.jpg"
              className="about-img shadow-2xl shadow-gray-400 z-10 absolute 
        top-44 sm:top-48 md:top-52 lg:top-56 xl:top-56 2xl:top-40
        right-24 sm:right-28 md:right-36 lg:right-44 xl:right-50 2xl:right-56
        w-28 sm:w-30 md:w-34 lg:w-40 xl:w-48 2xl:w-56
        rounded-2xl"
              alt="" />
          </div>


          <div className="h-full flex flex-col justify-center w-full items-center" ref={textRef}>
            <div className="w-2/5 text-center relative z-10 ">
              <h5 className='fontEN font-extrabold leading-4 text-xl text-cyan-600'>-　About Us　-</h5>

              <SplitText
                text='跨域整合設計學士學位學程'
                className="text-4xl leading-10 font-bold text-primary my-5"
                delay={250}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <div className="mb-5 w-52 mx-auto   border-b-1 border-stone-300"></div>

              <h1 className='text-md leading-8'>強化技專校院對技優學生學習輔導、技術精進及就業銜接之照顧，特訂定本計畫。
                <br /> 教育部於102年起推動「第二期技職教育再造計畫」，聚焦於高職、技專校院與業界連結
                <ul className='font-semibold text-stone text-md'>
                  <li className='inline-block relative before:absolute  before:border-b-6 before:w-full before:bottom-2 before:opacity-20 before:border-b-cyan-500 before:rounded-2xl'>達成畢業生都具有立即就業的能力</li>
                  <br /> <li className='inline-block relative before:absolute  before:border-b-6 before:w-full before:bottom-2 before:opacity-20 before:border-b-cyan-500 before:rounded-2xl'>充分提供產業發展所需的優質技術人力</li>
                  <br /><li className='inline-block relative before:absolute  before:border-b-6 before:w-full before:bottom-2 before:opacity-20 before:border-b-cyan-500 before:rounded-2xl'>改變社會對技職教育的觀點</li>
                </ul>
                為三大目標，多面向調整我國技職教育，回歸務實致用方向 <br /> 並呼應產業結構調整及經濟發展，培育國家所需技術人才。</h1>
              <a href="https://iid.yuntech.edu.tw/about/introduction" className='hover:scale-90  duration-200 rounded-3xl text-md xl px-5 py-3 my-4 inline-block items-center  bg-cyan-400 text-white shadow-2xl' >
                學程簡介
              </a> </div>
          </div>
        </div>
      </section>

      <section className='bg-stone-50  pt-20 pb-10 relative flex justify-center' id='forNew'>
        <div className="container text-center">
          <h5 className='fontEN font-extrabold leading-4 text-xl text-cyan-600'>-　Welcome to Campus　-</h5>
          <h1 className='text-3xl leading-10 my-5'>新鮮人專區</h1>
          <div className="mb-5 w-52 mx-auto   border-b-1 border-stone-300"></div>

          <div className=" w-5/6 mx-auto">
            <div className="forNews grid  grid-cols-2   md:grid-cols-3 xl:grid-cols-6 justify-items-center gap-6 mt-8">

              <a href='https://iid.yuntech.edu.tw/freshman/entrance-exam' target='_blank' className="items-center  w-full  flex flex-col justify-center">
                <div className="bg-white py-8 w-full shadow-xl shadow-sky-200  rounded-2xl  relative  hover:scale-95 hover:translate-y-2 hover:shadow-none duration-300">
                  <div className=" inline-block p-5 aspect-square text-5xl bg-gradient-to-br from-cyan-100 via-sky-100 to-white shadow-2xl shadow-cyan-100 rounded-full  font-semibold  items-center justify-center text-cyan-500 ">
                    <AiOutlineFileText />

                  </div>
                  <p className='mt-8 text-lg text-nowrap'>新鮮人懶人包</p>
                </div>
              </a>

              <a href='https://iid.yuntech.edu.tw/freshman/course-features' target='_blank' className="items-center  w-full  flex flex-col justify-center">
                <div className="bg-white py-8 w-full shadow-xl shadow-sky-200  rounded-2xl  relative  hover:scale-95 hover:translate-y-2 hover:shadow-none duration-300">
                  <div className=" inline-block p-5 aspect-square text-5xl bg-gradient-to-br from-cyan-100 via-sky-100 to-white shadow-2xl shadow-cyan-100 rounded-full  font-semibold  items-center justify-center text-cyan-500 ">
                    <AiOutlineRead />

                  </div>
                  <p className='mt-8 text-lg'>學程特色</p>
                </div>
              </a>

              <a href='https://iid.yuntech.edu.tw/freshman/teaching-innovation-and-entrepreneurship' target='_blank' className="items-center  w-full  flex flex-col justify-center">
                <div className="bg-white py-8 w-full shadow-xl shadow-sky-200  rounded-2xl  relative  hover:scale-95 hover:translate-y-2 hover:shadow-none duration-300">
                  <div className=" inline-block p-5 aspect-square text-5xl bg-gradient-to-br from-cyan-100 via-sky-100 to-white shadow-2xl shadow-cyan-100 rounded-full  font-semibold  items-center justify-center text-cyan-500 ">
                    <AiOutlineBulb />

                  </div>
                  <p className='mt-8 text-lg text-nowrap'>創新教學就業</p>
                </div>
              </a>

              <a href='https://iid.yuntech.edu.tw/freshman/internship' target='_blank' className="items-center  w-full  flex flex-col justify-center">
                <div className="bg-white py-8 w-full shadow-xl shadow-sky-200  rounded-2xl  relative  hover:scale-95 hover:translate-y-2 hover:shadow-none duration-300">
                  <div className=" inline-block p-5 aspect-square text-5xl bg-gradient-to-br from-cyan-100 via-sky-100 to-white shadow-2xl shadow-cyan-100 rounded-full  font-semibold  items-center justify-center text-cyan-500 ">
                    <AiOutlineIdcard />

                  </div>
                  <p className='mt-8 text-lg'>產業鏈結</p>
                </div>
              </a>

              <a href='https://iid.yuntech.edu.tw/freshman/admission-guide' target='_blank' className="items-center  w-full  flex flex-col justify-center">
                <div className="bg-white py-8 w-full shadow-xl shadow-sky-200  rounded-2xl  relative  hover:scale-95 hover:translate-y-2 hover:shadow-none duration-300">
                  <div className=" inline-block p-5 aspect-square text-5xl bg-gradient-to-br from-cyan-100 via-sky-100 to-white shadow-2xl shadow-cyan-100 rounded-full  font-semibold  items-center justify-center text-cyan-500 ">
                    <AiOutlineContacts />

                  </div>
                  <p className='mt-8 text-lg'>招生指引</p>
                </div>
              </a>
              <a href='https://iid.yuntech.edu.tw/node/945' target='_blank' className="items-center  w-full  flex flex-col justify-center">
                <div className="bg-white py-8 w-full shadow-xl shadow-sky-200  rounded-2xl  relative  hover:scale-95 hover:translate-y-2 hover:shadow-none duration-300">
                  <div className=" inline-block p-5 aspect-square text-5xl bg-gradient-to-br from-cyan-100 via-sky-100 to-white shadow-2xl shadow-cyan-100 rounded-full  font-semibold  items-center justify-center text-cyan-500 ">
                    <AiOutlineTeam />

                  </div>
                  <p className='mt-8 text-lg'>傑出校友</p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className='bg-stone-50  py-20 relative flex justify-center'>
        <div className="container w-2/3 ">
          <div className="text-center">

            <div className="grid grid-cols-12 gap-4 mt-10">
              <div className="col-start-0 col-span-3 flex flex-col justify-between   ">
                <div className="">
                  <h5 className='text-start fontEN font-extrabold leading-4 text-xl text-cyan-600'>-　News　-</h5>
                  <h1 className='text-start  text-3xl my-5 leading-10 '>最新消息</h1>
                  <div className="mb-5 w-64  border-b-1 border-stone-300"></div>
                  <p className='text-start  leading-4 text-md text-stone-600'>掌握我們第一手最新消息!</p>
                  <div className="flex justify-start my-5">

                    <a
                      href="#"
                      className="px-10 rounded-xl text-cyan-400 inline-block py-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white hover:scale-105 transition-all duration-300"
                    >查看更多</a>

                  </div>
                </div>
                <div className="flex flex-col justify-center flex-1 ">
                  <button onClick={() => setSelectedCategory("announcement")} className='py-2 border-b-1 text-start w-32 duration-200 cursor-pointer border-stone-400 text-sm text-stone-700 block hover:text-primary hover:opacity-80' type='button'>01 | 系辦公告</button>
                  <button onClick={() => setSelectedCategory("race")} className='py-2 border-b-1 text-start w-32 duration-200 cursor-pointer border-stone-400 text-sm text-stone-700 block hover:text-primary hover:opacity-80' type='button'>02 | 競賽消息</button>
                  <button onClick={() => setSelectedCategory("event")} className='py-2 border-b-1 text-start w-32 duration-200 cursor-pointer border-stone-400 text-sm text-stone-700 block hover:text-primary hover:opacity-80' type='button'>03 | 活動報名</button>


                </div>


              </div>
              <div className="col-span-9">
                <News category={selectedCategory} />
                {/* <ul>
                  <li className="w-full p-10 flex justify-between border-b-1 border-stone-300">
                    <div className="flex items-center gap-6">
                      <div className="text-xl">0620</div>
                      <div className="text-lg">工作</div>
                      <div className="text-lg font-semibold">最新消息最新消息最新消息最新消息最新消息最新消息最新消息</div>
                    </div>
                    <a href="#" className='px-6 rounded-2xl  text-cyan-500 block py-1 border-2 border-cyan-300'>more</a>
                  </li>
                  <li className="w-full p-10 flex justify-between border-b-1 border-stone-300">
                    <div className="flex items-center gap-6">
                      <div className="text-xl">0620</div>
                      <div className="text-md">工作</div>
                      <div className="text-lg font-semibold">最新消息最新消息最新消息最新消息最新消息最新消息最新消息</div>
                    </div>
                    <a href="#" className='px-6 rounded-2xl text-cyan-500 inline-block py-1 border-2 border-cyan-300'>more</a>
                  </li>
                  <li className="w-full p-10 flex justify-between border-b-1 border-stone-300">
                    <div className="flex items-center gap-6">
                      <div className="text-xl">0620</div>
                      <div className="text-md">工作</div>
                      <div className="text-lg font-semibold">最新消息最新消息最新消息最新消息最新消息最新消息最新消息</div>
                    </div>
                    <a href="#" className='px-6 rounded-2xl text-cyan-500 inline-block py-1 border-2 border-cyan-300'>more</a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='h-[40vh] relative'>
        <div className="absolute top-0 left-0 h-full w-full z-10" style={{ background: "rgba(0, 0, 0, 0.8)" }}>
          <Aurora
            colorStops={["#2569B1", "#0AFFFB", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={2}
          />
        </div>
        <GridMotion items={items} />
        <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 container z-30">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 border-r-2 border-white">
              <a
                href="https://iid.yuntech.edu.tw/about/faculty-and-staff"
                target="_blank"
                rel="noopener noreferrer"
                className="block duration-300 hover:scale-90 hover:opacity-70"
              >
                <div className="text-white text-4xl font-bold flex items-center justify-center gap-4 leading-snug">
                  <FaChalkboardTeacher />
                  <span>  專業師資</span>
                </div>
                <p className="text-white mt-6 text-center leading-relaxed">
                  結合學術與實務的堅強陣容，涵蓋設計、美學、工程與產業應用。
                </p>
                <p className="text-white mt-3 text-center leading-relaxed">
                  打造跨領域的創新教學環境。
                </p>
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <a
                href="https://iid.yuntech.edu.tw/node/6"
                target="_blank"
                rel="noopener noreferrer"
                className="block duration-300 hover:scale-90 hover:opacity-70"
              >
                <div className="text-white text-4xl font-bold flex items-center justify-center gap-2 leading-snug">
                  <AiFillBook />
                  <span>學習空間</span>
                </div>
                <p className="text-white mt-6 text-center leading-relaxed">
                  擁有專業實驗室與創作空間，支援從草圖到製造的全流程創作。    </p>
                <p className="text-white mt-3 text-center leading-relaxed">
                  提供啟發創意的理想學習場域。
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#252525] py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap my-5">
            <div className="w-full lg:w-1/2 flex items-center ">
              <div href="#" className="flex items-center">
                <i className="fa-solid fa-basketball text-white text-md"></i>
                <div className="flex flex-col justify-center ms-2">
                  <a href="#"><img src={logogold} alt="" className="h-15 " /></a>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <ul className=' rounded-2xl text-md flex justify-around bg-transparent  text-white  border-white'>
                <li><a href="#" className="font-bold border-b-1 inline-block pb-1 duration-200 " >首頁</a></li>
                <li><a href="https://iid.yuntech.edu.tw/news" className="hover:font-bold duration-200 " >最新消息</a></li>
                <li><a href="https://iid.yuntech.edu.tw/about/introduction" className="hover:font-bold duration-200 " >學程介紹</a></li>
                <li><a href="https://iid.yuntech.edu.tw/node/7" className="hover:font-bold duration-200 " >課程介紹</a></li>
                <li><a href="https://iid.yuntech.edu.tw/freshman/internship" className="hover:font-bold duration-200 " >實習廠商</a></li>
                <li><a href="https://iid.yuntech.edu.tw/document" className="hover:font-bold duration-200 " >下載專區</a></li>
                <li><a href="https://iid.yuntech.edu.tw/activity" className="hover:font-bold duration-200 " >活動/獲獎成果</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap border-t border-white/20 py-5">
            <div className="w-full  flex-wrap items-center ">
              <p className="text-white  text-sm"> 64002 雲林縣斗六市大學路3段123號 設計三館DA102a</p>
              <p className="text-white  text-sm "> 05 534-2601 #6030、6031</p>
            </div>


          </div>

          <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/2 flex items-center gap-4">
              <span className="text-white text-md fontEN ">Fallow us</span>
              <div className="w-full lg:w-1/2 flex justify-start items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100064097737418&locale=zh_TW" target='_blank'
                  className=" hover:opacity-60 duration-300 my-2 text-xl w-10 h-10 rounded-3xl font-semibold flex items-center justify-center text-white backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/20"
                  style={{
                    background: "rgba(255, 255, 255, 0.4)"
                  }}
                >
                  <FaFacebook />

                </a>
                <a
                  href="#info"
                  className=" hover:opacity-60 duration-300 my-2 text-xl w-10 h-10 rounded-3xl font-semibold flex items-center justify-center text-white backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/20"
                  style={{
                    background: "rgba(255, 255, 255, 0.4)"
                  }}
                >
                  <FaPhoneAlt />

                </a>
                <a
                  href="https://www.unews.com.tw/Newschool/Department/21/3774" target='_blank'
                  className=" hover:opacity-60 duration-300 my-2 text-xl w-10 h-10 rounded-3xl font-semibold flex items-center justify-center text-white backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/20"
                  style={{
                    background: "rgba(255, 255, 255, 0.4)"
                  }}
                >
                  <AiFillQuestionCircle />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-end items-center">
              <span className="text-white text-sm fontEN">&copy;copyright 2025/06/22 Boshuo</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App

// background:`linear-gradient(${linearDeg}deg, rgb(71 112 203 / 25%) 14%, rgb(83 174 255 / 20%) 60%, rgb(255 61 152 / 20%) 100%)`


// <a href='#' className="items-center w-60 flex flex-col justify-center hover:scale-90 hover:shadow-none duration-300">
//         <div className="bg-cyan-400 shadow-2xl shadow-cyan-200 w-24 h-24 rounded-3xl  relative ">
//           <div className="absolute -top-6 -right-3  duration-300 my-2 text-5xl w-32 h-32 rounded-2xl font-semibold flex items-center justify-center text-white backdrop-blur-md bg-white/20 shadow-xl border border-white/40">
//             <AiOutlineFileText />
//           <p className='my-8 text-lg'>傑出系友</p>

//           </div>

//         </div>
//       </a>



//  <a href='#' className="items-center w-2/3 md:w-full  flex flex-col justify-center">
//                 <div className="bg-white p-9 w-full shadow-xl shadow-sky-200  rounded-2xl  relative  hover:scale-95 hover:translate-y-2 hover:shadow-none duration-300">
//                   <div className=" inline-block p-5 aspect-square text-5xl bg-gradient-to-br from-cyan-100 via-sky-100 to-white shadow-2xl shadow-cyan-100 rounded-full  font-semibold  items-center justify-center text-cyan-500 ">
//                     <AiOutlineFileText />

//                   </div>
//                   <p className='mt-8 text-lg'>新鮮人懶人包</p>
//                 </div>
//               </a>

