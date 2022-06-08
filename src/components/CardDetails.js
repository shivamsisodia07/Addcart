import React from "react";
import "./style.css";
import Table from "react-bootstrap/Table";
const CardDetails = () => {
  return (
    <div>
      {" "}
      <div className='container mt-2'>
        <h2 className='text-center'>Items Details page</h2>

        <section className='container mt-3'>
          <div className='itemsdetails '>
            <div className='items_img'>
              <img
                src='https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg'
                alt=''
              />
            </div>
            <div className='details mt-0.5'>
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant:</strong>Massala theory
                    </p>{" "}
                    <p>
                      <strong>Price:</strong>₹350
                    </p>{" "}
                    <p>
                      <strong>Dishes:</strong>North indian,biryani,Mughlai
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
                        3.5★
                      </span>
                    </p>{" "}
                    <p>
                      <strong>Order review:</strong>
                      <span>1175+ order placed from here recently</span>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardDetails;
