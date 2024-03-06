import React from 'react';
import '../pages/style.css'; // Import your CSS file
import diary from '../assets/img/diary.jpg';
import salt from '../assets/img/sodium.jpg';
import fruit from '../assets/img/fruitveg.jpg';
import oils from '../assets/img/healthyoils.jpg';
import grain from '../assets/img/wholegrain.jpg';
import protien from '../assets/img/protiens.jpg';

const ExcersiseCard = () => {
  return (
    <>
      <div>
        <br />
        <h1 style={{ textAlign: 'center',marginTop: '20px',fontSize:'40px' }}><b>EXCERSISE</b></h1>
        <p style={{ textAlign: 'center' }}>Regular activity is one of the best ways to make a good recovery.But how, and how much? Our guide gives you the facts</p>
      </div>

      <div className="container">
        <div className="card__container">
          <article className="card__article">
            <img src={fruit} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Week 1</h2>
              <span className="card__description">
              Every second day:
                <ul>
                <li>Warm up</li>
                <li>Training period: 10-minute walk at an easy pace</li>
                <li>Cool down</li>
                  
                </ul>
              </span>
            </div>
          </article>

          <article className="card__article">
            <img src={diary} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Week 2</h2>
              <span className="card__description">
              Every second day:
                <ul>
                
                <li>Warm up: 5-minute easy walk</li>
                <li>Training period: 10-minute walk at a faster pace</li>
                <li>Cool down: 5-minute easy walk</li>
                </ul>
              </span>
            </div>
          </article>

          <article className="card__article">
            <img src={grain} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Week 3</h2>
              <span className="card__description">
              4 times a week
                <ul>
               <li> Warm up: 5-minute easy walk</li>
                <li>Training period: 15-minute walk at a faster pace</li>
                <li>Cool down: 5-minute easy walk and stretches</li>
                </ul>
              </span>
            </div>
          </article>

          <article className="card__article">
            <img src={protien} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Week 4</h2>
              <span className="card__description">
              4 times a week
                <ul>
                
                <li>Warm up: 5-minute easy walk</li>
                <li>Training period: 20-minute walk at a faster pace</li>
                <li>Cool down: 5-minute easy walk and stretches</li>
                </ul>
              </span>
            </div>
          </article>

          <article className="card__article">
            <img src={oils} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Week 5-6</h2>
              <span className="card__description">
              At least 5 days a week
                <ul>
                
                <li>Warm up: 10-minute easy walk</li>
                <li>Training period: 25-30 minute walk at a faster pace. Start to pump or swing arms. Walk up gentle hills, leaning slightly forward.</li>
                <li>Cool down: 5-minute easy walk and stretch for each walk </li>
                </ul>
              </span>
            </div>
          </article>

          {/* <article className="card__article">
            <img src={salt} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Cut down on Sodium</h2>
              <span className="card__description">
                Reduce intake of salt
                <ul>
                  <li>Read the Nutrition Facts label and choose foods that are lower in sodium.</li>
                  <li>Look for foods labeled “low sodium” or “no salt added” — like some packaged meals, and snack foods.</li>
                </ul>
              </span>
            </div>
          </article> */}

        </div>
      </div>

      {/* <footer>
        <p style={{ textAlign: 'center' }}>Every healthy choice you make is a step towards a stronger heart and a brighter future.</p>
      </footer> */}
    </>
  );
}

export default ExcersiseCard;
