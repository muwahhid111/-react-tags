import { useCallback, useState } from "react";
import Forms from "./Forms";
import Main from './Main'

function App() {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);
  const [error, setError] = useState(false);
  const handleValue = (e) => {
    setValue(e.target.value);
    setError(false);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setArray([value, ...array]);
    setValue("");
  };
  const handleRemove = (id) => {
    setArray(
      array.filter((item, index) => {
        if (index === id) {
          return false;
        }
        return true;
      })
    );
  };
  const handleBlur = () => {
    if (!value) {
      setError(true);
    }
  };
  return (
    <div className="container">
      <Forms
        handleAdd={handleAdd}
        handleBlur={handleBlur}
        handleValue={handleValue}
        error={error}
        value={value}
      />
      {error && <div className="error">Поле ввода не должно быть пустым</div>}
      <Main array={array} handleRemove={handleRemove} />
    </div>
  );
}

export default App;
