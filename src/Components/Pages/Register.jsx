import React from 'react'
import Navigation from './Navigation'
import ScrollToTopArrow from './ScrollTopArrow';
import Footer from './Footer';

function Register() {
  
  return (
    <div>
      <Navigation />
      <div className='register-section'>
        <div>
          <div className='reg-image'></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='rules'>
          <div className='reg-terms'>
            <h3>TERMS AND CONDITIONS</h3>
          </div>
          <br />
          <br />
          <div className='ru-les'>
            <div className='rule-one'>
              <div>
                <h3>PLAYERS RULES AND REGULATIONS</h3>
                <p>
                  1. Player should be disciplined.
                  <br />
                  2. He should be a good player. <br />
                  3. The Player needs to pay the required Player Management fee
                  of $…… to be a full part of AFA Management. <br />
                  4. The Player should sign an agreement with AFA Management.
                  Players between the ages of 14years and 23years are to sign a
                  future contract with AFA
                  <br />
                  5. Management all dependent on the quality of talent the
                  player possesses. <br />
                  6. Players 25years and above should sign a normal contract
                  5years in duration with AFA Management. <br />
                  7. Every Player wishing to join AFA Management should agree to
                  do and bear the cost of their residence permit to be able to
                  stay in Turkey. AFA Management can only give advice and
                  guidance pertaining to acquiring a residence Permit. <br />
                  8. AFA Management Can only provides the platform for players to
                  train and keep fit until they acquire their residence permit.{' '}
                  <br />
                  9. Players have to agree to bear the cost for the treatment of
                  any injuries that may occur.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className='rule-one'>
              <div>
                <h3>CODE OF CONDUCT FOR PLAYERS</h3>
                <p>
                  1. Players are the most important people in the sport. Playing
                  for the team, and for the team to win, is the most fundamental
                  part of the game. But not winning at any cost Fair Play and
                  respect for all others in the game is fundamentally important.
                  This Code focuses on players involved in top-class football.
                  Nevertheless, the key concepts in the Code are valid for
                  players at all levels.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className='rule-one'>
              <div>
                <h3>OBLIGATIONS TOWARDS ONE'S OWN TEAM</h3>
                <p>
                  1. A player should: Make every effort consistent with Fair
                  Play and the Laws of the Game to help their own team win.
                  Resist any influence which might, or might be seen to, bring
                  into question their commitment to the team winning.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className='rule-one'>
              <div>
                <h3>RESPECT FOR THE LAWS OF THE GAME AND COMPETITION RULES</h3>
                <p>
                  1. A player should: Know and abide by the Laws, rules and
                  spirit of the game, and the competition rules. Accept success
                  and failure, victory and defeat, equally. Resist any
                  temptation to take banned substances or use banned techniques.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className='rule-one'>
              <div>
                <h3>RESPECT TOWARDS OPPONENTS</h3>
                <p>
                  1. A player should: Treat opponents with due respect at all
                  times, irrespective of the result of the game. Safeguard the
                  physical fitness of opponents, avoid violence and rough play,
                  and help injured opponents.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className='rule-one'>
              <div>
                <h3>RESPECT TOWARDS THE MATCH OFFICIALS</h3>
                <p>
                  1. A player should: Accept the decision of the Match Official
                  without protest. Avoid words or actions which may mislead a
                  Match Official. Show due respect towards Match Officials.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className='rule-one'>
              <div>
                <h3>RESPECT TOWARDS TEAM OFFICIALS</h3>
                <p>
                  1. A player should: Abide by the instructions of their Coach
                  and Team Officials, provided they do not contradict the spirit
                  of this Code. Show due respect towards the Team Officials of
                  the opposition.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className='rule-one'>
              <div>
                <h3>BLIGATIONS TOWARDS THE SUPPORTERS</h3>
                <p>
                  1. A player should: Show due respect to the interests of
                  supporters.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='box-shadow'>
          <div className='app_form'>
            <h2>AFA FOOTBALL ACADEMY APPLICATION FORM</h2>
          </div>
          <div className='application-form'>
            <div className='form-display'>
              <div className='forms__'>
                <input type='text' placeholder='Name' />
              </div><br/>
              <div className='forms__'>
                <input type='text' placeholder=' Email Address' />
              </div>
            </div>
            <br />
            <div className='form-display'>
              <div className='forms__'>
                <input type='text' placeholder='Address' />
              </div><br/>
              <div className='forms__'>
                <input type='text' placeholder='Phone' />
              </div>
            </div>
            <br/>
            <div className='form-display'>
              <div className='forms__'>
                <input type='text' placeholder='Country of Origin' />
              </div><br/>
              <div className='forms__'>
                <input type='text' placeholder='Passport number' />
              </div>
            </div>
            <br />
            <div className='app-button'>
              <button className='app-btn'>Send Application</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <Footer />
      </div>
      <ScrollToTopArrow />
    </div>
  );
}

export default Register