import './App.css';
import arrowIcon from './assets/images/icon-arrow.svg'


function App() {

  return (
    <main className="container">
      {/* Input */}
      <div className="wrapper">
        <form className='form'>
          <div className="inputs">
            <section className='inputs__container'>
              <label htmlFor="day">DAY</label>
              <input className='inp' type="number" id='day' placeholder='DD' />
            </section>

            <section className='inputs__container'>
              <label htmlFor="month">MONTH</label>
              <input className='inp' type="number" id='month' placeholder='MM' />
            </section>

            <section className='inputs__container'>
              <label htmlFor="year">YEAR</label>
              <input className='inp' type="number" id='year' placeholder='YYYY' />
            </section>
          </div>
          {/* Button */}
          <div className='submit__button'>
            <div className="line"></div>
            <button> <img src={arrowIcon} alt='Submit' /></button>
          </div>
        </form >


        {/* Outputs */}
        <section className="outputs" >
          <h2><span>{32}</span> years</h2>
          <h2><span>{12}</span> months</h2>
          <h2><span>{24}</span> days</h2>
        </section >
      </div>

    </main >

  );
}

export default App;