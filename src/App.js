
import './App.css';

import {useSelector, useDispatch} from 'react-redux';

import { incCountAction, decCountAction } from './store/countReducer';


function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count.count);
  const customers = useSelector(state => state.customers.customers);
 
  const addCustomer = (name) => {
    if(!name) return
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch({type:"ADD_CUSTOMER", payload:customer})
  }
  const removeCustomer = (customer) => {
    dispatch({type:"REMOVE_CUSTOMER", payload:customer.id})
  }
  return (
    <div className="App">
        <p>{count}</p>
        <button onClick={() => {dispatch(incCountAction())}}>INC</button>
        <button  onClick={() => {dispatch(decCountAction())}}>DEC</button>
        <button onClick={() => {addCustomer(prompt())}}>Добавить пользователей</button>
        
        <ul>
          {customers.length>0 ?
            customers.map(customer => {
              return (
                <li onClick={() => {removeCustomer(customer)}} key={customer.id}>{customer.name}</li>
              )
            })
            :
            <span>пусто</span>
          }
        </ul>
    </div>
  );
}

export default App;
