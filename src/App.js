import React from 'react';
import {BrowserRouter as Router, Route , Switch} from "react-router-dom"; //ดึง Router Route Switch มาใช้
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Menu from "./components/Menu";

const App = () => {
  return (

       <Router>
         <Menu /> {/* ดึงหน้า Menu มาใช้ จาก components /*/} 
         <Switch>
           <Route exact path="/" component={Home} /> {/* exact path คือหน้าแรกที่มันจะไป/*/} 
           <Route path="/home" component={Home} />{/* ถ้า /home จะไปที่ component Home ที่ import มา/*/} 
           <Route path="/add" component={AddProduct} />
           <Route path="/edit/:id" component={EditProduct} /> {/* จะไปที่หน้า edit ที่ id ที่ส่งไป/*/} 
         </Switch>
       </Router>
  );
};

export default App;
