import React from 'react'
import "./code_portfolio.css"
import SpreadsheetImage from '../../Assets/spreadsheet.png'
import MobileAppImage from '../../Assets/Mobile_App_Cropped.png'
import SudokuImage from '../../Assets/sudoku.png'
import AgarioImage from '../../Assets/Agario2.png'
//Have to go back to video at ~2:18 to change this to iterate through an array.

const Code_Portfolio = () => {
  return (
    <section id='CodePortfolio'>
      <h5>Software</h5>
      <h2>Programming Portfolio</h2>

      <div className="code__portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={MobileAppImage}alt="" />
          </div>
          <h3>Android Studio App</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/AaronMorgan582/LifestyleApp' className='btn'target='_blank' rel='noreferrer'>Github</a>
            <a href='https://youtu.be/js0WWgoTBJw' className='btn btn-primary' target='_blank' rel='noreferrer'>Youtube Video Demo</a>
          </div>
        </article>
        <article className='portfolio__paragraph'>
        <h3>Worked On: UI, Layout, Code Architecture (Fragment creation), BMR calculation.</h3><br/>
          <p> My first Mobile Application, developed with Android Studio. This was also my first experience with Full-Stack development, since I was able to work on both
              the front-end and the back-end.</p><br/>
          <p> I made this with the help of two other Engineers for a class, and although it may not look like it on the front-end, there's a lot going on in the back-end. It uses location
              services, a database, and html queries, along with some basic calculations for other various things. I worked primarily on the front-end, which was quite the undertaking; it really
              takes a lot of meticulous adjusting to make sure all the forms look organized and consistent, particularly when switching from portrait to landscape. 
          </p><br/>
          <p> Although I didn't implement much of the back-end on my own, being responsible for the front-end nonetheless forced me to understand what the other engineers implemented. In the class,
            we started out working exclusively with activities, then moved on to a more efficient architecture utilizing Fragments; changing all the code so it worked properly within Fragments was 
            a decent challenge, because I had to consider how to modify the code for a new format while ensuring it still worked.
          </p><br/>
        </article>
      </div>

      <div className="code__portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={SpreadsheetImage} alt="" />
          </div>
          <h3>Spreadsheet</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/AaronMorgan582/Spreadsheet' className='btn'target='_blank' rel='noreferrer'>Github</a>
            <a href='https://youtu.be/MnBmr5jZNXA' className='btn btn-primary' target='_blank' rel='noreferrer'>Youtube Video Demo</a>
          </div>
        </article>
        <article className='portfolio__paragraph'>
        <h3>Worked On: All of it.</h3><br/>
           <p> This was made with another Engineer for one of my classes, and it was the first time being exposed to Model-View-Controller architecture.
            It also utilizes Dependency Injection, since we ended up using a particular definition of what a "formula" looks like; it's possible to utilize other interpretations, so it 
            made sense to set up the architecture to allow others to define their own formulas.
          </p><br/>
          <p> 
            Every student in the class started the project on their own; we began with creating a Stack to evaluate expressions. After that, we all developed a dependency list that would handle the 
            dependency between cells (if you wanted to use an expression found in a different cell). Once that had been completed, groups were formed with another person, and we had to choose 
            which of our implementations we would continue to use (since we both had implemented the same thing). My partner and I ended up using my implementation, but after that 
            we had worked on the rest of it together.
          </p><br/>
        </article>
      </div>

      <div className="code__portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={SudokuImage} alt="" />
          </div>
          <h3>Sudoku Solver</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/AaronMorgan582/Sudoku' className='btn'target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
        <article className='portfolio__paragraph'>
        <h3>Worked On: All of it.</h3><br/>
           <p> This is a small program that was easily one of the harder assignments in my Intro to Algorithms and Data Structures class. This was another assignment that was completed 
            with pair programming, and it was quite complicated to complete because it utilizes two different ways to process solutions - One where the program tries to solve the puzzle
            iteratively, and another where it tries to solve it recursively. At the time, the recursion was quite difficult to wrap my head around, because not only was it complicated, but 
            I had not really worked with recursion much at that point. There isn't a video of this one because there is no GUI component to the program; it merely runs in the console.
          </p><br/>
          <p> 
            My partner and I had worked on many assignments together, and in our testing, we experienced something that ended up being a common theme in a lot of our assignments - Our programs 
            always seem to have some minor flaw in it which prevents it from working. For this assignment, we couldn't figure out for the longest time why our program didn't work, until we realized 
            that our testing data had an extra space at the beginning of the file. It really shows that writing code has to be done very carefully (which also reinforces simplfying things), since 
            it's really easy to miss something incredibly simple.   
          </p><br/>
        </article>
      </div>

      <div className="code__portfolio__container">

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={AgarioImage} alt="" />
          </div>
          <h3>Agario Game</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/AaronMorgan582/Agario' className='btn'target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
        <article className='portfolio__paragraph'>
        <h3>Worked On: All of it.</h3><br/>
           <p> 
            Another pair programming project, and the very first time I worked on something that included Networking. It was also the first time I had worked with SQL and databases, as well as 
            displaying database information in HTML. 
          </p><br/>
          <p> 
            It was a difficult assignment, and unfortunately it didn't fully work, but I still decided to put it on here because it utilized so many different things, and for that reason 
            I'm still proud of it. Like the Spreadsheet Application, this project also included utilization of MVC and GUI component. My brother worked on databases a lot, so I did take particular 
            interest in the SQL queries. There is no video for this application as well, just because it ran using the University of Utah's servers, which I no longer have access to.
          </p><br/>
        </article>
      </div>
    </section>
  )
}

export default Code_Portfolio