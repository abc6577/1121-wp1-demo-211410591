import { useState } from "react";
import "./App.css";
import menu_data from "./data";
import Menu_91 from "./components/Menu_91";
import Category_91 from "./components/Category_91";

const App = () => {
  const [menu, setMenu] = useState(menu_data);
  //console.log("menu", menu);
  return (
    <section className="menu">
      <div className="title">
        <h2>our menu - 211410591</h2>
        <div className="underline"></div>
      </div>
      <Category_91 />
      <Menu_91 menu={menu} />
    </section>
  );
};

export default App;
