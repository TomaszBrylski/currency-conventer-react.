import React, { useState } from "react";
import { curriencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(curriencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="from__header">Przelicznik walut</h1>
      <p>
        <label>
          <spam className="form__labelText">Kwota w zł*:</spam>
          <imput
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w zł"
            className="form__field"
            type="number"
            required
            step="0.01"
          />
        </label>
      </p>
      <p>
        <label>
          <spam className="form__labelText">Waluta:</spam>
          <select
            className="from__field"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {curriencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </select>
        </label>
      </p>
      <p>
        <button className="form__button">Przelicz!</button>
      </p>

      <p className="form__info">Kurs walut z dnia 12.01.2024</p>

      <Result result={result} />
    </form>
  );
};
