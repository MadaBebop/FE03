import React from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

function InvoiceHeader({ invoice }) {
  let date = new Date(invoice.date);
  let giorno = date.getDate();
  let mese = date.getMonth() + 1;
  let anno = date.getFullYear();
  let ore = date.getHours();
  let completeDate = giorno + '/' + mese + '/' + anno + ' ' + ore;

  return (
    <div className="invoiceapp-invoice__header">
      <div className="invoiceapp-invoice__header__title invoiceapp-invoice__header__title--company">
        <span>Company: {invoice.company}</span>
      </div>
      <div className="invoiceapp-invoice__data">
        <span className="invoiceapp-invoice__header__title invoiceapp-invoice__header__title--client">
          CLient: {invoice.client}
        </span>
        <span className="invoiceapp-invoice__data__value invoiceapp-invoice__data__value--invoice">
          Invoice: {invoice.number}
        </span>
        <span className="invoiceapp-invoice__data__value invoiceapp-invoice__data__value--date">
          Date: {completeDate}
        </span>
      </div>
    </div>
  );
}

// function BottomHeader({ invoice }) {
//   let totalCostInvoice = 0;

//   invoice.items.forEach(item => {
//     totalCostInvoice += item.price * item.quantity;
//   });

//   return (
//     <>
//       <div className="invoiceapp-invoice__paging">
//         <button>&#60;</button>
//         <span>Page 1 di 1</span>
//         <button disabled>&#62;</button>
//       </div>
//       <div className="invoiceapp-invoice__summary">
//         <span>{totalCostInvoice}</span>
//       </div>
//     </>
//   );
// }

function BottomHeader() {
    const invoice = useSelector(state => state.invoice);
  
    // Assicurati che invoice e items siano definiti prima di accedere a invoice.items
    if (!invoice || !invoice.items) {
      return null;
    }
  
    let totalCostInvoice = 0;
    invoice.items.forEach(item => {
      totalCostInvoice += item.price * item.quantity;
    });
  
    return (
      <>
        <div className="invoiceapp-invoice__paging">
          <button>&#60;</button>
          <span>Page 1 di 1</span>
          <button disabled>&#62;</button>
        </div>
        <div className="invoiceapp-invoice__summary">
          <span>{totalCostInvoice}</span>
        </div>
      </>
    );
  }
  

function TableData({ description, quantity, price, tax }) {
  let amount = quantity * price;
  return (
    <tr className="invoiceapp-invoice__table-row">
      <td>{description}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{tax}</td>
      <td>{amount}</td>
    </tr>
  );
}

// function InvoiceItems({ invoice }) {
//   let n = 0;
//   return (
//     <>
//       {invoice.items.map(item => (
//         <TableData {...item} key={invoice.number + (++n)} />
//       ))}
//     </>
//   );
// }

function InvoiceItems() {
    const invoice = useSelector(state => state.invoice);
    
    // sia invoice che items devono essere definiti prima di accedere 
    if (!invoice || !invoice.items) {
      return null;
    }
  
    let n = 0;
    return (
      <>
        {invoice.items.map(item => (
          <TableData {...item} key={invoice.number + (++n)} />
        ))}
      </>
    );
  }
  


function AppRedux({ invoice }) {
  return (
    <div className="invoiceapp invoiceapp-invoice">
      <InvoiceHeader invoice={invoice} />
      <table className="invoiceapp-invoice__table">
        <tbody>
          <tr className="invoiceapp-invoice__table-row invoiceapp-invoice__table-row--header">
            <th>Description</th>
            <th>Qty</th>
            <th>Unit price</th>
            <th>Tax</th>
            <th>Amount</th>
          </tr>
          <InvoiceItems invoice={invoice} />
        </tbody>
      </table>
      <BottomHeader invoice={invoice} />
    </div>
  );
}

const mapStateToProps = state => ({
  invoice: state.invoice
});

export default connect(mapStateToProps)(AppRedux);
