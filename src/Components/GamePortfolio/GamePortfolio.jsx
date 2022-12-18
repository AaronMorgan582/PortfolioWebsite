import React from 'react'
import "./game_portfolio.css"
import AlienGameImage from '../../Assets/AlienAvoiderGame.png'
import CardGameImage from '../../Assets/CardGame.png'
import HumansImage from '../../Assets/HIWFD2.png'
import RaceAeroImage from '../../Assets/RaceAero.png'

const Game_Portfolio = () => {
  return (
    <section id='GamePortfolio'>
      <h5>Games I've Made</h5>
      <h2>Games Portfolio</h2>

      <div className="game__portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={HumansImage} alt="" />
          </div>
          <h3>Humans: It's What's For Dinner</h3>
          <div className="portfolio__item-cta">
            <a href='https://radicalcowstudios.itch.io/humans-its-whats-for-dinner' className='btn'target='_blank' rel='noreferrer'>Itch</a>
            <a href='https://youtu.be/f9eWNyIaIAM' className='btn btn-primary' target='_blank' rel='noreferrer'>Youtube Video Demo</a>
          </div>
        </article>
        <article className='portfolio__paragraph'>
        <h3>Worked On: UI, AI, NPC Movement, "Fences" mechanic. Wrote the dialogue for the "Hippy Cow".</h3><br/>
          <p> My first game made in Unity, and it's easily my favorite game that I've worked on so far.</p><br/>
           <p> 
            The biggest lesson that I learned here is how important it is to have a really well organized code architecture. This game was made with a really small team; besides myself, there was only one other "official" Engineer, although
            our Artist also did some of the progamming. Even with our small team, the organization of our code was completely inconsistent. For example, the way we programmed
            our buttons was kind of all over the place - Sometimes we would create button functions in certain objects that did other things (such as a GameManager), other times we would have the button function
            as its own separate script, and other times we would have a mixture of both, creating a button class that would house all of the button functions. 
          </p><br/>
          <p> 
            As the game became more complicated and introduced more mechanics, it became difficult to navigate our structure to find the objects and functions that we needed. Despite this though,
            I really liked how the game turned out, and it really is a "complete" game, even though it was only made by 4 people.
          </p><br/>
        </article>
      </div>

      <div className="game__portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={RaceAeroImage} alt="" />
          </div>
          <h3>RaceAero</h3>
          <div className="portfolio__item-cta">
            <a href='https://raceaerostudio.itch.io/race-aero' className='btn'target='_blank' rel='noreferrer'>Itch</a>
            <a href='https://www.youtube.com/watch?v=KziTA8UEcNg' className='btn btn-primary' target='_blank' rel='noreferrer'>Youtube Trailer</a>
          </div>
        </article>
        <article className='portfolio__paragraph'>
        <h3>Worked On: Lap Timer, "Reset Player" mechanic, "Vehicle Transition" mechanic, Testing</h3><br/>
           <p> 
            My first game in Unreal, and I found it to be quite a daunting task because it was my first time working with the engine. My group consisted of only one other Engineer,
            and he was also completely new to Unreal. Given our inexperience, we decided to stick with Blueprints to make the mechanics work, and it worked out decently well
            all things considered. The other Engineer and I really had to support each other through the entire thing; he would look at my code and try to figure things out if
            something was wrong, and I would do the same for him when he ran into issues.
          </p><br/>
          <p> 
            At the end of it, I did like Unreal's Blueprint system, because it gave an interface that I think is a lot more approachable in its understanding
            compared to C++. Blueprints are kind of their own language though, and I learned that they can still be really confusing at first, since it takes some
            knowledge about what nodes to use and how they are set up.
          </p><br/>
        </article>
      </div>

      <div className="game__portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={AlienGameImage} alt="" />
          </div>
          <h3>Alien Mouse Avoider</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/AaronMorgan582/Alien-Mouse-Avoider' className='btn'target='_blank' rel='noreferrer'>Github</a>
            <a href='https://youtu.be/p53IXE8bwuA' className='btn btn-primary' target='_blank' rel='noreferrer'>Youtube Video Demo</a>
          </div>
        </article>
        <article className='portfolio__paragraph'>
            <h3>Worked On: All of it.</h3><br/>
            <p> 
              My first game completed using Python and PyGame. This was a solo development project for one of my classes that I took very early on in my Computer Science program.
              Under the hood, it certainly is not a good example of good software architecture (it's basically one monolithic file), but at the time I didn't have any
              real clue about software organization, nor was it really touched on in the class I completed it for. It was nonetheless quite impactful for me, because it is the
              first game I made with a real programming language (my very first was done in Scratch, which is not really a language).
            </p><br/>
            <p> 
              I did do all the art as well, which was fun to learn about. The sprites were made at pixilart.com, and this was my first time ever animating anything. For the code,
              it basically worked as a lot of if/else states; once a particular condition was triggered (like getting to an exit), it would trigger a different block of code. As I
              learned later, this is basically how it works with Unreal and Unity too, but in those engines it's significantly more cleaner and organized.
            </p><br/>
            <p> 
              The game features two whole endings, which I thought was mildly amusing. Spoiler alert - One ending occurs when you save Jonesy (the cat), the other is
              if you decide to leave the poor cat behind.
            </p><br/>
        </article>
      </div>  

      <div className="game__portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={CardGameImage} alt="" />
          </div>
          <h3>6 Card Pickup</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/AaronMorgan582/Card-Adventure-Game' className='btn'target='_blank' rel='noreferrer'>Github</a>
            <a href='https://youtu.be/7gOgM01dpLQ' className='btn btn-primary' target='_blank' rel='noreferrer'>Youtube Video Demo</a>
          </div>
        </article>
        <article className='portfolio__paragraph'>
            <h3>Worked On: All mechanics, Sprites, Animations</h3><br/>
            <p>
              This was another game created with Python and Pygame, for the same class that I made the Alien Mouse Avoider game for. This game was made by me 
              and another person, who was in the Games program for Production. We worked on all of the mechanics together, so we both had a hand in all of the
              programming. My partner didn't have much experience with code, so I was trying to assist him the best that I could, even though I was still really early in my own understanding (I attended this class in my second term of my CS program).
            </p><br/>
            <p> 
              I did come up with the idea to make the game about a Poker Card in a Casino; I pitched the idea to my partner and he thought it was a good idea, so 
              we decided to just roll with it. The art was the task we split up on - My partner did come up with the map, and half of the sprites/animations,
              and I did the other half. I did do the "spinning card" animation, which I thought turned out really well. 
            </p><br/>
        </article>
      </div>
    </section>
  )
}

export default Game_Portfolio