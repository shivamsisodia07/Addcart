import React, { useEffect, useState } from "react";
import "./style.css";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CardDetails = () => {
  const [data, setdata] = useState([]);
  console.log(data);
  const { id } = useParams();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setdata(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);
  return (
    <div>
      {" "}
      <div className='container mt-2'>
        <h2 className='text-center'>Items Details page</h2>

        <section className='container mt-3'>
          <div className='itemsdetails '>
            {data.map((e) => {
              return (
                <>
                  <div className='items_img'>
                    <img src={e.imgdata} alt='' />
                  </div>
                  <div className='details mt-0.5'>
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant:</strong>
                            {e.rname}
                          </p>{" "}
                          <p>
                            <strong>Price:</strong>₹{e.price}
                          </p>{" "}
                          <p>
                            <strong>Dishes:</strong>
                            {e.address}
                          </p>{" "}
                          <p>
                            <strong>Total:</strong>₹350
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Rating:</strong>
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}>
                              {e.rating}★
                            </span>
                          </p>{" "}
                          <p>
                            <strong>Order review:</strong>
                            <span>{e.somedata}</span>
                          </p>{" "}
                          <p>
                            <strong>Remove</strong>
                            <span>
                              <i
                                className='fas fa-trash '
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}></i>
                            </span>
                          </p>{" "}
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardDetails;
