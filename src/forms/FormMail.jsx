import React from "react";
import { useState } from "react/cjs/react.development";

const FormMail = () => {
  const [mail, setMail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [showName, setShowName] = useState(false);
  const [name, setName] = useState("");
  function onSubmit() {
    if (pass1 !== pass2) {
      alert("Пароль не верный");
    } else if (pass1 === "" || mail === "" || pass2 === "") {
      alert("Заполните поля");
    } else {
      setName(mail);
      setShowName(true);
    }

    setMail("");
    setPass1("");
    setPass2("");
  }
  React.useEffect(() => {}, [showName]);
  return (
    <div>
      {showName && <h2>{name}</h2>}
      <form onSubmit={(event) => event.preventDefault()}>
        <h2>Form Email</h2>
        <input
          onChange={(event) => setMail(event.target.value)}
          type="text"
          placeholder="Введите @mail"
          value={mail}
        />
        <input
          onChange={(event) => setPass1(event.target.value)}
          type="password"
          placeholder="Введите пароль"
          value={pass1}
        />
        <input
          onChange={(event) => setPass2(event.target.value)}
          type="password"
          placeholder="Потвердите пароль"
          value={pass2}
        />
        <button onClick={onSubmit} type="submit">
          Войти
        </button>
        <button type="submit">Выйти</button>
      </form>
    </div>
  );
};

export default FormMail;
