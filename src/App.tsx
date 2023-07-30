import { useState } from "react";
import { styled } from "styled-components";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", value);
  };

  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;

  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="user name please"
        ></input>
        <button>Log In</button>
      </form>
      <Container>
        <H1>Hi!!!! Theme Test</H1>
      </Container>
    </div>
  );
}

export default App;
