import React from "react";
import { Button } from "../components/parts/Button";
import { Heading } from "../components/parts/Heading";
import { TextField } from "../components/parts/TextFiled";
import { useAuth } from "../hooks/use-auth";

export const Login = () => {
  const { login, username, setUserName } = useAuth();
  return (
    <main className="text-center mx-auto my-0">
      <Heading level="h1">loggin</Heading>
      <div className="flex gap-3">
        <TextField
          id="user-name"
          label="username"
          type="text"
          value={username}
          onChange={setUserName}
        />
        <Button onClick={login} color="red">
          loggin
        </Button>
      </div>
    </main>
  );
};
