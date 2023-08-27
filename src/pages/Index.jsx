import Footer from "../component/Footer";
import Header from "../component/Header";
import Testimonial from "../component/Testomonial";

const Index = () => {
  return (
    <>
      <Header active={1}/>

      <>
        <div className="jumbotron jumbotron-fluid mb-5">
          <div className="container text-center py-5">
            <h1 className="text-primary mb-4">Bulk Shipments &amp; Small Size Shipments</h1>
            <h1 className="text-white display-3 mb-5 text-uppercase">Logistos</h1>
            <div className="mx-auto" style={{ width: "100%", maxWidth: 600 }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: 30 }}
                  placeholder="Tracking Id"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-3">Track &amp; Trace</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* About Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 pb-4 pb-lg-0">
                <img className="img-fluid w-100" src="img/about.jpg" alt="" />
                <div className="bg-primary text-dark text-center p-4">
                  <h3 className="m-0">Years Experience</h3>
                </div>
              </div>
              <div className="col-lg-7 py-5  py-lg-0">
        <h6 className="ml-3 text-primary text-uppercase font-weight-bold">
        A TRUSTED GROWTH PARTNER
        </h6>
        <h1 className=" ml-3 mb-5 my-3"> Lakhs of eCommerce businesses choose
                  Logistos to streamline their customer
                  Journey from shipping to returns and beyond.</h1>
       
        <div className=" row">
          <div className="col-sm-4">
            <h1 className=" ml-3 text-primary mb-2" data-toggle="counter-up">
            28000+ 
            </h1>
            <h6 className=" ml-3 font-weight-bold mb-4">Pincodes served</h6>
          </div>
          <div className=" ml-3 col-sm-4">
            <h1 className="text-primary mb-2" data-toggle="counter-up">
            15 to 40%
            </h1>
            <h6 className=" ml-3 font-weight-bold mb-4">Reduction in Cost</h6>
          </div>
          
        </div>
      </div>
            </div>
          </div>
          {/* Video Modal */}

        </div>
        {/* About End */}

      


        {/* Services Start */}
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center pb-2">
              <h1 className="text-primary text-uppercase font-weight-bold my-5">
                Why Logistos
              </h1>
            </div>
            <div className="row pb-3">

              <div className="col-lg-4 col-md-6 text-center mb-5 ">
                <div className="align-items-center justify-content-center p-2">
                  <i className="fa fa-3x fa-money text-dark m-1" />
                  <h3 className=" font-weight-medium mt-2">Affordable Rates</h3>
                </div>
                <p>
                  "Find the best rates for all your shipments whether you need into B2B & B2C shipping services."
                </p>
              </div>

              <div className="col-lg-4 col-md-6 text-center mb-5">
                <div className="align-items-center justify-content-center p-2">
                  <i className="fa fa-3x fa-cart-arrow-down text-dark m-1" />
                  <h3 className=" font-weight-medium mt-2">One Platform, Multiple Carriers</h3>
                </div>
                <p>
                  "Streamline B2B & B2C logistics with our exhaustive network of carriers. Track all your orders and keep customers informed about the courier movement in real-time."
                </p>
              </div>

              <div className="col-lg-4 col-md-6 text-center mb-5">
                <div className="align-items-center justify-content-center p-2">
                  <i className="fa fa-3x fa-life-ring text-dark m-1" />
                  <h3 className=" font-weight-medium mt-2">Dedicated Support</h3>
                </div>
                <p>
                  "Our team at Logistos is always here to help you and guide you through the way whether you need assistance with pickups, tracking shipments, or clearing any disputes with carriers Partners."
                </p>
              </div>

              <div className="col-lg-4 col-md-6 text-center mb-5">
                <div className="align-items-center justify-content-center p-2">
                  <i className="fa fa-3x fa-inr text-dark m-1" />
                  <h3 className=" font-weight-medium mt-2">No Platform Fees</h3>
                </div>
                <p>
                  "You only get easy to understand pricing with us. No hidden fees of any kind and no surprises."
                </p>
              </div>
              <div className="col-lg-4 col-md-6 text-center mb-5">
                <div className="align-items-center justify-content-center p-2">
                  <i className="fa fa-3x fa-truck text-dark m-1" />
                  <h3 className=" font-weight-medium mt-2">Low Shipping Rates</h3>
                </div>
                <p>
                  "Ship at low cost & save big for your organisation. "
                </p>
              </div>
              <div className="col-lg-4 col-md-6 text-center mb-5">
                <div className="align-items-center justify-content-center p-2">
                  <i className="fa fa-3x fa-line-chart text-dark m-1" />
                  <h3 className=" font-weight-medium mt-2">Get Accurate Recommendations</h3>
                </div>
                <p>
                  "Based on your shipping needs, delivery dates, and budget, our AI tool offers the best carrier recommendations for every shipment."
                </p>
              </div>

              <div className="col-lg-4 col-md-6 text-center mb-5">
                <div className="align-items-center justify-content-center p-2">
                  <i className="fa fa-3x fa-plane text-dark m-1" />
                  <h3 className=" font-weight-medium mt-2">Wider Reach</h3>
                </div>
                <p>
                  "Our over 28,000+ pin codes within India and we are expanding everyday."
                </p>
              </div>

              <div className="col-lg-4 col-md-6 text-center mb-5">
                <div className="align-items-center justify-content-center p-2">
                  <i className="fa fa-3x fa-plane text-dark m-1" />
                  <h3 className=" font-weight-medium mt-2">Live Order Tracking</h3>
                </div>
                <p>
                  "Ship at low cost & save big for your organisation"
                </p>
              </div>

              <div className="col-lg-4 col-md-6 text-center mb-5">
                <div className="align-items-center justify-content-center p-2">
                  <i className="fa fa-3x fa-plane text-dark m-1" />
                  <h3 className=" font-weight-medium mt-2">Support for Multiple Modes</h3>
                </div>
                <p>
                  "Send your e-commerce and cargo shipments through air or surface. Logistos gives you the choice you need."
                </p>
              </div>


            </div>
          </div>
        </div>
        {/* Services End */}

        {/* Features Start */}
        <div className="container-fluid bg-secondary my-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img className="img-fluid w-100" src="img/feature.jpg" alt="" />
              </div>
              <div className="col-lg-7 py-5 py-lg-0">

                <ul className="list-inline" style={{display:'flex', flexDirection:'column',gap:'10px'}}>
                  <li>
                    <h6 style={{ display: 'flex' }}>
                      <i className="far fa-dot-circle text-primary mr-3" />
                      Pan India service with 28k serviceable Pin codes
                    </h6>
                  </li>

                  <li>
                    <h6 style={{ display: 'flex' }}>
                      <i className="far fa-dot-circle text-primary mr-3" />
                      B2B & B2C-D2C Services. </h6>
                  </li>

                  <li>
                    <h6 style={{ display: 'flex' }}>
                      <i className="far fa-dot-circle text-primary mr-3" />
                      One stop logistics & E-Commerce Solution. </h6>
                  </li>

                  <li>
                    <h6 style={{ display: 'flex' }}>
                      <i className="far fa-dot-circle text-primary mr-3" />
                      Single hassle-free billing point with no hidden charges. </h6>
                  </li>

                  <li>
                    <h6 style={{ display: 'flex' }}>
                      
                        <i className="far fa-dot-circle text-primary mr-3" />
                     
                        Less ODA compared to other service providers.
                        Save up to 20% from your current logistics expenses.
                     


                    </h6>
                  </li>

                  <li>
                    <h6 style={{ display: 'flex' }}>
                      <i className="far fa-dot-circle text-primary mr-3" />
                      Dedicated customer service team.</h6>
                  </li>

                  <li>
                    <h6  style={{ display: 'flex' }}>
                      <i className="far fa-dot-circle text-primary mr-3" />
                      Volume discount on special business proposal.
                    </h6>
                  </li>

                  <li>
                    <h6 style={{ display: 'flex' }}>
                      <i className="far fa-dot-circle text-primary mr-3" />
                      Experienced Team from Logistics & E-Commerce industry.
                    </h6>
                  </li>

                  <li>
                    <h6 style={{ display: 'flex' }}>
                      <i className="far fa-dot-circle text-primary mr-3" />

                      Pan India door pick up & delivery.
                    </h6>
                  </li>

                  <li>
                    <h6 style={{ display: 'flex' }}>
                      <i className="far fa-dot-circle text-primary mr-3" />
                      Multiple courier partners at one platform.
                    </h6>
                  </li>

                  <li>
                    <h6 style={{ display: 'flex' }}>
                      <i className="far fa-dot-circle text-primary mr-3" />
                      Easy to track your order.
                    </h6>
                  </li>

                  <li>
                    <h6 style={{ display: 'flex' }}>
                      <i className="far fa-dot-circle text-primary mr-3" />

                      Booking all types of shipments on single platform.
                    </h6>
                  </li>






                </ul>

              </div>
            </div>
          </div>
        </div>
        {/* Features End */}

          {/* Testimonial Start */}
 <Testimonial/>
  {/* Testimonial End */}

       
      </>


      <Footer />

    </>

  )

}

export default Index;