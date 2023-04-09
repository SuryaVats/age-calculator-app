import './App.css';

function App() {
  return (
    <div className="container">
      {/* Input */}
      <div className='inputs'>
        <div className='input_container'>
          <label htmlFor="">DAY</label>
          <input className='inp' type="number" id='day' />
        </div>

        <div className='input_container'>
          <label htmlFor="">MONTH</label>
          <input className='inp' type="number" id='month' />
        </div>

        <div className='input_container'>
          <label htmlFor="">YEAR</label>
          <input className='inp' type="number" id='year' />
        </div>
      </div>

      {/* Button */}
      <div className='submitButton'></div>

      {/* Outputs */}
      <div className="outputs">
        <h2><span>{32}</span> years</h2>
        <h2><span>{12}</span> months</h2>
        <h2><span>{24}</span> days</h2>
      </div>
    </div>

  );
}

export default App;