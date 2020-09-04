import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';
import { act } from 'react-dom/test-utils';

test('Contact form accepts all input values and can be submitted', () => {
    render(<ContactForm />)

    const firstName = screen.getByLabelText(/first name*/i)
    expect(firstName).toBeTruthy();
    const lastName = screen.getByLabelText(/last name*/i)
    expect(lastName).toBeTruthy();
    const email = screen.getByLabelText(/email*/i)
    expect(email).toBeTruthy();
    const message = screen.getByLabelText(/message*/i);
    expect(message).toBeTruthy();

act(() => {
    fireEvent.change(firstName, {target: {value: 'Tom'}});
    fireEvent.change(lastName, {target: {value: 'Schwarzenegger'}});
    fireEvent.change(email, {target: {value: 'iamanemail@email.com'}});
    fireEvent.change(message, {target: {value: 'Hasta la vista, baby!'}});
})


    const submitButton = screen.getByTestId(/submit/i);
    expect(submitButton).toBeTruthy();
    fireEvent.click(submitButton);

})
