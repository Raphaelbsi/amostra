import React, { Fragment, useState } from "react";
import {
  Button,
  Field,
  Control,
  Input,
  Column,
  Section,
  Help,
  Label,
} from "rbx";
import { Redirect } from "react-router-dom";
import UserService from "../../../services/usuarios";

function RegisterForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  if (redirectToLogin) return <Redirect to={{ pathname: "/login" }} />;

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const usuario = await UserService.register({
        nome: nome,
        email: email,
        password: password,
        altura: altura,
        idade: idade,
        sexo: sexo
      });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Fragment>
      <Column.Group centered>
        <form onSubmit={handleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Nome:</Label>
              <Control>
                <Input
                  type="name"
                  required
                  name="name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Senha:</Label>
              <Control>
                <Input
                  type="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Altura:</Label>
              <Control>
                <Input
                  type="name"
                  required
                  name="Altura"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Idade:</Label>
              <Control>
                <Input
                  type="name"
                  required
                  name="Idade"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Sexo:</Label>
              <Control>
                <Input
                  type="name"
                  required
                  name="Sexo"
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <a
                      className="button is-white has-text-custom-purple"
                      onClick={(e) => setRedirectToLogin(true)}
                    >
                      Login or
                    </a>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>
                      Register
                    </Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {error && <Help color="danger">Email ou password Invalido</Help>}
          </Column>
        </form>
      </Column.Group>
    </Fragment>
  );
}

export default RegisterForm;
