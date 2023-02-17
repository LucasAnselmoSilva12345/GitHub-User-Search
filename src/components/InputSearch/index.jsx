import React from 'react';

import { Container, Input, Button } from './style.js';

export function InputSearch() {
  return (
    <Container>
      <Input type="text" placeholder="Digite o username do GitHub" />
      <Button>Search</Button>
    </Container>
  );
}
