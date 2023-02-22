import { Container } from "../../globalStyle.js";
import { LinkSubmit } from "../../components/Link/styled.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../components/Input/index.jsx";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Deve ser um e-mail")
      .required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  })
  .required();

export function Login() {
  const { submitsLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <main id="main-login">
      <figure className="logo">
        <img src="/logo.svg" alt="Logo, em rosa: Kenzie Hub" />
      </figure>
      <Container>
        <section id="login-section">
          <h3>Login</h3>

          <form onSubmit={handleSubmit(submitsLogin)}>
            <Input
              label="E-mail"
              id="email"
              type="text"
              error={errors.email?.message}
              register={register}
              placeholder="Digite aqui seu e-mail"
            />

            <Input
              label="Senha"
              id="password"
              type="password"
              error={errors.password?.message}
              register={register}
              placeholder="Digite aqui sua senha"
            />

            <button>Entrar</button>
          </form>
          <p>Ainda não possui uma conta?</p>
          <LinkSubmit to="/cadastro">Cadastre-se</LinkSubmit>
        </section>
      </Container>
    </main>
  );
}
