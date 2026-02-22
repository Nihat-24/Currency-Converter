import React, { useState } from 'react'
import '../css/Curency.css'
import axios from 'axios'

let Base_URL = 'https://api.freecurrencyapi.com/v1/latest'
let ApiKey = "fca_live_2D6tEcWZOGcev6giRoaUvBaVvHA3tQiW8hJm0aqK"
function Curency() {
    const [amount, setAmount] = useState(0)
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('TRY')
    const [result, setResult] = useState(0)

    const exchange = async () => {
        const Response = await axios.get(`${Base_URL}?apikey=${ApiKey}&base_currency=${fromCurrency}`)
        setResult((Response.data.data[toCurrency] * amount).toFixed(2))
    }
    return (
        <div className='curency-page'>
            <div className='curency-div'>
                <h2 className='curency-title'>Currency Converter</h2>
                <input type="number" className='amount' placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />

                <div className='select-row'>
                    <select className='from-curency-option' onChange={(e) => setFromCurrency(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="TRY">TRY</option>
                    </select>

                    <select className='from-curency-option' onChange={(e) => setToCurrency(e.target.value)}>
                        <option value="TRY">TRY</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>

                <button className='convert-btn' type='button' onClick={exchange}>Convert</button>

                <input type="number" className='result' placeholder="Result" readOnly value={result} onChange={(e) => setResult(e.target.value)} />
            </div>
        </div>
    )
}

export default Curency