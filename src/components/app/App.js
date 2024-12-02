
import { Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import s from './aap.module.css';
import sel from 'classnames';
import Main from '../../pages/main/main';
import Materials from '../../pages/materials/materials';


function App() {
  return (
    <div className={s.app}>
      <Header />
      <Routes>
        <Route path='*' element={<div>404</div>} />
        <Route path='/cards-list' element={<Main />} />
        <Route path='/cards-list/materials' element={<Materials />} />
    
      </Routes>
    </div>
  )
 
}

export default App;
