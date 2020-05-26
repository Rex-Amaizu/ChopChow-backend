import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import MealsPage from "./components/mealsPage/MealsPage";
import ProductsSection from "./components/productsPage/ProductsPage";
import Login from "./components/Login";
import GroceryPage from "./components/GroceryPage";
import SignUp from "./components/signup";
import ForgotPassword from "./components/forgotpassword";
import ResetPassword from "./components/resetpassword";

class App extends Component {

  constructor(props) {
    super(props);
    this.updateLogInStatus = this.updateLogInStatus.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    this.state = {
      suggestMealPopOver: false,
      // valueAllDataLists: [],
      base_index: 0,
      topNav_className: "w3-bar w3-dark-grey w3-green topnav",
      isAuthenticated: false,
      customerId: null

    };
  }

  updateLogInStatus(customerId){
    console.log("updates log in status before");
    this.setState({isAuthenticated : true})
    this.setState({customerId : customerId})

    console.log("updates log in status after");
    console.log("customerID is:" + customerId);

    // return to page that called log in popup.
    window.location.href = '/grocery'
  }

  componentDidMount(){
    console.log("Comes in app.js's component did mount");
     // api authenticate grocery calls authenticationVerify,isAuthenticated
      this.authenticateUser();
      console.log("customerID is:" + this.state.customerId);

  }
  
    authenticateUser(){
      var localToken = window.localStorage.getItem('userToken');

      // var url = `https://chopchowdev.herokuapp.com/api/authenticate-grocery-page`;
    var url = `./api/authenticate-app-page`
    // var url = `http://localhost:5000/api/authenticate-grocery-page`
    fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+localToken
      },
    })
      .then(res => {
        return res.json()
      })
      .then(response => {
        console.log("api/ authenticate grocery(app page) response:")
        console.log(response);

        if (response.success && response.data) {
          this.setState({ isAuthenticated: true });
        } else {
          this.setState({ isAuthenticated: false })
        }

        this.setState({ customerId: response.data })
        const { customerId } = this.state;
        console.log("customer id iis: "+ customerId);
      })
      .catch(err=>{
        console.log("fails to authenticate app page");
        console.log(err);
      })

    }


  handleLogout(){
    //clear cookie cache
    window.localStorage.setItem('userToken', null);



    var url = '/api/logout';

    fetch(url, {
      method: "GET",
      credentials: 'same-origin',
      headers: {
          'Content-type': 'application/json',
      }
  })
    .then(response => {
      response.json()
          .then(res => {
          console.log("logout response is:");
          console.log(res);
          console.log("should print body");
          // var bodyResponse = JSON.parse(res.body);
          console.log(res.data);
          if (res.data === "success") {
            console.log("comes to turn off authentication state")
            this.setState({ isAuthenticated: false })
          }
    })
  })
    .catch(err=>{
      console.log("fails to authenticate app page");
      console.log(err);
    })

    this.setState({ isAuthenticated: false })

  }


  render() {
    // Render your page inside
    // the layout provider
    //const elements = ['one', 'two', 'three'];
    //const popOverInfo = []
    const {
      itemTypeahead,
      // valueAllDataLists,
      isAuthenticated,
      customerId,
    } = this.state;
    const items = [];
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function myFunction() {
      var x = document.getElementById("mobileNavbar");
      console.log(x);
      // console.log({this.state.topNav_className});
      if (x.className === "mobileNavbar") {
        x.className += " visible";
      } else {
        x.className = "mobileNavbar";
      }

      // var y = document.getElementById("myTopnav2");
      // if (y.className === "topnav"){
      //     y.className += " responsive";
      //   }
      //   else{
      //       //sync test nav bar as well
      //       y.className = "topnav";
      //   }
    }

    var login_on_desktop_navbar;
    var login_on_burger_navbar;
    if(this.state.isAuthenticated){
        login_on_desktop_navbar =          <li className="nav-item">
        <button className="nav-link px-2" onClick={this.handleLogout}>
        Logout
        </button>
      </li>;
      login_on_burger_navbar = <li className="nav-item" style={{ padding: "14px 16px" }} >
      <button
        to="/login"
        className="nav-link px-2"
        style={{ color: "#FFFFFF" }}
        onClick={this.handleLogout}
      >
          Logout
      </button>
    </li>
    }
    else{
      login_on_desktop_navbar = <li className="nav-item">
      <Link to="/login" className="nav-link px-2" >
      Log In / Register
      </Link>
    </li>;
    login_on_burger_navbar = <li className="nav-item" style={{ padding: "14px 16px" }}>
    <Link
      to="/login"
      className="nav-link px-2"
      style={{ color: "#FFFFFF" }}
    >
        Log In / Register
    </Link>
  </li>
    }

    return (
      <div>
        {/* <div> */}

        {/* <div className={this.state.topNav_className} id="myTopnav"> */}

        <nav
          className="navbar navbar-expand-md fixed-top-sm justify-content-start flex-nowrap  navbar-light "
          style={{
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #fd7e14"
          }}
        >
          
          {/* Desktop Navbar */}
          <Link to="/" className="navbar-brand">
            CHOP CHOW
          </Link>
          <ul className="navbar-nav flex-row navbar-first">
            <li className="nav-item">
              <form className="form-inline" style={{ padding: "14px 16px" }}>
                <div className="input-group">
                  <input
                    className="form-control"
                    placeholder="Search meal or category"
                  />
                  <span className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      style={{
                        backgroundColor: "#fd7e14",
                        borderColor: "#fd7e14"
                      }}
                    >
                      <i
                        className="fa fa-search"
                        style={{ color: "#FFFFFF" }}
                      ></i>
                    </button>
                  </span>
                </div>
              </form>
            </li>

            <li className="nav-item">
              <Link to="/grocery" className="nav-link px-2">
                Grocery List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link px-2">
                Shop
              </Link>
            </li>
            {login_on_desktop_navbar}
            {/* <li className="nav-item">
              <Link to="/login" className="nav-link px-2">
                {this.state.logged_in_status}
              </Link>
            </li> */}
          </ul>
          <Link
            to="#"
            className="icon navbar-toggle"
            onClick={() => {
              console.log("Comes thru here");
              myFunction();
            }}
          >
            <i
              className="fa fa-bars"
              style={{ color: "#AAAAAA", right: "1%" }}
            ></i>
          </Link>
        </nav>

        {/* Burger navbar */}
        <div
          className="mobileNavbar"
          id="mobileNavbar"
          style={{ display: "none" }}
        >
          <div className="mobileNavbar-menu">
            <ul className="navbar-nav">
              <li
                style={{
                  padding: "14px 16px",
                  borderBottom: "1px solid #FFFFFF"
                }}
              >
                <form className="form-inline" style={{ padding: "14px 16px" }}>
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Search meal or category"
                      style={{
                        backgroundColor: "#fd7e14",
                        border: "1px solid #FFFFFF",
                        width: "80%"
                      }}
                    />
                    <span className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{
                          backgroundColor: "#FFFFFF",
                          borderColor: "#fd7e14"
                        }}
                      >
                        <i
                          className="fa fa-search"
                          style={{ color: "#fd7e14" }}
                        ></i>
                      </button>
                    </span>
                  </div>
                </form>
              </li>
              {login_on_burger_navbar}
              {/* <li className="nav-item" style={{ padding: "14px 16px" }}>
                <Link
                  to="/login"
                  className="nav-link px-2"
                  style={{ color: "#FFFFFF" }}
                >
                    {this.state.logged_in_status}

                </Link>

              </li> */}
              <li className="nav-item" style={{ padding: "14px 16px" }}>
                <button
                  className="nav-link px-2"
                  style={{ color: "#FFFFFF" }}
                >
                  Cart Page
                </button>
              </li>
              <li
                className="nav-item"
                style={{
                  padding: "14px 16px",
                  borderBottom: "1px solid #FFFFFF"
                }}
              >
                <Link
                  to="/products"
                  className="nav-link px-2"
                  style={{ color: "#FFFFFF" }}
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item" style={{ padding: "14px 16px" }}>
                <Link
                  to="/v2"
                  className="nav-link px-2"
                  style={{ color: "#FFFFFF" }}
                >
                  {" "}
                  Featured Receipes
                </Link>
              </li>
              <li className="nav-item" style={{ padding: "14px 16px" }}>
                <Link
                  to="/grocery"
                  className="nav-link px-2"
                  style={{ color: "#FFFFFF" }}
                >
                  Grocery List
                </Link>
              </li>
              <li className="nav-item" style={{ padding: "14px 16px" }}>
                <Link
                  to="/products"
                  className="nav-link px-2"
                  style={{ color: "#FFFFFF" }}
                >
                  Products
                </Link>
              </li>
              <li
                className="nav-item"
                style={{
                  padding: "14px 16px",
                  borderBottom: "1px solid #FFFFFF"
                }}
              >
                <button
                  className="nav-link px-2"
                  style={{ color: "#FFFFFF" }}
                >
                  Stats
                </button>
              </li>
            </ul>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-md  navbar-light navbar-second"
          style={{ backgroundColor: "#EEEEEE" }}
        >
          <div className="navbar-collapse collapse pt-2 pt-md-0" id="navbar2">
            <ul className="navbar-nav">
              <li className="nav-item active" style={{ marginRight: "50%" }}>
                <Link to="/v2" className="nav-link px-2">
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: "50%" }}>
                <Link to="/products" className="nav-link px-2">
                  Products
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: "50%" }}>
                <Link to="/v2" className="nav-link px-2">
                   Receipes
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* <div className="topnav" id="myTopnav2">
    <Link to="/">CC</Link>
    <Link to="/">Recipes</Link>

    <div className="dropdown">
        <button className="dropbtn"> 
            Shop <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
            <Link to="/products">Food Products</Link>
            <Link to="/products">Kitchen Products</Link>
            <Link to="/products">Other Household Items</Link>
        </div>
    </div>

    <Link to="/v1">Stats</Link>
    <Link to="javascript:void(0);" className="icon" onClick={()=>{console.log("Comes thru here"); myFunction()}} >
    <i className="fa fa-bars" ></i>
    </Link>
</div> */}

        <Switch>
          <Route exact path="/login" render={() => (
              <Login
                // auth={isAuthenticated}
                updateLogInStatus = {this.updateLogInStatus}
              />
            )} /> 
          {/* render={props => <Login updateLogInStatus = {this.updateLogInStatus} />} */}
           {/* {...props} */}

          <Route exact path="/signup" render={props => <SignUp {...props} />} />

          <Route
            exact
            path="/resetpass"
            render={props => <ResetPassword {...props} />}
          />
          <Route
            exact
            path="/forgotpass"
            render={props => <ForgotPassword {...props} />}
          />
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <div id="title">
                  <b>Meals</b>
                </div>

                <div className="container">
                  <div className="row">{items}</div>
                </div>
              </div>
            )}
          />

          <Route
            path="/home"
            render={() => (
              <HomePage />
            )}
          />
          <Route
            path="/v2"
            render={() => (
              <MealsPage />
            )}
          />
          <Route
            exact
            path="/grocery"
            render={() => (
              <GroceryPage
                auth={isAuthenticated}
                dataTypeaheadProps={itemTypeahead}
                customerId = {customerId}
              />
            )}
          />

          <Route
            path="/grocery"
            render={props => (
              // <RecipeContentSection selectedMeal= {this.state.selectedMeal}/>
              <div>
                <div>
                  <b>Your Grocery List</b>
                </div>
                <GroceryPage
                  auth={isAuthenticated}
                  dataTypeaheadProps={itemTypeahead}
                  customerId = {customerId}
                />
                <div
                  className="fb-login-button"
                  data-width=""
                  data-size="large"
                  data-button-type="continue_with"
                  data-auto-logout-link="false"
                  data-use-continue-as="false"
                ></div>
              </div>
            )}
          />

          <Route path="/products" render={props => <ProductsSection />} />
        </Switch>
      </div>
    );
  }
}



// const contentStyle = {
//   // borderRadius: "25px",
//   maxWidth: "100vw",
//   maxHeight: "100vh",
//   overflow: "scroll",
//   width: "80%"
// };

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     console.log("Hello World 2");
//     // if (x.className === "topnav") {
//     //   x.className += " responsive";
//     // } else {
//     //   x.className = "topnav";
//     // }
//   }

export default App;
