# Esercizio 3 - React, Redux

Obbiettivo: Verificare conoscenze di base di React, Redux e SASS.

Lo scopo è una SPA (Single Page Application) che mostri una fattura (invoice):

- Creare una serie di file js,jsx che soddisfino i seguenti requisiti.
  - Creare una SPA che sostituisca il `div` di id `application-content`.
  - Inizialmente si dovrà renderizzare una pagina che permetta di scegliere il modo di rendering e il numero della fattura.
    Vedi esempio main.html
  - Creare una pagina che visualizzi la fattura utilizzando SOLO classi React.
    Vedi esempio invoice.html
  - Creare una pagina che visualizzi la fattura utilizzando SOLO hook React.
    Vedi esempio invoice.html
  - Creare una pagina che visualizzi la fattura utilizzando React e Redux. I dati della fattura devono risiedere nello store.
    Vedi esempio invoice.html

## ATTENZIONE:

Vorrei che si facesse tesore delle linee-guida che vi sono state date nelle varie sessioni sulla scrittura/organizzazione del codice.
Il codice deve essere:

- organizzato in cartelle in modo logico e intuitivo
- i moduli, funzioni e classi devono essere semplici, con uno scopo preciso e chiaro, leggibili.
- i nomi di variabili, metodi, funzioni, classi, moduli devono essere parlanti.

## Utilizzo di un mock server

Come server di backend utilizzeremo webpack-dev-server che con la funzioni proxy potrà girare le chiamate GET del tipo `invoice/{id}` a un mock server che risponderà in `http://localhost:8081/3-react/invoce/{id}`.

A tale fine:

1. scaricare il mock server [mockoon](https://mockoon.com/).
1. importare la configurazione dal file mockoon.export.json.
1. configurare webpack-dev-server come sopra descritto.

Il mockserver produrrà una invoice con questa struttura:

```json
{
  "company": "Kautzer - Spinka",
  "client": "Lubowitz, Graham and Prosacco",
  "number": 10,
  "date": "2021-03-12T14:40:37.649+01:00",
  "items": [
    {
      "description": "Refined Granite Chicken",
      "quantity": 4,
      "price": 189.0,
      "tax": 0.22
    }
  ]
}
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
