import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateInvoice } from './reducers';
import { calculateTotalCost } from '../utils';


function InvoiceHeader() {
  const invoice = useSelector(state => state.invoice.invoice);

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
          Client: {invoice.client}
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

function Footer({ currentPage, totalPages, onNextPage, onPrevPage }) {
  const invoice = useSelector(state => state.invoice.invoice);
  let totalCostInvoice = calculateTotalCost(invoice);

  return (
    <>
      <div className="invoiceapp-invoice__paging">
        <button onClick={onPrevPage} disabled={currentPage === 1}>&#60;</button>
        <span>Page {currentPage} di {totalPages}</span>
        <button onClick={onNextPage} disabled={currentPage === totalPages}>&#62;</button>
      </div>
      <div className="invoiceapp-invoice__summary">
        <span>{totalCostInvoice} i.c.</span>
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

function InvoiceItems({ currentPage, itemsPerPage }) {
  const invoice = useSelector(state => state.invoice.invoice);

  // sia invoice che items devono essere definiti prima di accedere 
  if (!invoice || !invoice.items) {
    return null;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, invoice.items.length);

  return (
    <>
      {invoice.items.slice(startIndex, endIndex).map((item, index) => (
        <TableData {...item} key={index} />
      ))}
    </>
  );
}

function AppRedux({ invoice }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(invoice.items.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateInvoice(invoice));
  }, [dispatch]);


  return (
    <div className="invoiceapp invoiceapp-invoice">
      <InvoiceHeader />
      <table className="invoiceapp-invoice__table">
        <tbody>
          <tr className="invoiceapp-invoice__table-row invoiceapp-invoice__table-row--header">
            <th>Description</th>
            <th>Qty</th>
            <th>Unit price</th>
            <th>Tax</th>
            <th>Amount</th>
          </tr>
          <InvoiceItems currentPage={currentPage} itemsPerPage={itemsPerPage} />
        </tbody>
      </table>
      <Footer
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
}

export default AppRedux;
