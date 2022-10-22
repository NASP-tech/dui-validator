import { describe } from 'vitest';
import App from './App';
import * as ReactDOM from 'react-dom';
import React from 'react';

describe('App', () => {

    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<App />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it.todo('should render');

    it('should have title "Mi DUI es valido?"', () => {
        const title = container.querySelectorAll('h1');
        expect(title[0].textContent).toBe('Mi DUI es valido?');

    });

    it('should have an input text', () => {
        const input = container.querySelector('input');
        expect(input?.type).toBe('text');
    });


    it('should have a button with text "Validar"');
    /* Lo que demas que se les ocurra que puedan probar */
})
