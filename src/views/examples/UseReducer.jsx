import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";


const initialState = {
  number: 0,
  user: null,
};



function reducer(state, action) {
  switch (action.type) {
    case "add2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "mult7":
      return { ...state, number: state.number * 7 };
    case "div25":
      return { ...state, number: state.number / 25 };
    case "prseInt":
      return { ...state, number: parseInt(state.number) };
      case "addRandom":
        const valor = +(action.valor.value)
        return { ...state, number: state.number + valor};
    default:
      return state;
  }
}
const UseReducer = (props) => {
  const [state, dispath] = useReducer(reducer, initialState);
  const [value, setValue] = useState(0)
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">sem usuario logado</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispath({ type: "login", payload: "maria" })}
          >
            login
          </button>
          <button className="btn" onClick={() => dispath({ type: "add2" })}>
            +2
          </button>
          <button className="btn" onClick={() => dispath({ type: "mult7" })}>
            *7
          </button>
          <button className="btn" onClick={() => dispath({ type: "div25" })}>
            /25
          </button>
          <button className="btn" onClick={() => dispath({ type: "prseInt" })}>
            transformar em Inteiro
          </button>

          <input type="number" className="input" value={value} onChange={ e =>setValue(e.target.value)} />
          <button className="btn" onClick={() => dispath({ type: "addRandom", valor:{value}})}>
            Adicionar numero
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
