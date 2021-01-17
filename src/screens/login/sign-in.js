import React, { useState } from "react";
import Link from "next/link";
import Loader from "app/components/UI/loader/loader";
import Router from "next/router";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onValidators = async (evt) => {
    setLoading(true);
    evt.preventDefault();
    setTimeout(() => {
      setLoading(false);
      if (email && password) {
        Router.push("/dash");
      }
    }, 200);
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form
          className="px-8 bg-white shadow-md rounded pt-6 pb-8 mb-4"
          onSubmit={onValidators}
        >
          <div className="flex items-center justify-center">
            <img
              src="imgs/logo/brasis-logo.png"
              alt="authentication"
              style={{ height: "80px", width: "auto" }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              E-mail
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Senha
              <input
                className={`shadow appearance-none rounded 
              w-full py-2 px-3 text-gray-700 mb-3 leading-tight 
              focus:outline-none focus:shadow-outline`}
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => console.log("esqueceu senha")}
              className="inline-block align-baseline font-bold text-sm 
                text-black hover:text-gray-800"
              style={{ backgroundColor: "white" }}
            >
              Esqueceu a senha?
            </button>
            {!loading && (
              <button
                className="w-24 text-white font-bold py-2 
                px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Entrar
              </button>
            )}
            {loading && (
              <div className="cursor-wait w-24 bg-black py-2 px-4 rounded flex justify-center">
                <Loader color="black" />
              </div>
            )}
          </div>
          <div className="pt-12 flex justify-center">
            <Link href="/sign-up">
              <a className="inline-block align-baseline font-bold text-sm text-black hover:text-gray-800">
                Não tem uma conta ainda?
              </a>
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2021 Brasis. Todos os direitos reservados.
        </p>
      </div>
    </>
  );
};

export default SignIn;
