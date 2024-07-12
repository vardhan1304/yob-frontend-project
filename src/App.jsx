import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <>
      <div className="size-full md:size-aut ">
        <div className="flex flex-col ">
          <div className="">
            <Header />
          </div>

          {/* <div className="bg-red-100 "> */}
          <div className="bg-gradient-to-b from-red-200 md:from-c-200 min-h-screen">
            <div className="bg-rose-50 mx-14 my-14 rounded-3xl">
              <MainContent />
            </div>
          </div>

          <div>
            {" "}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
