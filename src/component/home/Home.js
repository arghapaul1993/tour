import React from 'react'
import Styles from "./home.module.css";
import asam from "../image/asam.jfif"
import oddisa from "../image/oddisa.jfif"
import west from "../image/west.jfif"
import uttar from "../image/uttar.jpg"
import andhra from "../image/andhra.jpg"
import raj from "../image/raj.jfif"
import blr from "../image/blr.jfif"
import list from "../image/list.jpg"
import charminar from '../telangana/pic/BannerTelangana.jpg';
import {Link} from "react-router-dom";


import pic01 from './picss/pic01.webp';
import pic02 from './picss/pic02.jpeg';
import pic03 from './picss/pic03.jpeg';
import pic04 from './picss/pic04.jpeg';
import pic05 from './picss/pic05.jpeg';
import pic06 from './picss/pic06.jpeg';
import pic07 from './picss/pic07.jpeg';
import pic08 from './picss/pic08.jpeg';





import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

const Home = () => {
  return (
    <>
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic01} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic02} className='carouselImg'/></SwiperSlide>
        <SwiperSlide><img src={pic03} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic04} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic05} className='carouselImg'/></SwiperSlide> 
        <SwiperSlide><img src={pic06} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic07} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic08} className='carouselImg' /></SwiperSlide>
  
      </Swiper>





    <div className={Styles.container}>
    <div className={Styles.main}>
    
        <input type="text" placeholder='Where to' />
    
    </div>
      

      <br/>
      <br/>
      <br/>


         <div className={Styles.ways}>
         <div>
         <h2>Ways to tour Bengaluru</h2>
          <p>Book these experiences for a close-up look at your Destination</p>
         </div>
         <div className={Styles.destination}>
          <div>
          <Link className={Styles.ink} to="/westBengal">
            <div className={Styles.upper}>
            <img width="100%" height="100%" src={west}/>
            </div>
            <div className={Styles.downer}>
                <h3>West Bengal:Trip</h3>
                <p>from 9,883 per adult</p>
            </div>
            </Link>
          </div>
          <div>
          <Link className={Styles.ink} to="/assam">
          <div className={Styles.upper}>
            <img width="100%" height="100%" src={asam}/>
          </div>
            <div className={Styles.downer}>
            <h3>Assam:Trip</h3>
                <p>from 9,883 per adult</p>
            </div>
            </Link>
          </div>
          <div>
          <Link className={Styles.ink} to="/odisha">
          <div className={Styles.upper}>
          <img width="100%" height="100%" src={oddisa}/>
          </div>
            <div className={Styles.downer}>
            <h3>Oddisa:Trip</h3>
                <p>from 9,883 per adult</p>
            </div>
            </Link>
          </div>
          <div>
          <Link className={Styles.ink} to="/rajsthan">
          <div className={Styles.upper}>
          <img width="100%" height="100%" src={raj}/>
          </div>
            <div className={Styles.downer}>
            <h3>Rajsthan:Trip</h3>
                <p>from 9,883 per adult</p>
            </div>
            </Link>
          </div>
          
          <div>
          <Link className={Styles.ink} to="/uttarakhand">
          <div className={Styles.upper}>
          <img width="100%" height="100%" src={uttar}/>
          </div>

            <div className={Styles.downer}>
            <h3>Uttarakhand:Trip</h3>
                <p>from 9,883 per adult</p>
            </div>
            </Link>
          </div>
          <div>
          <Link className={Styles.ink} to="/bangalore">
          <div className={Styles.upper}>
          <img width="100%" height="100%" src={blr}/>
          </div>
            <div className={Styles.downer}>
            <h3>Bangalore:Trip</h3>
                <p>from 9,883 per adult</p>
            </div>
            </Link>
          </div>
          <div>
          <Link className={Styles.ink} to="/andhra">
          <div className={Styles.upper}>
            <img width="100%" height="100%" src={andhra}/>
          </div>
            <div className={Styles.downer}>
            <h3>Andhra:Trip</h3>
                <p>from 9,883 per adult</p>
            </div>
            </Link>
          </div>



          <div>
          <Link className={Styles.ink} to="/telangana">
          <div className={Styles.upper}>
            <img width="100%" height="100%" src={charminar}/>
          </div>
            <div className={Styles.downer}>
            <h3>Telangana:Trip</h3>
                <p>From 9,983 per adult</p>
            </div>
            </Link>
          </div>
          
          <div>
          <Link className={Styles.ink} to="/goa">
          <div className={Styles.upper}>
            <img width="100%" height="100%" src="https://www.tourmyindia.com/states/goa/image/bungee-jumping-goa.webp"/>
          </div>
            <div className={Styles.downer}>
            <h3>Goa:Trip</h3>
                <p>From 9,983 per adult</p>
            </div>
            </Link>
          </div>
          
          <div>
          <Link className={Styles.ink} to="/kerala">
          <div className={Styles.upper}>
            <img width="100%" height="100%" src="https://c4.wallpaperflare.com/wallpaper/858/348/52/kettuvallam-houseboat-kerala-india-wallpaper-preview.jpg"/>
          </div>
            <div className={Styles.downer}>
            <h3>Kerala:Trip</h3>
                <p>From 9,983 per adult</p>
            </div>
            </Link>
          </div>

          <div>
          <Link className={Styles.ink} to="/mP">
          <div className={Styles.upper}>
            <img width="100%" height="100%" src="https://media.istockphoto.com/id/1441972332/photo/royal-cenotaphs-of-orchha-madhya-pradesh-india.jpg?b=1&s=170667a&w=0&k=20&c=CmXM3OCBEPmZkfv0z-GZINVN41LdvRqWm-T53XD0Hag="/>
          </div>
            <div className={Styles.downer}>
            <h3>MP:Trip</h3>
                <p>From 9,983 per adult</p>
            </div>
            </Link>
          </div>

          
          <div>
          <Link className={Styles.ink} to="/maharashtra">
          <div className={Styles.upper}>
            <img width="100%" height="100%" src="https://media.istockphoto.com/id/1385977424/photo/marine-drive-mumbai.jpg?b=1&s=170667a&w=0&k=20&c=c7Swn2CrpwVmtf9xwo4ZDY1u2aKnVIEKCjYWlQ3UX8c="/>
          </div>
            <div className={Styles.downer}>
            <h3>Maharastra:Trip</h3>
                <p>From 9,983 per adult</p>
            </div>
            </Link>
          </div>

          
         
         </div>
     
         </div>

         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <div className={Styles.list}>
           <div className={Styles.lefta}>
            <div className={Styles.text}>
                <h3>Get out there</h3>
                <p>Best of the tours, attractions & activities you won't to miss.</p>
                <button>See the list</button>
            </div>
           </div>
           <div>
            <img width="100%" height='100%' src={list}/>
           </div>
         </div>
    </div>
    </>
  )
}

export default Home