import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const Login = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br>
      <InputGroup>
        <Input placeholder="email" type="email"/>
        <InputGroupAddon addonType="append">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      </br>
      <br>
      <InputGroup>
        <Input placeholder="Password" type="password"/>
      </InputGroup>
      </br>

    </div>
  );
};

export default Login;
