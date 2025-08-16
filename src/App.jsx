import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return <div style={{ color: "red", fontSize: "48px" }}>Hello World!</div>;
};

export default App;
 // <Provider store={appStore}>
    //   <h1>Hello</h1>
    //   <Body />
    // </Provider>