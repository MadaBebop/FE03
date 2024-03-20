import React from 'react';
import { useState } from 'react';

function FormLogin({ onSubmit }) {
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [presentationMode, setPresentationMode] = useState('react-classes');

    const handleInvoiceNumberChange = (event) => {
        setInvoiceNumber(event.target.value);
    };

    const handlePresentationModeChange = (event) => {
        setPresentationMode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ invoiceNumber, presentationMode });
    };

    return (
        <div className="invoiceapp invoiceapp-main">
            <form className="invoiceapp-chooser" id="invoice-form" onSubmit={handleSubmit}>
                <div className="invoiceapp-chooser__item">
                    <label htmlFor="invoice-number">Invoice Number:</label>
                    <input
                        type="text"
                        name="invoice-number"
                        id="invoice-number"
                        value={invoiceNumber}
                        onChange={handleInvoiceNumberChange}
                    />
                </div>
                <div className="invoiceapp-chooser__item">
                    <label htmlFor="presentation-mode">Presentation Mode:</label>
                    <select
                        value={presentationMode}
                        onChange={handlePresentationModeChange}
                        name="presentation-mode"
                        id="presentation-mode"
                    >
                        <option value="react-classes">React with Classes</option>
                        <option value="react-hooks">React with Hooks</option>
                        <option value="react-redux">React & Redux</option>
                    </select>
                </div>
                <input type="submit" value="Show invoice" />
            </form>
        </div>
    );
}

export default FormLogin;
