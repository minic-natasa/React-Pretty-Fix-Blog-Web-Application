import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( //ispisuju - pokrece - sve sa stranice  /REACTDOM - data object model, render metoda služi za ispisivanje svih react elementara
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 
//prvi parametar šta želimo da se ispiše, drugi parametar gde želimo da se ispiše
//za definisanje konkretnih elemenata JSX - sličan html-u
//konstanta: const element = <h1>Hello</h1>
//u JSX možemo da menjamo tekst preko promenljivih 

//const nesto = "Natasa";
//<h1>Hello {nesto}</h1>

//Unutar JSX možemo da stavimo celu funkciju

//div className = "klasa"

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
