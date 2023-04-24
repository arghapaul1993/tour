import React from 'react';
import './oddisa.css';

import odibeach from '../images/odibeach.jpg'
import odihill from '../images/odihill.jpg'
import odiplace from '../images/odiplace.webp';
import oditemple from '../images/oditemple.jpg'


const Odisha = () => {
  return (
    <>
        
      
    
    
    <div className='banner2'>
        <p className='tourTitles'>Tourism to Odisha</p>
    </div>
    <div>
        <p className='title'>Tourism in Odisha</p>
        <article class="newspaper">
        Odisha has sea of opportunities for those wanting to give this destination in east India a try. The opulent state proffers unforgettable experiences. From offering an enthralling experience of exploring the wild to attaining peace of mind during a pilgrimage tour, and from losing oneself in the history of the state to basking on the surreal beaches, Odisha things to do list is overwhelming, and hence, one holiday cannot be enough here.
        It is indeed true a single word cannot express the beauty and experience of Odisha. Marking the eastern boundary of the peninsula of India, the cultural land of Odisha is a tourist destination that completes the jigsaw puzzle. Home to one of the four sacred Hindu pilgrimages, this eastern state satiates the curiosity of a traveller who is curious to learn about the vivid elements that paint its canvas. The state also boasts of stunning architecture both of the temples as well as the houses which will make you feel even more invited. You can certainly not miss the world famous Sun Temple at Konark when visiting Odisha. Fringed by the Bay of Bengal, and flaunting a long coastline, this east Indian gem has some of the most stunning beaches that are often less-frequented. The gorgeous Chandrabhaga Beach, which has been recognized the first blue flag beach in Asia can neither be missed nor should be kept out of your Odisha travel guide. Known to cure the lepers, this eco-friendly beach is one of the many surreal places you can expect to catch a sight of on your Odisha tour.

The famous Chilika Lake, also the second largest coastal lagoon in the world has so much to offer you if nature and bird watching attract you.

Yes, the lake is a perfect destination for the nature lovers looks for an escape from the hullabaloo of the urban life. Odisha is also home to some really picturesque waterfalls and rivers. The state offers a great family vacation destination and lovers getaway in the form of a hill station, Daringibadi where basking in the lap of nature can rejuvenate you. Looking for some enthralling experience in Odisha? Well, the state boasts of several national parks and wildlife sanctuaries that offer an incredible experience of sighting diverse flora and fauna. Odisha is also a travel place for art connoisseurs and for anyone who takes delight in culture and traditions. From an amazing experience of shopping for Odishan Ikat to trying out the flavoursome Odisha cuisine, and from witnessing the rich culture of the varied tribes of the state to the classical dance form of Odissi, the state can leave one spoilt for choice. Looking forward to learning more about Odisha? Our travel guide can walk you through some authentic and must-have experiences in Odisha. Find detailed information on top attractions, best temples, lakes, hill stations and markets in our travel guide that endeavours to make your holiday the most memorable one.
        </article>
    </div>

    <div>
        <p className='catogoryTitle'>Popular area to visit in Odisha</p>
        
        <div className='catogaryDiv'>
            <img src={odibeach} alt="" className='wbimages'/>
            <p className='textWBCat'>Beaches: Puri Beach, Chilika lake, Ratnagiri </p>
        </div>

        <div className='catogaryDiv'>
            <p className='textWBCat'>Temples: Jagannath Temple,Maa Tara Tarini Temple ,Sun Temple,Lingaraja Temple,Brahmeswara Temple ,Gundicha Temple ,Mukteswara Temple ,Parsurameswara Temple,Rajarani Temple,Vaital Deula ,Ram Mandir 
            </p>
            <img src={oditemple} alt="" className='wbimages'/>

        </div>

        <div className='catogaryDiv'>
        <img src={odihill} alt="" className='wbimages' />
            <p className='textWBCat'> Hill Stations:  Mahendragiri, Dhenkanal, Daringbadi</p>
        </div>

        <div className='catogaryDiv'>
            <p className='textWBCat'>
            Palaces: Kurma ,Langudi,Lalitgiri,Balsore,Khiching etc
            </p>
            <img src={odiplace} alt=""className='wbimages' />

        </div>
    </div>
    
    
    
    
    
    
    
   
    
    
    
    
    </>
  )
}

export default Odisha