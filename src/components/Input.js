import React from 'react'

const Input = (props) => {

    return (
        <div className='input'>
            <div className='input_control'>
                <label>DAY</label>
                <input type="number" min="1" max="31" placeholder='DD' />
            </div>

            <div className='input_control'>
                <label>MONTH</label>
                <input type="number" min="1" max="12" placeholder='MM' />
            </div>

            <div className='input_control'>
                <label>YEAR</label>
                <input type="number" maxLength="4" placeholder='YYYY' />
            </div>
        </div>
    )
}

export default Input