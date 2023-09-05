import { Moon, Sun } from 'phosphor-react';
import React from 'react';

import { Container, Profile, SwitchThemeContainer } from './style.js';

export function Header({ theme, toggleTheme }) {
  return (
    <Container>
      <Profile>devFinder</Profile>
      <SwitchThemeContainer>
        {theme === 'light' ? (
          <Moon
            size={32}
            weight="light"
            color="#3B82F6"
            onClick={toggleTheme}
          />
        ) : (
          <Sun size={32} weight="light" color="#ffd43b" onClick={toggleTheme} />
        )}
      </SwitchThemeContainer>
    </Container>
  );
}
