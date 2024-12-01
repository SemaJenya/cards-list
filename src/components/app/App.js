
import { Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import s from './aap.module.css';
import sel from 'classnames';
import Main from '../../pages/main/main';


function App() {
  return (
    <div className={s.app}>
      <Header />
      <Routes>
        <Route path='*' element={<div>404</div>} />
        <Route path='/' element={<Main />} />

    
      </Routes>
    </div>
  )
 
}

export default App;
