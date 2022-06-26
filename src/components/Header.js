import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DLT } from "../redux/actions/action";

const Header = () => {
  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.carts.map((e, k) => {
      price = e.price * e.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  //////
  return (
    <>
      <Navbar bg='dark' variant='dark' style={{ height: "60px" }}>
        <Container>
          <NavLink to='/' className='text-decoration-none text-light mx-3'>
            Home
          </NavLink>
          <Nav className='me-auto'>
            <NavLink
              to='/'
              className='text-decoration-none text-light'></NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.carts.length}
            color='primary'
            id='basic-button'
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}>
            <i
              class='fa-solid fa-cart-shopping text-light'
              style={{ fontSize: 25, cursor: " pointer" }}></i>
          </Badge>
        </Container>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}>
          {getdata.carts.length ? (
            <div
              className='card_details'
              style={{ width: "24rem", padding: 10 }}>
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>{" "}
                <tbody>
                  {getdata.carts.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=''
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹{e.price}</p>
                            <p>Quantity : {e.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}>
                              <i className='fas fa-trash smalltrash'></i>
                            </p>
                          </td>

                          <td
                            className='mt-5'
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}>
                            <i className='fas fa-trash largetrash'></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className='text-center'>
                    Total :₹
                    {price}
                  </p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className='card_details d-flex justify-content-center align-items-center'
              style={{ width: "24rem", padding: 10, position: "relative" }}>
              <i
                className='fas fa-close smallclose'
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}></i>
              <p style={{ fontSize: 22 }}>your cart is empty</p>
              <img
                src='./cart.gif'
                alt=''
                className='emptycart_img'
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
