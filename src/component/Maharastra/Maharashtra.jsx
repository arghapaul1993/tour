import React from 'react';
import './Maharashtra.css';


import flimcity from './Photo/flimcity.jpg';
import mahaBeaches from './Photo/mahaBeaches.jpg';
import mahaFort from './Photo/mahaFort.jpg';
import mahaTemple from './Photo/mahaTemple.jpg';
import wildlifeMahah from './Photo/wildlifeMahah.jpg'




const Maharashtra = () => {

  return (
    <>
    
    
    <div className='banner4'>
        <p className='tourTitles'>Tourism to Maharashtra</p>
    </div>
    <div>
        <p className='title'>Tourism in Maharashtra</p>
        <article class="newspaper">Maharashtra is the second-most populous state in India and the second-most populous country subdivision globally. Spread over 307,713 km2 (118,809 sq mi), Maharashtra is the third-largest state by area in India. It is bordered by the Arabian Sea to the west, the Indian states of Karnataka and Goa to the south, Telangana to the southeast and Chhattisgarh to the east, Gujarat and Madhya Pradesh to the north, and the Indian union territory of Dadra and Nagar Haveli and Daman and Diu to the northwest.[15]

For ease of administration, the state is divided into 6 divisions and 36 districts, with the state capital being Mumbai, the most populous urban area in India, and Nagpur serving as the winter capital, which also hosts the winter session of the state legislature.[16] Godavari and Krishna are the two major rivers in the state. Forests cover 16.47 per cent of the state's geographical area. The state is home to six UNESCO World Heritage Sites: Ajanta Caves, Ellora Caves, Elephanta Caves, Chhatrapati Shivaji Maharaj Terminus (formerly Victoria Terminus), The Victorian Gothic and Art Deco Ensembles of Mumbai and The Western Ghats, a heritage site made up of 39 individual properties of which 4 are in Maharashtra.[17][18]

The region that encompasses the state has a history going back many millennia. Prior to Indian independence, notable dynasties and entities that ruled the region include in a chronological order, the Asmakas, the Mauryas, the Satavahanas, the Western Satraps, the Abhiras, the Vakatakas, the Chalukyas, the Rashtrakutas, the Western Chalukyas, the Seuna Yadavas, the Khaljis, the Tughlaqs, the Bahamanis, the Deccan sultanates, the Mughals, the Maratha Empire founded by Shivaji, and the British. Ruins, monuments, tombs, forts, and places of worship left by these rulers are dotted around the state. At the time of the Indian independence movement in the early 20th century, along with British ruled areas of Bombay presidency, and Central Provinces and Berar, the region included many British Vassal states. Among these, the erstwhile Deccan States Agency included Kolhapur, Miraj, Sangli, Aundh, Bhor, Sawantwadi and Marathwada of Hyderabad State.
       
</article>
    </div>

    <div>
        <p className='catogoryTitle'>Popular area to visit in Maharashtra</p>
        
        <div className='catogaryDiv'>
            <img src={mahaTemple} alt="" className='wbimages'/>
            <p className='textWBCat'>Temples:	 	 
                Ashtavinayak,	Mahur	Pune,	Trimbakeshwar,
                Aundha Nagnath,	Ramtek	Tuljapur,
                Bhimashankar,Shani Shinganapur	Vajreshwari
               
                Jejuri	Pandharpur	Shirdi	
                Kolhapur	Parali Vaijnath	Titwala   </p>
        </div>

        <div className='catogaryDiv'>
            <p className='textWBCat'>Forest & Wild Life:  Bor Dam,	Melghat	Pench,
           Chikhaldara	Nagpur,	Radhanagari - Dajipur,
           Kaas Plateau	Nagzira - Bodhalkasa,	     </p>
            <img src={wildlifeMahah} alt="" className='wbimages'/>

        </div>

        <div className='catogaryDiv'>
        <img src={mahaBeaches} alt="" className='wbimages' />
            <p className='textWBCat'> Beaches: Ganpatipule,Malvan-Tarkarli	Velas,
Anjarle	Guhagar	Mumbai,	Velneshwar,
Bhogwe,	Harihareshwar,	Murud - Janjira	Vengurla
Dahanu- Bordi,	Hedvi,	Ratnagiri,	Vijaydurg
 
Diveagar	Kunkeshwar	
 </p>
        </div>

        <div className='catogaryDiv'>
            <p className='textWBCat'>
            Forts & Caves: 	Ajanta Caves,Ellora	Ramshej,Kalsubai	Raigad
           Daulatabad	Karla	Shivneri,
           Elephanta Cave
            
                 
            </p>
            <img src={mahaFort} alt=""className='wbimages' />

        </div>


        <div className='catogaryDiv'>
        <img src={flimcity} alt=""className='wbimages' />

            <p className='textWBCat'>
            Other Attractions: Flim City , Taj Hotal ,Victoria Terminus
            </p>

        </div>
    </div>
    
    
    
    
    
    
    
   
    
    
    </>
  )
}
export default Maharashtra;


