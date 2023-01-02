
import { Helmet } from "react-helmet";
import Home from "./FixedComponent/HomePage/Home";
// import Navbar from "./SharedComponent/Nabbar/Navbar";


function App() {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>GR NISAN</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      {/* <Navbar/> */}
      <Home/>
      
    </div>
  );
}

export default App;
