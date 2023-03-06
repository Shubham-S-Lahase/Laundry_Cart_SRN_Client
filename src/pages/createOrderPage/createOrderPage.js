import React from "react";
import "./createOrderPage.css";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import CreateOrderCard from "../../components/createOrderCard/createOrderCard";
import dropdown from "../../Images/next.png"
import { Link } from "react-router-dom";

export default function CreateOrderPage() {


  
  const [ProductList, setProductList] = useState([]);

  let [count, setCount] = useState(1)
  const [modalIsOpenA, setIsOpenA] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handle = (event) => {
      setCount(count + 1);
      console.log(count);
  }

  const hanleConfirm = (e) => {
      setIsOpen(true);
  }
  const hanleConfirmA = (e) => {
      setIsOpenA(true);
  }

  useEffect(() => {
    fetch("http://localhost:4000/productList")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProductList((prev) => {
          return data.result;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div id="create-order-top">
        <div style={{ fontWeight: "bolder" }}>Create Order</div>
        <div id="right">
          <img src="/search.svg" alt="searchicon" />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div id="createorder-titlehead">
        <ul>
          <li>Product types</li>
          <li>Quantity</li>
          <li>Wash Type</li>
          <li>Price</li>
        </ul>
        <div id="order-childCards">
          {ProductList.map((ele, ind) => {
            let operationdetails = ele.operationDetails.map((obj, idx) => {
              return { ...obj, flag: false };
            });
            return (
              <CreateOrderCard
                id={ind}
                productName={ele.productName}
                filename={ele.image}
                ops={operationdetails}
              />
            );
          })}
        </div>
        <div id="proceed-container">
          <button style={{ color: "white", backgroundColor: "#5861AE" }} onClick={hanleConfirmA}>
            Proceed
          </button>
          <button style={{ color: "#5861AE" }}>Cancel</button>
        </div>
      </div>
      <Modal isOpen={modalIsOpenA}>
                <nav style={{ backgroundColor: 'blue' }}>
                    <ul style={{ display: 'flex' }}>
                        <li style={{
                            top: '0px',
                            left: '514px',
                            width: '926px',
                            height: '70px',
                            paddingTop: '15px',
                            background: '#5861AE 0% 0 % no - repeat padding- box',
                            fontSize: '30px',
                            color: 'white',
                            opacity: 1
                        }}>Summary</li>
                        <li style={{
                            top: '30px',
                            color: 'white',
                            left: '1394px',
                            width: '19px',
                            height: '19px',
                            paddingTop: '15px',
                            background: '#FFFFFF 0% 0% no-repeat padding-box',
                            marginLeft: '500px',
                            fontSize: '30px',
                            opacity: '1'
                        }}><a>X</a></li>
                    </ul>
                </nav>
                <div style={{ display: 'flex', marginLeft: "20px" }}>
                    <div style={{ display: 'flex', marginTop: "12px" }}>
                        <input onChange={handle} style={{
                            top: '108px',
                            left: '548px',
                            width: '204px',
                            height: '27px',
                            borderLeft: 'whitesmoke',
                            borderRight: 'whitesmoke',
                            borderTop: 'whitesmoke',
                            textAlign: 'left',
                            font: 'normal normal 600 16px/27px Open Sans',
                            color: '#3E3F40',
                            opacity: '1'
                        }}></input>
                        <div style={{ marginLeft: '10px' }}><img src={dropdown} alt="nextimg" /></div>
                    </div>
                    <div style={{ marginLeft: '50px', marginLeft: '180px' }}>
                        <p style={{
                            top: '93px',
                            left: '804px',
                            width: '121px',
                            height: '22px',
                            /* UI Properties */
                            textAlign: 'left',
                            font: 'normal normal 600 16px/22px Open Sans',
                            letterSpacing: '0.38px',
                            color: '#1B2734',
                            marginTop: '2px',
                            marginBottom: '0px',
                            opacity: '1',
                        }}>Store Address:</p>
                        <p style={{
                            top: '124px',
                            left: '804px',
                            width: '232px',
                            height: '22px',
                            marginTop: '2px',
                            /* UI Properties */
                            textAlign: 'left',
                            font: 'normal normal normal 16px/22px Open Sans',
                            letterSpacing: '0.38px',
                            color: '#1B2734',
                            opacity: '1'
                        }}>Kolkata</p>
                    </div>
                    <div style={{ marginLeft: '50px' }}>
                        <p style={{
                            top: '93px',
                            left: '804px',
                            width: '121px',
                            height: '22px',
                            /* UI Properties */
                            textAlign: 'left',
                            font: 'normal normal 600 16px/22px Open Sans',
                            letterSpacing: '0.38px',
                            color: '#1B2734',
                            marginTop: '2px',
                            marginBottom: '0px',
                            opacity: '1',
                        }}>Phone:</p>
                        <p style={{
                            top: '124px',
                            left: '804px',
                            width: '232px',
                            height: '22px',
                            marginTop: '2px',
                            /* UI Properties */
                            textAlign: 'left',
                            font: 'normal normal normal 16px/22px Open Sans',
                            letterSpacing: '0.38px',
                            color: '#1B2734',
                            opacity: '1'
                        }}>+91 <span>8719837373</span></p>
                    </div>
                </div>
                <div style={{
                    top: '190px',
                    left: '547px',
                    width: '91px',
                    height: '19px',
                    /* UI Properties */
                    textAlign: 'left',
                    font: 'normal normal 600 14px/19px Open Sans',
                    letterSpacing: '0.42px',
                    color: '#3B3737',
                    marginLeft: "20px",
                    opacity: '1'
                }}>Order Details</div>
                <div>
                    LISTED ITEMS
                    <p style={{}}><span style={{
                        top: '407px',
                        left: '1199px',
                        width: '74px',
                        height: '22px',
                        /* UI Properties */
                        textAlign: 'left',
                        font: 'normal normal normal 16px/22px Open Sans',
                        letterSpacing: '0.38px',
                        marginLeft: "1300px",
                        color: '#1B2734',
                        opacity: '1'
                    }}>sub-Total:  </span>  <span>0</span></p>
                    <p><span style={{
                        top: '407px',
                        left: '1199px',
                        width: '74px',
                        height: '22px',
                        /* UI Properties */
                        textAlign: 'left',
                        font: 'normal normal normal 16px/22px Open Sans',
                        letterSpacing: '0.38px',
                        color: '#1B2734',
                        marginLeft: "1260px",
                        opacity: '1'
                    }}>Pickup-Charges:  </span> 90 <span></span></p>

                    <p style={{ backgroundColor: 'blue' }}> <span style={{
                        top: '500px',
                        left: '1189px',
                        width: '52px',
                        height: '24px',
                        /* UI Properties */
                        textAlign: 'left',
                        font: 'normal normal bold 18px/24px Open Sans',
                        letterSpacing: '0.43px',
                        color: '#FFFFFF',
                        backgroundColor: 'blue',
                        textTransform: 'capitalize',
                        marginLeft: "1300px",
                        opacity: '1'
                    }}>Total:     </span>  <span>   90</span></p>

                </div>
                <div style={{ display: 'flex', marginLeft: '20px' }}>
                    <div style={{
                        marginLeft: '40px', top: '610px',
                        left: '549px',
                        width: '236px',
                        height: '85px',
                        /* UI Properties */
                        background: ' #FFFFFF 0% 0% no-repeat padding-box',
                        boxShadow: '0px 3px 6px #00000029',
                        border: ' 1px solid #5861AE',
                        marginLeft: '20px',
                        margin: '0px',
                        borderRadius: ' 4px',
                        opacity: '1'
                    }}>
                        <p style={{
                            top: '616px',
                            left: '558px',
                            width: '54px',
                            height: '24px',
                            /* UI Properties */
                            textAlign: 'left',
                            font: 'normal normal bold 18px/24px Open Sans',
                            letterSpacing: '0.18px',
                            color: '#3E3F40',
                            padding: '10px',
                            opacity: '1'
                        }}>HOME</p>
                        <p style={{
                            top: '642px',
                            left: '815px',
                            width: '198px',
                            height: '44px',
                            /* UI Properties */
                            textAlign: 'left',
                            font: 'normal normal normal 16px/22px Open Sans',
                            letterSpacing: '0.16px',
                            marginBottom: '2px',
                            marginLeft: '2px',
                            color: '#3E3F40',
                            paddingLeft: '10px',
                            opacity: '1'
                        }}>#226 10/778 Road, jp Nagar</p>
                    </div>
                    <div style={{
                        marginLeft: '40px', top: '610px',
                        left: '549px',
                        width: '236px',
                        height: '85px',
                        /* UI Properties */
                        background: ' #FFFFFF 0% 0% no-repeat padding-box',
                        boxShadow: '0px 3px 6px #00000029',
                        border: ' 1px solid #5861AE',

                        margin: '0px',
                        borderRadius: ' 4px',
                        opacity: '1'
                    }}>
                        <p style={{
                            top: '616px',
                            left: '558px',
                            width: '54px',
                            height: '24px',
                            /* UI Properties */
                            textAlign: 'left',
                            font: 'normal normal bold 18px/24px Open Sans',
                            letterSpacing: '0.18px',
                            color: '#3E3F40',
                            padding: '10px',
                            opacity: '1'
                        }}>OTHERS</p>
                        <p style={{
                            top: '642px',
                            left: '815px',
                            width: '198px',
                            height: '44px',
                            /* UI Properties */
                            textAlign: 'left',
                            font: 'normal normal normal 16px/22px Open Sans',
                            letterSpacing: '0.16px',
                            marginBottom: '2px',
                            marginLeft: '2px',
                            paddingLeft: '10px',
                            color: '#3E3F40',
                            opacity: '1'
                        }}>#226 10/778 Road, jp Nagar</p>
                    </div>
                    <div style={{
                        top: '641px',
                        left: '1072px',
                        width: '87px',
                        height: '24px',
                        /* UI Properties */
                        textAlign: 'left',
                        font: 'normal normal bold 18px/24px Open Sans',
                        letterSpacing: '0.18px',
                        marginTop: '10px',
                        paddingLeft: "40px",
                        color: '#5861AE',
                        marginLeft: "40px",
                        opacity: '1'
                    }}>ADD NEW</div>
                </div>
                <div style={{ marginLeft: '1350px', marginTop: '150px' }}>
                    <button style={{
                        top: '875px',
                        left: '1260px',
                        width: '150px',
                        height: '42px',
                        /* UI Properties */
                        background: '#5861AE 0% 0% no-repeat padding-box',
                        borderRadius: '4px',
                        opacity: '1'
                    }} disabled={count < 2 ? true : false} onClick={hanleConfirm}><span style={{
                        top: '885px',
                        left: '1302px',
                        width: '66px',
                        height: '22px',
                        /* UI Properties */
                        textAlign: 'center',
                        font: 'normal normal bold 16px/22px Open Sans',
                        letterSpacing: '0.16px',
                        color: '#FFFFFF',
                        opacity: '1'
                    }}  > confirm</span></button>
                </div>
            </Modal>
            <Modal
                isOpen={modalIsOpen} >
                <div style={{
                    top: '199px',
                    left: '529px',
                    width: '466px',
                    height: '504px',
                    backgroundColor: 'white',
                    /* UI Properties */
                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                    border: '1px solid #E5E0E0',
                    borderRadius: '8px',
                    opacity: '1'
                }}>
                  
                    <h6 style={{
                        top: '409px',
                        left: '614px',
                        width: '297px',
                        height: '66px',
                        /* UI Properties */
                        textAlign: 'center',
                        font: 'normal normal bold 24px/33px Open Sans',
                        letterSpacing: '0.43px',
                        marginLeft: "70px",
                        marginBottom: '10px',
                        color: '#0A1F44',
                        opacity: '1'
                    }}>Your Order is Sucessfully Placed</h6>
                    <p style={{
                        top: '499px',
                        left: '631px',
                        width: '263px',
                        height: '45px',
                        /* UI Properties */
                        textAlign: 'center',
                        font: 'normal normal normal 17px/22px Open Sans',
                        letterSpacing: '-0.41px',
                        marginLeft: "85px",
                        marginBottom: '10px',

                        color: 'blue',
                        opacity: '1'
                    }}>You can track the delivery from thevorder's section</p>
                    <button Link="/create-order" style={{
                        top: '577px',
                        left: '645px',
                        width: '150px',
                        height: '30px',
                        /* UI Properties */
                        background: '#5861AE 0% 0% no-repeat padding-box',
                        borderRadius: '22px',
                        marginLeft: '140px',
                        opacity: '1'
                    }} ><span style={{
                        top: '587px',
                        left: '712px',
                        width: '100px',
                        height: '23px',
                        /* UI Properties */
                        textAlign: 'center',
                        font: 'normal normal bold 17px/23px Open Sans',
                        letterSpacing: '-0.41px',
                        color: '#FFFFFF',
                        opacity: '1'
                    }}>Go to orders</span></button>
                </div>

            </Modal>
      
    </>
  );
}
