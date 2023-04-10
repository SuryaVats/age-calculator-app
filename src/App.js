import { useState, useRef } from 'react';

import './App.css';

import arrowIcon from './assets/images/icon-arrow.svg'

import useInput from './hooks/useInput';


const yearValidty = (year) => {
  const currentYear = new Date(Date.now()).getFullYear();
  if (currentYear < +year || year === "") {
    return false;
  }
  return true;
}

const dayValidity = (day) => {
  if (+day > 31 || +day <= 0 || day === "") {
    return false;
  }
  return true;
}

const monthValidity = (month) => {
  if (+month > 12 || +month < 0 || month === "") {
    return false;
  }
  return true;
}

function App() {

  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  const [output, setOutput] = useState({
    day: "--",
    month: "--",
    year: "--",
  })

  // JS
  const {
    value: dayValue,
    isValid: dayIsValid,
    hasError: dayHasError,
    valueChangeHandler: dayChangeHandler,
    inputBlurHandler: dayBlurHandler,
    reset: dayReset
  } = useInput(dayValidity);

  const {
    value: monthValue,
    isValid: monthIsValid,
    hasError: monthHasError,
    valueChangeHandler: monthChangeHandler,
    inputBlurHandler: monthBlurHandler,
    reset: monthReset
  } = useInput(monthValidity);

  const {
    value: yearValue,
    isValid: yearIsValid,
    hasError: yearHasError,
    valueChangeHandler: yearChangeHandler,
    inputBlurHandler: yearBlurHandler,
    reset: yearReset
  } = useInput(yearValidty);

  const [invalidDate, setInvalidDate] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!dayIsValid || !yearIsValid || !monthIsValid) {
      setOutput({
        day: "--",
        year: "--",
        month: "--"
      })
      return;
    }
    if (+monthValue === 4 || +monthValue === 6 || +monthValue === 9 || +monthValue === 11) {
      if (+dayValue > 30) {
        setInvalidDate(true);
        return;
      }
    } else if (+monthValue === 2) {
      if (+dayValue > 28) {
        console.log('this hits');
        setInvalidDate(true);
        return;
      }
    }
    setInvalidDate(false);

    //age calculation logic
    var today = new Date();
    var birthDate = new Date(`${yearValue}-${monthValue}-${dayValue}`);
    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      if (months < 0) {
        months += 12;
      }
      if (days < 0) {
        var monthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += monthDays;
        months--;
      }
    }

    setOutput({
      year: years,
      day: days,
      month: months
    })
    dayRef.current.blur();
    monthRef.current.blur();
    yearRef.current.blur();
    dayReset();
    monthReset();
    yearReset();
  }

  return (
    <main className="container">
      {/* Input */}
      <div className="wrapper">
        <form className='form' onSubmit={formSubmitHandler}>
          <div className="inputs">
            <section className='inputs__container'>
              <label className={`${!dayHasError && !invalidDate ? '' : 'label__error'}`} htmlFor="day">DAY</label>
              <input ref={dayRef} className={`${!dayHasError && !invalidDate ? '' : 'input__error'}`} type="number" id='day' placeholder='DD' value={dayValue} onChange={dayChangeHandler} onBlur={dayBlurHandler} />
              {(dayHasError || invalidDate) && <p className='error__text'>Must be a valid day</p>}
            </section>

            <section className='inputs__container'>
              <label className={`${!monthHasError && !invalidDate ? '' : 'label__error'}`} htmlFor="month">MONTH</label>
              <input ref={monthRef} className={`${!monthHasError && !invalidDate ? '' : 'input__error'}`} type="number" id='month' placeholder='MM' value={monthValue} onChange={monthChangeHandler} onBlur={monthBlurHandler} />
              {(monthHasError || invalidDate) && <p className='error__text'>Must be a valid month</p>}
            </section>

            <section className='inputs__container'>
              <label className={`${!yearHasError ? '' : 'label__error'}`} htmlFor="year">YEAR</label>
              <input ref={yearRef} className={`${!yearHasError ? '' : 'input__error'}`} type="number" id='year' placeholder='YYYY' value={yearValue} onChange={yearChangeHandler} onBlur={yearBlurHandler} />
              {yearHasError && <p className='error__text'>Must be a valid year</p>}
            </section>
          </div>
          {/* Button */}
          <div className='submit__button'>
            <div className="line"></div>
            <button type='submit'> <img src={arrowIcon} alt='Submit' /></button>
          </div>
        </form >


        {/* Outputs */}
        <section className="outputs" >
          <h2><span>{output.year}</span> years</h2>
          <h2><span>{output.month}</span> months</h2>
          <h2><span>{output.day}</span> days</h2>
        </section >
      </div>

    </main >

  );
}

export default App;