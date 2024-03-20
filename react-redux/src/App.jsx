import React from 'react';
import { useState } from "react";
import AppReactClass from "./AppReactClass";
import FormLogin from "./FormLogin";
import './styles-invoice.css'

//Due oggetti nella parcella
const firstOrder = { "company": "Kautzer - Spinka", "client": "Lubowitz, Graham and Prosacco", "number": 10, "date": "2021-03-12T14:40:37.649+01:00", "items": [{ "description": "Refined Granite Chicken", "quantity": 4, "price": 189.0, "tax": 0.22 }, { "description": "Beef", "quantity": 5, "price": 200.0, "tax": 0.22 }] };
const secondOrder = { "company": "Mario - Spa", "client": "Fabio, Bobo", "number": 11, "date": "2021-03-12T14:40:37.649+01:00", "items": [{ "description": "Beef", "quantity": 5, "price": 200.0, "tax": 0.22 }] };
const orders = [firstOrder, secondOrder];
//const userObject = JSON.parse(userJson); per il parse

function App() {
    const [formData, setFormData] = useState(undefined);
    /*{invoiceNumber:'', presentationMode:''}*/

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    if (formData === undefined) {
        return <FormLogin onSubmit={handleFormSubmit} />;

    } else if (formData.presentationMode === "react-classes") {

        //Controllo della presenza dati
        const foundInvoice = findInvoiceByNumber(formData.invoiceNumber, orders);
        if (foundInvoice) {
            return <AppReactClass invoice={foundInvoice} />;
        } else {
            console.log("no match")
            return <FormLogin onSubmit={handleFormSubmit} />;
        }
    }
    return <div>Invalid presentation mode</div>;
}

export default App;

function findInvoiceByNumber(invoiceNumber, invoices) {
    for (let invoice of invoices) {
        // Controlla se il numero della fattura corrisponde all'invoiceNumber fornito
        if (invoice.number == invoiceNumber) {
            return invoice;
        }
    }
    //Non trovato
    return null;
}

