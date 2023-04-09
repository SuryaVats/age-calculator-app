import './App.css';
import arrowIcon from './assets/images/icon-arrow.svg'


function App() {

  return (
    <div className="container">
      {/* Input */}
      <div className="wrapper">
        <form className='form'>
          <div className="inputs">
            <div className='input_container'>
              <label htmlFor="day">DAY</label>
              <input className='inp' type="number" id='day' placeholder='DD' />
            </div>

            <div className='input_container'>
              <label htmlFor="month">MONTH</label>
              <input className='inp' type="number" id='month' placeholder='MM' />
            </div>

            <div className='input_container'>
              <label htmlFor="year">YEAR</label>
              <input className='inp' type="number" id='year' placeholder='YYYY' />
            </div>
          </div>
          {/* Button */}
          <div className='submitButton'>
            <div className="line"></div>
            <button> <img src={arrowIcon} alt='Submit' /></button>
          </div>
        </form >


        {/* Outputs */}
        < div className="outputs" >
          <h2><span>{32}</span> years</h2>
          <h2><span>{12}</span> months</h2>
          <h2><span>{24}</span> days</h2>
        </div >
      </div>

    </div >

  );
}

export default App;