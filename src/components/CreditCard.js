import React from 'react';

export default function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  let logoVisaOrMC;

  switch (type) {
    case 'Visa':
      logoVisaOrMC = './img/visa.png';
      break;
    case 'Master Card':
      logoVisaOrMC = './img/master-card.svg';
      break;
    default:
      logoVisaOrMC = '';
  }

  const expirationMonthTwoDigits =
    expirationMonth.toString().length === 1
      ? '0' + expirationMonth
      : expirationMonth;

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="logo">
        <img src={logoVisaOrMC} alt="logo Visa or Master Card" />
      </div>
      <div className="CreditCardNumber">
        <h2>**** **** ****{number.toString().slice(12)}</h2>
      </div>
      <div>
        <span>
          Expires {expirationMonthTwoDigits}/
          {expirationYear.toString().slice(2)}
        </span>
        <span className="bank">{bank}</span>
      </div>
      <div className="owner">{owner}</div>
    </div>
  );
}
