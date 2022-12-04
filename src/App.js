import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SideNavBar from "./components/NavBar/SideNavBar";
import EmployeeCreateAndUpdate from "./pages/employeeCreateAndUpdate/EmployeeCreateAndUpdate";
import EmployeeView from "./pages/employeView/EmployeeView";

function App() {
  return (
    <>
      {/* */}
      <Router>
        <div className="d-flex min-vh-100">
          {" "}
          <SideNavBar />
          <Switch>
            <Route exact path="/">
              <div>Landing page</div>
            </Route>
            <Route path="/saveEmployee">
              <EmployeeCreateAndUpdate></EmployeeCreateAndUpdate>
            </Route>
            <Route path="/viewEmployee">
              <EmployeeView></EmployeeView>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
