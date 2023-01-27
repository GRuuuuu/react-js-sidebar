import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './content/LandingPage';
import SamplePage1 from './content/SamplePage1';
import SamplePage2 from './content/SamplePage2';
import SamplePage3 from './content/SamplePage3';
import Sidebar from './components/sidebar/Sidebar';
import AppLayout from './components/layout/AppLayout';

import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './lib/reducers/configReducer';
const App = () => {
  //const auth = useSelector(state => state.auth);
  const config = useSelector(state => state.config);
  const dispatch = useDispatch();
  console.log(config.theme);

  return (
    <>
      <div className="app" data-theme={config.theme}>
        <Routes>
          <Route path="/" element={<AppLayout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="/sample1" element={<SamplePage1/>}/>
            <Route path="/sample2" element={<SamplePage2/>}/>
            <Route path="/sample3" element={<SamplePage3/>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;