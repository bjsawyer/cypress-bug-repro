import type { MountConfig } from 'cypress/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const setup = (): MountConfig<AppComponent> => ({
    providers: [],
  });

  it('should display dialog with header and content', () => {
    cy.mount(AppComponent, setup());
    cy.get('p').should('have.text', 'Hello World, from utils!');
  });
});
