import React from 'react';
import './assam.css';

import placeAssam from '../images/placeAssam.jpg';
import wildAssam from '../images/wildAssam.webp';
import templeAssam from '../images/templeAssam.jpg';
import hillAssam from '../images/hillAssam.webp';

const Assam = () => {
  return (
    <>
    
    
    <div className='banner3'>
        <p className='tourTitles'>Tourism to Assam</p>
    </div>
    <div>
        <p className='title'>Tourism in Assam</p>
        <article class="newspaper">
          
Assam, in North East India, is a treasure trove of natural beauty and diverse history, remaining as one of the most bountiful untouched regions in the country. Known as the land of 'Blue Hills and Red River', the state is home to wild forests, mighty rivers, and acres and acres of tea plantations. Popularly known as the home to the one-horned rhino, the state is one of the top biodiversity hotspots in the entire world. With the majestic Brahmaputra river, magnificent hills, rich flora and fauna, the state is every tourist's paradise. One of the most beautiful states of India, Assam is the gateway to the enchanting and unexploited northeastern part of the country.

A veritable paradise, Assam shares international borders with both Bangladesh and Bhutan and boasts of its vibrant culture and scenic beauty, as well as its historical significance. The state enjoys a climate similar to tropical regions and has evergreen vegetation throughout the year.

Guwahati, the largest city, known as the city of temples, is home to Maa Kamakhya Devi Temple, one of the most sacred temples for Hindus. Another beautiful highlight of the state is Majuli, which is the largest river island in the world and is famous for its vibrant Assamese neo-Vaishnavite culture. Further up north, located near the Dibru river, is Dibrugarh city, known as the Tea City of India.

Hajo, an extremely ancient pilgrimage centre for not one or two but three different religions, stands as a beautiful example of the secular diversity that exists in India. The area is dotted with numerous temples, mosques and churches, and other religious and sacred artefacts. Haflong, Assam’s only hill station, is a stunningly beautiful place, marked with rolling mountains and lush green valleys.
Nestled in the colossal mountains and deep valley of Himalaya, Assam is an unexplored treasure trove. It has other-worldly charm. And to know more about its natural beauty and its ever so delightful culture, one should consult the travel guide offered by Tour My India. From local secrets to hidden travel gems, the travel guide offers the tiniest detail about what holiday in Assam can be all about.

We, at Tour My India, offers the best deals on Assam holiday packages. From honeymoon to wildlife tour to pilgrimage tour, one gets any, and every type of package from Tour My India. In fact, our travel experts can make a customized packages so that tourists can get the best of Assam in minimum time and at best prices. If one wants to make their holiday the most special and pleasant memory of life, contact the travel experts at Tour My India right away.
        </article>
    </div>

    <div>
        <p className='catogoryTitle'>Popular area to visit in Assam</p>
        
        <div className='catogaryDiv'>
            <img src={wildAssam} alt="" className='wbimages'/>
            <p className='textWBCat'>Wild Life:Chakrashila Wildlife Sanctuary,
Kaziranga National Park,Bornadi Wildlife Sanctuary,Bura-Chapori Wildlife Sanctuary,
Hoollongapar Gibbon Sanctuary,Deepor Beel Bird Sanctuary  </p>
        </div>

        <div className='catogaryDiv'>
            <p className='textWBCat'>Temples:  Asvakranta temple,Devi Dol temple,Kedareswar temple,Dab Parbatia temple,Navagraha temple etc
            </p>
            <img src={templeAssam} alt="" className='wbimages'/>

        </div>

        <div className='catogaryDiv'>
        <img src={hillAssam} alt="" className='wbimages' />
            <p className='textWBCat'> Hill Stations:Haflong ,Diphu,Umrangso,Maibang,Dispur ,Sualkuchi,Lilabari,Morigaon,Bongaigaon,Karimganj  </p>
        </div>

        <div className='catogaryDiv'>
            <p className='textWBCat'>
            Palaces:Rang Ghar,Talatal Ghar
            </p>
            <img src={placeAssam} alt=""className='wbimages' />

        </div>
    </div>
    
    
    
    
    
    
    
   
    
    
    
    
    </>
  )
}

export default Assam