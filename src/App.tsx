
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { SubscriptionForm } from './components/Forms/Souscription/SubscriptionForm';

function App(){
  return(
    <div className='w-1/2 mx-auto' >
      <SubscriptionForm></SubscriptionForm>
    </div>
  )
}

export default App;
