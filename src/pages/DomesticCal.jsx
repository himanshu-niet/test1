import React from 'react'
import '../../public/css/calCss.css';
import Footer from '../component/Footer';
import Header from '../component/Header';

const DomesticCal = () => {
  return(
    <>
    <Header active={3}/>


    <div className="jumbotron jumbotron-fluid">
    <div className="page-wrapper bg-gra-02 font-poppins">
<div className="wrapper wrapper--w680">
<div className="card card-4">
  <div className="card-body">
  <h2 className="title">Domestic Calculator</h2>
<form>

<div className="row">
  <div className="col-sm-6">
    <div className="form-group">
    <span className="label">Pickup Pincode</span>
  <input
    className="input--style-4"
    type="number"
    placeholder="Enter 6 Digit Pickup Pincode"
  /> </div>
  </div>
  <div className="col-sm-6">
    <div className="form-group">
    <span className="label">Drop Pincode</span>
  <input
    className="input--style-4"
    type="number"
    placeholder="Enter 6 Digit Pickup Pincode"
  /> </div>
  </div>
</div>

<div className="row">
  <div className="col-sm-6">
    <div className="form-group">
    <span className="label">Weight</span>
  <input
    className="input--style-4"
    type="number"
    placeholder="Enter the Weight in KG"
  />
  </div>
  </div>
  <div className="col-sm-6">
    <div className="form-group">
    <span className="label">Shipment Value</span>
  <input
    className="input--style-4"
    type="number"
    placeholder="Value of Shipment"
  /> </div>
  </div>
</div>
<span className="label">Dimension</span>
<div className="row">
  <div className="col-sm-4">
    <div className="form-group">
      
      <input
    className="input--style-4"
    type="number"
    placeholder="Length"
  />
      
    </div>
  </div>
  <div className="col-sm-4">
    <div className="form-group">
      <input
    className="input--style-4"
    type="number"
    placeholder="Width"
  />
      
    </div>
  </div>
  <div className="col-sm-4">
    <div className="form-group">
      <input
    className="input--style-4"
    type="number"
    placeholder="Height"
  />
      
    </div>
  </div>
</div>
<span className="label">Payment Mode</span>
<div className='row'>
<div className="col-12">
<div className="input-group">

<div className="p-t-10">
  <label className="radio-container m-r-45">
  Prepaid
    <input type="radio" defaultChecked="checked" name="payment_mode" />
    <span className="checkmark" />
  </label>
  <label className="radio-container">
  Cash on delivery

    <input type="radio" name="payment_mode" />
    <span className="checkmark" />
  </label>
</div>
</div>
</div>

</div>
<div className="">
  
<button className="btn btn--radius-2 btn--blue mr-5">Calculate</button>
</div>
</form>
  </div>
</div>
</div>
</div>
        </div>
   


<Footer/>

    </>
)
}

export default DomesticCal
