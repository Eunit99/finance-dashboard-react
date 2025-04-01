import "./App.css";
import { useState, useEffect } from "react";
import PasswordReset from "./authentication/authComponents/passwordReset.js";
import OTPVerification from "./authentication/authComponents/otpVerification.js";
import NewPassword from "./authentication/authComponents/newPassword.js";
import Dashboard from "./pages/Dashboard.js";
import Transactions from "./pages/reports/transactions.reports.js";
import TransactionsEditsReport from "./pages/reports/transactionsEdits.reports.js";
import AllBlinkers from "./pages/myBlinkers/allBlinkers.js";
import BlinkerDetails from "./pages/myBlinkers/blinkerDetails.js";
import Guardians from "./pages/blinkUsers/guardians.js";
import Blinkers from "./pages/blinkUsers/blinkers.js";
import Bursars from "./pages/blinkUsers/bursers.js";
import Merchants from "./pages/blinkUsers/merchants.js";
import SchoolAdmin from "./pages/blinkUsers/schoolAdmins.js";

// mapping js
import MapView from "./pages/mapping/map.js";
import MapView2 from "./pages/mapping/map2";
import AuthMainContainer from "./authentication/authMainContainer.js";
import { Helmet } from "react-helmet";
import {
  Route,
  Routes,
  Navigate,
  HashRouter,
  BrowserRouter,
} from "react-router-dom";

function App() {
  useEffect(() => {
    localStorage.setItem("adminId", "tryve");
    let loggedadminId = localStorage.getItem("adminId");
    console.log(loggedadminId);
  }, []);

  const [theadminId, setTheadminId] = useState("0K");
  const [isActive, setIsActive] = useState(false);



  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    event.currentTarget.classList.toggle("bg-salmon");
    alert("it will be unmounted");
    // unmountComponentAtNode(document.getElementById('layout-wrapper'))
    // const location=useLocation();
  };

  return (
    <>
      <BrowserRouter></BrowserRouter>

      <HashRouter>
        <Routes>
          <>
            <Route exact path={"/"} element={<Dashboard />}>
              <Route exact path={"Transactions"} element={<Transactions />}></Route>
              <Route exact path={"TransactionsEditsReport"} element={<TransactionsEditsReport />}></Route>
              <Route exact path={"MyBlinkers"} element={<AllBlinkers />}></Route>
              <Route exact path={"Guardians"} element={<Guardians />}></Route>
              <Route exact path={"BlinkerDetails/:id"} element={<BlinkerDetails />}></Route>
              <Route exact path={"Blinkers"} element={<Blinkers />}></Route>
              <Route exact path={"Bursars"} element={<Bursars />}></Route>
              <Route exact path={"Merchants"} element={<Merchants />}></Route>
              <Route exact path={"SchoolAdmin"} element={<SchoolAdmin />}></Route>
              <Route exact path={"MapView"} element={<MapView />}></Route>
              <Route exact path={"MapView2"} element={<MapView2 />}></Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </>
        </Routes>
      </HashRouter>
      <Helmet>
        {/* <!-- App js --> */}

        <script src="./assets/libs/parsleyjs/parsley.min.js"></script>
        <script src="./assets/js/pages/form-validation.init.js"></script>
        <script src="./assets/js/app.js "></script>
        <script src="./assets/js/custom.js "></script>


      </Helmet>
    </>
  );
}

export default App;
