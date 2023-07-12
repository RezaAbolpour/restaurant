import Context from './components/Context';
import React, { useState } from 'react';
import LoadingPage from './components/loading/LoadingPage';

function App() {
  const [totalOrders, setTotalOrders] = useState(0)
  const discountCode = [{ code: "XD11CSF48V", percent: 10 },
  { code: "ahvaz", percent: 5 },
  { code: "mis", percent: 12 },
  { code: "lali", percent: 20 }]
  return (
    <Context.Provider value={{ totalOrders: totalOrders, setTotalOrders: setTotalOrders, discountCodeList:discountCode, set_pricecount:null,set_Clear:null }}>
      <LoadingPage/>
    </Context.Provider>
  );
}

export default App;
