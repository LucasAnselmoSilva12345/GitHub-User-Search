import { Moon } from 'phosphor-react';
import React from 'react';

import {
  Container,
  Profile,
  SwitchThemeContainer,
  SwitchThemeLabel,
} from './style.js';

export function Header() {
  return (
    <Container>
      <Profile>devFinder</Profile>
      <SwitchThemeContainer>
        <SwitchThemeLabel>Dark</SwitchThemeLabel>
        <Moon size={32} weight="light" color="#3B82F6" />
      </SwitchThemeContainer>
    </Container>
  );
}
