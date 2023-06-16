import React from 'react';
import 'antd/dist/reset.css';
import { Layout} from 'antd';
import "./App.css"
import AppHeader from './components/common/AppHeader';
import { Routes, Route,BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Shop from './pages/Shop';
import FooterWidget from './components/common/FooterWidget';
import FooterCopyright from './components/common/FooterCopyright';

 
const { Header, Footer,   Content } = Layout; 


function App() {
  return (
    <div className="App">
       <Layout> 
        <Router>
       <Header >
       <AppHeader/>
       </Header>
      
      <Content >
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/shop' element={<Shop/>} />
      </Routes>
      
      </Content>
       </Router>
     
      <Footer>
      <FooterWidget />
      <FooterCopyright/>
      </Footer>
    </Layout>


   
    </div>
  );
}

export default App;
