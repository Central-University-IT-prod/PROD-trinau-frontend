import './App.css';
import Navbar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import sendRequest from './api/sendRequest';
// import { showNotification } from './service-worker';





function App() {



  return (
    <div className="container-fluid overflow-hidden">
      <div className='row vh-100 overflow-auto'>

        <Navbar />
        <div className='col-sm-9 p-3 min-vh-100' id='content'>
          <Outlet />
        </div>
      </div>


    </div>
  );
}

export default App;
