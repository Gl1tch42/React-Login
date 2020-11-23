import React, { useState, userContext } from 'react';
import { useHistory } from 'react-router-dom';
import storeContext from '../../components/Store/context'
import './login.css'
import UIButton from '../../components/button';


function initialState() {
  return {user:'', password:''};
}

function login ({ user, password}) {
  if(user === 'admin' && password === 'admin'){
    return {token: '1234'};
  } else {
    return {error: 'usuario ou senha invalido'}
  }

}


const Login = () => {

  const [values, setValues] = useState(initialState);

  const { setToken } = userContext(storeContext);

  const history = useHistory();



  function onChange(event) {
    const {value, name} = event.target;

    setValues({
      ...values,
      [name]: value,
    })
  }
  
  function onSubimit(event) {
    event.prevenDefaut();

    const { token } = login(values);

    if(token) {
      setToken(token);
      return history.push('/');
    }
    setValues(initialState);
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form onSubmit={onSubimit}>
        <div className="user-login__form-control">
          <label htmlFor="email">user</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
            />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
        <UIButton
            type="submit"
            theme="contained-green"
            className="user-login__submit-button"
            rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
  )
};

export default Login;
