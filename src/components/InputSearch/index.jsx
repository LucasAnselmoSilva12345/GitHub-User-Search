import React from 'react';

import { Container, Form, Input, Button } from './style.js';

export function InputSearch() {
  const [username, setUsername] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Digite o username do GitHub"
        />
        <Button>Search</Button>
      </Form>
    </Container>
  );
}
