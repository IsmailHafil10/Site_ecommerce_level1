import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../store/features/User/authSlice";
const Navbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { token, infoUser } = useSelector((state) => state.auth);
  const { itemCount} = useSelector((state) => state.cart);

  const signout=()=>{
    dispatch(logout())
    navigate("/login")
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <NavLink className="navbar-brand ms-5" to="/">
          Bright Store
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/" aria-current="page">
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/cart" >
                Cart {itemCount}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                Store
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {token && (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                   {infoUser.email}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={signout} className="nav-link">
                    Logout
                  </button>
                </li>
              </>
            )}
 {!token &&(<li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>)}
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
