
import { Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import s from './aap.module.css';
import sel from 'classnames';
import Main from '../../pages/main/main';
import Materials from '../../pages/materials/materials';
import Practice from '../../pages/practice/practice';


function App() {
  return (
    <div className={s.app}>
      <Header />
      <Routes>
        <Route path='*' element={<div>404</div>} />
        <Route path='/cards-list' element={<Main />} />
        <Route path='/cards-list/materials' element={<Materials />} />
        <Route path='/cards-list/practice' element={<Practice />} />
      </Routes>
    </div>
  )
 
}

export default App;
