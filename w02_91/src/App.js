import "./App.css";

import Book_91 from "./components/book_91";

function App() {
  return <ThreeBooks />;
}

const Book = () => {
  return (
    <article className="book">
      <img src="https://cf-assets2.tenlong.com.tw/products/images/000/189/330/medium/9787121452963.jpg?1681967788"></img>
      <h1>任洪彩</h1>
      <p>
        本書深入地講解了Go語言常見特性的內部機制和實現方式，大部分內容源自對Go源碼的分析，並從中提煉出實現原理。
      </p>
    </article>
  );
};

const ThreeBooks = () => {
  return (
    <section className="booklist">
      <Book_91
        key="1"
        img="https://cf-assets2.tenlong.com.tw/products/images/000/189/330/medium/9787121452963.jpg?1681967788"
        title="Go 專家編程, 2/e"
        author="任洪彩"
      />
      <Book_91
        key={2}
        img="https://cf-assets2.tenlong.com.tw/products/images/000/194/062/webp/9786263335998.webp?1694352557"
        title="Android 開源專案「真」實戰啟航：瀏覽器 App EinkBro 開發者帶你逐步從 UI 設計、UX 提升到多功能實現秘技全解析（iThome鐵人賽系列書）【軟精裝】"
        author="高茂原 (Daniel Kao)"
      />
      <Book_91
        key={3}
        img="https://cf-assets2.tenlong.com.tw/products/images/000/194/107/webp/F3487_%E5%A4%A9%E7%93%8F.webp?1694590044"
        title="決戰！微前端架構 Micro Frontends：新一代可擴展的網頁開發模式，實現各種框架的無縫整合與溝通"
        author="Michael Geers 著 林亭儀 譯"
      />
      <Book_91
        key={4}
        img="https://cf-assets2.tenlong.com.tw/products/images/000/194/107/webp/F3487_%E5%A4%A9%E7%93%8F.webp?1694590044"
        title="決戰！微前端架構 Micro Frontends：新一代可擴展的網頁開發模式，實現各種框架的無縫整合與溝通"
        author="Michael Geers 著 林亭儀 譯"
      />
      <Book_91
        key={5}
        img="https://cf-assets2.tenlong.com.tw/products/images/000/194/107/webp/F3487_%E5%A4%A9%E7%93%8F.webp?1694590044"
        title="決戰！微前端架構 Micro Frontends：新一代可擴展的網頁開發模式，實現各種框架的無縫整合與溝通"
        author="Michael Geers 著 林亭儀 譯"
      />
      <Book_91
        key={6}
        img="https://cf-assets2.tenlong.com.tw/products/images/000/194/107/webp/F3487_%E5%A4%A9%E7%93%8F.webp?1694590044"
        title="決戰！微前端架構 Micro Frontends：新一代可擴展的網頁開發模式，實現各種框架的無縫整合與溝通"
        author="Michael Geers 著 林亭儀 譯"
      />
    </section>
  );
};

export default App;
