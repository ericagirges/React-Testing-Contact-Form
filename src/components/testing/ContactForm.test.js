import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';

test('Contact form accepts all input values and can be submitted', () => {
    render(<ContactForm />)

    const firstName = screen.queryByPlaceholderText(/Edd/i);
    const lastName = screen.queryByPlaceholderText(/Burke/i);
    const email = screen.queryByPlaceholderText(/bluebill1049@hotmail.com/i);
    const message = screen.queryByLabelText(/message/i);

    console.log(firstName)

    fireEvent.change(firstName, {target: {value: 'Tom'}});
    fireEvent.change(lastName, {target: {value: 'Schwarzenegger'}});
    fireEvent.change(email, {target: {value: 'iamanemail@email.com'}});
    fireEvent.change(message, {target: {value: 'Hasta la vista, baby!'}});

    const submitButton = screen.getByText(/submit!/i);
    fireEvent.click(submitButton);

})
