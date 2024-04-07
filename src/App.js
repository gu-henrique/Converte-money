import React, { useEffect, useState } from 'react';
import Converter from './components/Converter';
import './components/Converter.css';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [inputCurrency, setInputCurrency] = useState('USD');
  const [outputCurrency, setOutputCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  useEffect(() => {
    async function fetchCurrencies() {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      setCurrencies(Object.keys(data.rates));
    }
    fetchCurrencies();
  }, []);

  async function convertCurrency() {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${inputCurrency}`);
    const data = await response.json();
    const exchangeRate = data.rates[outputCurrency];
    setConvertedAmount((amount * exchangeRate).toFixed(2));
  }

  return (
    <div className="container">
      <Converter
        currencies={currencies}
        inputCurrency={inputCurrency}
        setInputCurrency={setInputCurrency}
        outputCurrency={outputCurrency}
        setOutputCurrency={setOutputCurrency}
        amount={amount}
        setAmount={setAmount}
        convertedAmount={convertedAmount}
        setConvertedAmount={setConvertedAmount}
        convertCurrency={convertCurrency}
      />
    </div>
  );
}

export default App;
