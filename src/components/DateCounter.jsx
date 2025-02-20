import "./App.css";
//no fim do arquivo tem uma explicação ludica de como funciona
import { useReducer } from "react";
//modo alternativo de settar o state. ideal para aplicaçãoes complexas
const initialState = { count: 0, step: 1 };
//initial state pode ser um valor primitivo, mas geralmente é um objeto.
function reducer(state, action) {
  //reducer function
  //os parametros guardam states num objeto
  //action descreve como o state deve ser atualizado
  switch (action.type) {
    //não pode levar side effects. tira a logica de state do componente, deixando mais limpo
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //state guarda o object
  //dispatch é a função que vai fazer o state atualizar, por mandar as ações dos event handlers pro reducer. usado ao inves do setState()
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
    //coordena o state e passa pra função reducer
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
//situação de mundo real usando os conceitos de dispatcher,reducer e state.
//vc quer pegar 5 mil reais da conta do banco. como faz isso? vai direto no cofre pegar os 5 mil e sai do banco? não.
//vc vai falar com o bancario e pedir 5 mil da conta 12435. entao, o bancario vai checar sua conta e ver se tem isso mesmo e depois te passa o dinheiro do cofre.
//na suposição, vc é o dispatcher(que vai pedir pra modificar o state)
//o bancario é o reducer(que vai modificar o state)
//o cofre é o state, que vai ter o conteudo modificado
// EXEMPLO:
//type:"withdraw",
// payload:
//  {amount:5000, account:12435}
