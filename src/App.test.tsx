import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe ('See if all components of the App rendered', () => {
    it('Main rendered', () => {
    render(<App />);
    const headerElement = screen.getByText(/К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ/i);
    expect(headerElement).toBeInTheDocument();
    })

    it('Aside rendered', () => {
    render(<App />);
    const logo1Element = screen.getByText(/ЧЕСТНЫЙ АГЕНТ/);
    expect(logo1Element).toBeInTheDocument();
    const logo2Element = screen.getByText(/МЕНЕДЖЕР ПРОЦЕССА/);
    expect(logo2Element).toBeInTheDocument();
    })

    it('Footer rendered', () => {
    render(<App />);
    const footerElement = screen.getByText(/© 1992 - 2020 Честный Агент © Все права защищены./);
    expect(footerElement).toBeInTheDocument();
    });
})
