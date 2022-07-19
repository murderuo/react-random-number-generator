import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState({
    random_number: 0,
    min: 0,
    max: 100,
  });

  const handleSubmit = () => {
    const randomNumber = Math.floor(
      Math.random() * (value.max - value.min + 1) + value.min,
    );
    console.log(randomNumber);
    setValue(prevstate => ({ ...prevstate, random_number: randomNumber }));
  };

  console.log(value);
  return (
    <div className="App">
      <hr />
      <div className="container">
        <div className="header">Random Number Generator</div>
        <div className="random-number">
          <label>
            Random Number:
            <span>{value.random_number}</span>
          </label>
        </div>
        <div className="min-max-value">
          <div className="min">
            <label>
              Min Value:{' '}
              <input
                type="text"
                value={value.min}
                onChange={e =>
                  setValue(prevstate => ({
                    ...prevstate,
                    min: Number(e.target.value),
                  }))
                }
              />
            </label>
          </div>
          <div className="max">
            <label>
              Max Value:{' '}
              <input
                type="text"
                value={value.max}
                onChange={e =>
                  setValue(prevstate => ({
                    ...prevstate,
                    max: Number(e.target.value),
                  }))
                }
              />
            </label>
          </div>
        </div>
        <div className="submit-form">
          <button onClick={handleSubmit}>Generate Number</button>
        </div>
      </div>
    </div>
  );
}

export default App;
