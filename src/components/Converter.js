import React from 'react';
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

    const redirectToCurrencyCodesPage = () => {
        window.location.href = 'https://pt.iban.com/currency-codes';
      };

  return (
    <div className="converter">
      <h2 className="title">Conversor de Moedas</h2>
      <div className="floating-coins">
        <div className="coin"></div>
        <div className="coin"></div>
        <div className="coin"></div>
        {/* Adicione mais moedas flutuantes conforme necessário */}
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
      <button onClick={redirectToCurrencyCodesPage} className='cash-code'>Ver Códigos das Moedas</button>
      
      {/*Adsense*/}
      {/* quadrado */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6031594308004854"
      crossorigin="anonymous"></script>
      {/* <!-- teste2 --> */}
      <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-6031594308004854"
          data-ad-slot="6069754091"
          data-adtest="on"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>

      {/* horizontal */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6031594308004854"
     crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-6031594308004854"
          data-ad-slot="1008999107"
          data-adtest="on"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  );
}

export default Converter;
