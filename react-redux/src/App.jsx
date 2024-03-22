import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import AppReactClass from "./AppReactClass";
import AppReactHooks from './AppReactHooks';
import FormLogin from "./FormLogin";
import AppRedux from './Redux/AppRedux';

import './styles-invoice.css';

function App() {
    const [formData, setFormData] = useState(undefined);
    const [invoiceData, setInvoiceData] = useState(null); // Stato per memorizzare i dati dell'invoice

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    useEffect(() => {
        if (formData && formData.presentationMode) {
            getInvoiceData(formData.invoiceNumber).then(foundInvoice => {
                if (foundInvoice) {
                    // Memorizza i dati dell'invoice nello stato
                    setInvoiceData(foundInvoice);
                }
            });
        }
    }, [formData]);

    if (!formData) {
        return <FormLogin onSubmit={handleFormSubmit} />;
    }

    if (invoiceData) {
        if (formData.presentationMode === "react-classes") {
            return <AppReactClass invoice={invoiceData} />;
        } else if (formData.presentationMode === "react-hooks") {
            return <AppReactHooks invoice={invoiceData} />;
        } else if (formData.presentationMode === "react-redux") {

            return (
                <Provider store={store}>
                    <AppRedux invoice={invoiceData} />
                </Provider>
            );
        }
    }
    return (
        <>
        <span className="popuptext" id="myPopup">Invalid invoice id</span>
        <FormLogin onSubmit={handleFormSubmit} />
        </>
    );
}

async function findInvoiceByNumber(invoiceNumber) {
    const response = await fetch('http://localhost:8081/api/' + invoiceNumber);
    const data = await response.json();
   
    if (data && data.number == invoiceNumber) {
        return data;
    }
    return null;
}

async function getInvoiceData(invoiceNumber) {
    const foundInvoice = await findInvoiceByNumber(invoiceNumber);
    return foundInvoice;
}

export default App;
