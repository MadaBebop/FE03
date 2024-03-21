import React from 'react';
import { useState } from "react";

import AppReactClass from "./AppReactClass";
import AppReactHooks from './AppReactHooks';
import FormLogin from "./FormLogin";
import * as fetchedInvoice from './data.json';


import AppRedux from './Redux/AppRedux';
import { Provider } from 'react-redux';
import store from './Redux/store';

import './styles-invoice.css'

function App() {
    const [formData, setFormData] = useState(undefined);
    /*IN: {invoiceNumber:'', presentationMode:''}*/

    const invoice = fetchedInvoice;

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    if (formData === undefined) {
        return <FormLogin onSubmit={handleFormSubmit} />;

    } else if (formData.presentationMode === "react-classes") {
        //Controllo della presenza invocie
        const foundInvoice = findInvoiceByNumber(formData.invoiceNumber, invoice);
        if (foundInvoice) {
            return <AppReactClass invoice={foundInvoice} />;
        } else {
            return <FormLogin onSubmit={handleFormSubmit} />;
        }
    } else if (formData.presentationMode === "react-hooks") {
        //Controllo della presenza invoice
        const foundInvoice = findInvoiceByNumber(formData.invoiceNumber, invoice);
        if (foundInvoice) {
            return <AppReactHooks invoice={foundInvoice} />;
        } else {
            return <FormLogin onSubmit={handleFormSubmit} />;
        }
    } else if (formData.presentationMode === "react-redux") {
        //Controllo della presenza invoice
        const foundInvoice = findInvoiceByNumber(formData.invoiceNumber, invoice);

        if (foundInvoice) {
            return (
                <Provider store={store}>
                    <AppRedux invoice={foundInvoice}/>
                </Provider>
            );
        } else {
            return <FormLogin onSubmit={handleFormSubmit} />;
        }
    }
    return <div>Invalid presentation mode</div>;
}

function findInvoiceByNumber(invoiceNumber, invoice) {
    if (invoice.number == invoiceNumber) {
        return invoice;
    }
    return null;
}

export default App;