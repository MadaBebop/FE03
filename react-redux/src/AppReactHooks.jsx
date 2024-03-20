import React from 'react';

function ReactHooks() {
  return (
    <div>
      {/* Contenuto del file invoice.html */}
    </div>
  );
}

export default ReactHooks;



// CONVERSIONE DA CLASSI:
/*
import React from 'react';


class InvoiceHeader extends React.Component {

  render() {
    const {invoice} = this.props;

    return (
      <>
        <div className="invoiceapp-invoice__header">
          <div className="invoiceapp-invoice__header__title invoiceapp-invoice__header__title--company">
            <span>{invoice.company}</span>
          </div>
          <div className="invoiceapp-invoice__data">
            <span className="invoiceapp-invoice__header__title invoiceapp-invoice__header__title--client">
              {invoice.client}
            </span>
            <span className="invoiceapp-invoice__data__value invoiceapp-invoice__data__value--invoice">
              {invoice.number}
            </span>
            <span className="invoiceapp-invoice__data__value invoiceapp-invoice__data__value--date">
              {invoice.date}
            </span>
          </div>
        </div>
      </>
    );
  }
}

class BottomHeader extends React.Component {

  render() {
    // const { orders } = this.props;
    return(
    <>
      <div className="invoiceapp-invoice__paging">
        <button>&#60;</button>
        <span>Page 3 di 3</span>
        <button disabled>&#62;</button>
      </div>
      <div className="invoiceapp-invoice__summary">
        <span>Total 985.23 (da fare il conto)</span>
      </div>
    </>
    );
  }
}

class TableData extends React.Component {
  render() {
    const items = this.props;
    return (
      <>
      <tr className="invoiceapp-invoice__table-row">
        <td>{items.description}</td>
        <td>{items.quantity}</td>
        <td>{items.price}</td>
        <td>{items.tax}</td>
        <td>numero (completare)</td>
      </tr>
      </>
    );
  }
}

class InvoiceItems extends React.Component {

  render(){
    let n = 0;
    const {invoice} = this.props.invoice;
  return (
    <>
    {invoice.items.map(item => <TableData {...item} key={invoice.number + (++n)} />)}
    </>
  );
}
}

class AppReactClass extends React.Component {  
  state = {
    invoice  : this.props
  };

  render() {
    return(
    <div className="invoiceapp invoiceapp-invoice">
      <InvoiceHeader invoice={this.state.invoice}/>
      <table className="invoiceapp-invoice__table">
      <tbody>
      <tr className="invoiceapp-invoice__table-row invoiceapp-invoice__table-row--header">
        <th>Description</th>
        <th>Qty</th>
        <th>Unit price</th>
        <th>Tax</th>
        <th>Amount</th>
      </tr>
      <InvoiceItems invoice={this.state.invoice}/>
      </tbody>
      </table>
      <BottomHeader/>
    </div>
    );
  }
}

export default AppReactClass;
*/