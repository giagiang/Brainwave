import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
const App = () => {
  return(
  <>
    <h1 className="text-3xl font-bold "> Brain Wave </h1>
    <div className = "pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
      <Header/>      
    </div>
    <ButtonGradient />
  </>
  );
};

export default App;  
