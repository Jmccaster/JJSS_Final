// // Nav Bar
// import React, { Component } from "react";
// import {
//   Navbar,
//   Nav,
//   NavDropdown,
//   Container,
//   Form,
//   FormControl,
//   Button,
// } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import * as userService from "./../utilities/users-service";
// import Search from "./Search";

// function NavBar({ user, setUser, cart, setGender, setSearchProducts }) {
//   // Create a function responsible for login the user out
//   const handleLogOut = async (e) => {
//     // Call the logout function

//     userService.logOut();

//     // Set the user back to null
//     setUser(null);
//   };
//   return (
//     <nav>
//       <Navbar bg="dark" variant={"dark"}>
//         <Container>
//           <Navbar.Brand as={Link} to="/api/products">
//             Shoe Game .COM
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link
//                 as={Link}
//                 to="/api/products/men"
//                 name="men"
//                 onClick={(e) => {
//                   console.log("TARGET NAME IS");
//                   console.log(e.target.name);
//                   return setGender(e.target.name);
//                 }}
//               >
//                 Men
//               </Nav.Link>
//               <br />
//               <Nav.Link
//                 as={Link}
//                 to="/api/products/women"
//                 name="women"
//                 onClick={(e) => {
//                   console.log(e.target.name);
//                   return setGender(e.target.name);
//                 }}
//               >
//                 Women
//               </Nav.Link>
//               <br />
//               <Nav.Link
//                 as={Link}
//                 to="/api/products/girl"
//                 name="girl"
//                 onClick={(e) => {
//                   console.log(e.target.name);
//                   return setGender(e.target.name);
//                 }}
//               >
//                 Girl
//               </Nav.Link>
//               <br />
//               <Nav.Link
//                 as={Link}
//                 to="/api/products/boy"
//                 name="boy"
//                 onClick={(e) => {
//                   console.log(e.target.name);
//                   return setGender(e.target.name);
//                 }}
//               >
//                 Boy
//               </Nav.Link>
//               <Container className="d-flex justify-content-end">
//                 {user ? (
//                   <>
//                     <Navbar.Text>
//                       Welcome {user.newUser?.name || user.currentUser?.name}
//                     </Navbar.Text>

//                     <Nav.Link
//                       to=""
//                       onClick={() => {
//                         return handleLogOut();
//                       }}
//                     >
//                       Log Out
//                     </Nav.Link>
//                   </>
//                 ) : (
//                   <Nav.Link as={Link} to="/login">
//                     SignUp/Login
//                   </Nav.Link>
//                 )}
//                 <Nav.Link as={Link} to="/cart">
//                   <img
//                     src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
//                     width="25px"
//                     height="25px"
//                   />
//                 </Nav.Link>
//                 <Navbar.Text>{cart.length}</Navbar.Text>
//               </Container>
//             </Nav>

//             <Search setSearchProducts={setSearchProducts} />
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </nav>
//   );
// }

// export default NavBar;

// Nav Bar
import React, { Component } from "react";
import {
  Navbar,
  Margin,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";
import * as userService from "./../utilities/users-service";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
function NavBar({ user, setUser, cart, setGender, setSearchProducts }) {
  // Create a function responsible for login the user out
  const handleLogOut = async (e) => {
    // Call the logout function
    userService.logOut();
    // Set the user back to null
    setUser(null);
  };
  return (
    <nav>
      <Navbar bg="dark" variant={"dark"}>
        <Container className="wideBar">
          <Navbar.Brand as={Link} to="/api/products">
            Shoe Game .COM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/api/products/men"
                name="men"
                className="wideBar"
                onClick={(e) => {
                  console.log("TARGET NAME IS");
                  console.log(e.target.name);
                  return setGender(e.target.name);
                }}
              >
                Men
              </Nav.Link>
              <br />
              <Nav.Link
                as={Link}
                to="/api/products/women"
                name="women"
                onClick={(e) => {
                  console.log(e.target.name);
                  return setGender(e.target.name);
                }}
              >
                Women
              </Nav.Link>
              <br />
              <Nav.Link
                as={Link}
                to="/api/products/girl"
                name="girl"
                onClick={(e) => {
                  console.log(e.target.name);
                  return setGender(e.target.name);
                }}
              >
                Girl
              </Nav.Link>
              <br />
              <Nav.Link
                as={Link}
                to="/api/products/boy"
                name="boy"
                onClick={(e) => {
                  console.log(e.target.name);
                  return setGender(e.target.name);
                }}
              >
                Boy
              </Nav.Link>
              {/* search bar */}
              <Search setSearchProducts={setSearchProducts} />
              {/* search bar */}
              <div>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                {/* <p> -------------------------------------------------- </p> */}
              </div>
              {/* SIGN UP LOG IN CART */}
              <div>
                <Container className="d-flex justify-content-end ms-1">
                  {user ? (
                    <>
                      <Navbar.Text>
                        Welcome {user.newUser?.name || user.currentUser?.name}
                      </Navbar.Text>
                      <Nav.Link
                        to=""
                        onClick={() => {
                          return handleLogOut();
                        }}
                      >
                        Log Out
                      </Nav.Link>
                    </>
                  ) : (
                    <Nav.Link as={Link} to="/login" className="mx-auto">
                      SignUp/Login
                    </Nav.Link>
                  )}
                  <Nav.Link as={Link} to="/cart">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                      width="25px"
                      height="25px"
                    />
                  </Nav.Link>
                  <Navbar.Text>{cart.length}</Navbar.Text>
                </Container>
              </div>
              {/* SIGN UP LOG IN CART */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
export default NavBar;
