import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ title, value, hasButtonReset = true }) => {
  const [counter, setCounter] = useState(value);
  const [buttonSubstract, setButtonSubstract] = useState(true);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  useEffect(() => {
    counter <= 0 ? setButtonSubstract(false) : setButtonSubstract(true);
  }, [counter]);

  return (
    <div className="container text-center mt-4">
      <h1 className="mb-4">{title}</h1>
      <h2 className="mb-4">{counter}</h2>

      {counter % 2 === 0 ? (
        <div>
          <label className="text-success">Número Par 🙂</label>
        </div>
      ) : (
        <div>
          <label className="text-danger">Número Impar ☹️</label>
        </div>
      )}

      <div className="mt-4">
        <button className="btn btn-primary me-2" onClick={handleAdd}> +1 </button>

        {buttonSubstract && (
          <button className="btn btn-primary me-2" onClick={handleSubstract}> -1 </button>
        )}

        {hasButtonReset && (
          <button className="btn btn-secondary" onClick={handleReset}> Reset </button>
        )}
      </div>
    </div>
  );
};

CounterApp.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
