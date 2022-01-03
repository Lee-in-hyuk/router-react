import { Route, Routes, Link } from 'react-router-dom';
import Main from './components/Main';
import Company from './components/Company';
import Product from './components/Product';
import Community from './components/Community';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1><Link to ="/">Green</Link></h1>
        <ul>
          {/* 쿼리스트링(?뒤에 쓰는것들)에 &를 써서 id값도 설정 가능 */}
          <li><Link to ="/company?name=green&id=com">회사소개</Link></li>
          <li><Link to ="/product/product1">제품소개</Link></li>
          <li><Link to ="/community">커뮤니티</Link></li>
        </ul>
      </header>
      {/* 링크주소에 따라서 다른 컴포넌트를 나타냄 */}
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/product/:pro" element={<Product/>}/>
        <Route path="/community/*" element={<Community/>}/>
      </Routes>
    </div>
  );
}

export default App;
