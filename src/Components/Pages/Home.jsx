import React, {useEffect, useState} from 'react';
import Navigation from './Navigation';
import image from '../Images/players.jpeg'
import image2 from '../Images/field.jpeg'
import image3 from '../Images/allplayers.jpeg';
import ScrollToTopArrow from './ScrollTopArrow';
import Footer from './Footer';
import axios from 'axios';


function Home() {
  const [home, setHome] = useState([]);


  useEffect(() =>{
    
    const fetchHomes = async () => {
      try {
        const response = await axios.get('http://localhost:5008/posts/Home/name');
        setHome(response.data);
        console.log(response)
      }catch(error) {
        console.error('Error fetching URL:', error)
      }
    };

    fetchHomes();
  },[]);

  const [navBackground, setNavBackground] = useState('transparent');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      
      setNavBackground('red');
    } else {
      
      setNavBackground('transparent');
    }
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div>
      <Navigation style={{ backgroundColor: navBackground }} />
      <div>
        <div className='homeImage'>
          <div className='overlay'>
            <div className='afro_'>
              <h1>AFRO MERIDIAN FOOTBALL ACADEMY</h1>
              <div className='afro-p'>
                <p>
                  We seek to be the number one academy at nurturing young talent
                  by providing a suitable and conducive training environment for
                  tomorrow’s sports stars.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='about-us'>
          <div className='about'>
            <h1>About</h1>
            <br />
            <p>
              Afro Meridian football academy was initially started to promote
              young talent and create reliable exposure opportunities in the
              professional football fraternity for young stars. With passion, we
              have managed to successfully create a platform from…….
            </p>
          </div>
        </div>
        <div className='home-color'>
          <div className='imagegrid'>
            <div className='training-image'>
              <img src={image} alt='' />
              <div className='training-text'>
                <h3>Friendly Matches</h3>
                <br />
                <p>
                  As a great addition to our program, every month we invite
                  different professional clubs to come and deliver a
                  professional training session with our players after which we
                  arrange friendly match to sum up the sessions. These
                  interactions have seen our players gain a boost in confidence,
                  courage and hope. we have taken part in a number of
                  international Friendly matches with strong stake clubs like
                  Oman National team and F. C Snowlow – Asian champions 2018.
                </p>
              </div>
            </div>
            <div className='training-image'>
              <img src={image2} alt='' />
              <div className='training-text'>
                <h3>Professional coaching sessions</h3>
                <br />
                <p>
                  We offer all our players opportunities on trials with
                  professional clubs while they are here on the program.Every
                  training session and every guest session that we deliver is
                  gearing our players and building them towards their trial
                  opportunities.
                </p>
              </div>
            </div>
            <div className='training-image'>
              <img src={image3} alt='' />
              <div className='training-text'>
                <h3>Signing off Players</h3>
                <br />
                <p>
                  We also pride ourselves In signing off a number of our players
                  In top European and Asian league clubs for example Joel Sego
                  we have therefore built ourselves a long trusted connection
                  with top sports agencies all over the world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='stadium'>
          <div className='over-lay'>
            <div className='stories'>
              <h1>Success Stories</h1>
            </div>
            <div className='stadium-images'>
              {home.map((items, index) => (
                <div className='three-players' key={index}>
                  <img src={items.avatar} alt='' />
                  <div className='stadium-text'>
                    <h3>
                      {items.title} 
                    </h3>
                    <p>{items.content}</p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>
        <div className='wave'>
          <div className='content'>
            <h3>Contact Us</h3>
          </div>
          <div className='input-holder'>
            <div className='input-field'>
              <div className='input--one'>
                <input type='text' placeholder='Name' />
              </div>
              <div>
                <input type='text' placeholder='Email Address' />
              </div>
            </div>
            <br />
            <br />
            <div className='textArea'>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='Message'
              ></textarea>
            </div>
            <br />
            <div>
              <button className='button_'>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
      <div className='home-footer'>
        <Footer />
      </div>
      <ScrollToTopArrow />
    </div>
  );
}

export default Home;
