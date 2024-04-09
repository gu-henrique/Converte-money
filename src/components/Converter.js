import React, { useState, useEffect } from 'react';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Converter.css';

function Converter({
  currencies,
  inputCurrency,
  setInputCurrency,
  outputCurrency,
  setOutputCurrency,
  amount,
  setAmount,
  convertedAmount,
  convertCurrency
}) {
  const [exchangeRates, setExchangeRates] = useState({});

  // Função para buscar as taxas de câmbio da moeda selecionada
  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${inputCurrency}`);
      const data = await response.json();
      setExchangeRates(data.rates);
    } catch (error) {
      console.error('Erro ao buscar taxas de câmbio:', error);
    }
  };

  // Atualiza as taxas de câmbio sempre que a moeda de entrada for alterada
  useEffect(() => {
    fetchExchangeRates();
  }, [inputCurrency]);

  return (
    <div className="converter">
      <div className="ad-container">
        {/* Código de anúncio do Google AdSense para o espaço lateral */}
      </div>
      <h2 className="title">Conversor de Moedas</h2>
      <div className="floating-coins">
        <div className="coin"></div>
        <div className="coin"></div>
        <div className="coin"></div>
      </div>
      <div className="input-field">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Digite o valor"
          className="rounded-input"
        />
        <select
          value={inputCurrency}
          onChange={(e) => setInputCurrency(e.target.value)}
          className="select-currency"
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faMoneyBillAlt} />
      </div>
      <div className="input-field">
        <input
          type="text"
          value={convertedAmount}
          readOnly
          placeholder="Valor convertido"
          className="rounded-input"
        />
        <select
          value={outputCurrency}
          onChange={(e) => setOutputCurrency(e.target.value)}
          className="select-currency"
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <button onClick={convertCurrency} className="convert-button">Converter</button>
    </div>
  );
}

export default Converter;
