const Footer=()=>{

    return(
        <>
  <div className="container-fluid bg-dark text-white  pt-5 px-sm-3 px-md-5">
    <div className="row ">
      <div className="col-lg-5 col-md-6 mb-5 pr-5">
        <h3 className="text-primary mb-4">About</h3>
        <p>
        Welcome to Logistos, your trusted partner in seamless logistics solutions. We are a forward-thinking logistics company dedicated to simplifying complex supply chain challenges and delivering exceptional results for businesses worldwide
        </p>
       
      </div>
      <div className="col-lg-7 col-md-6">
        <div className="row">
        <div className="col-md-6 mb-5">
            <h3 className="text-primary mb-4">Quick Links</h3>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="products/ftl">
                <i className="fa fa-angle-right mr-2" />
                E-commercce Shipping
              </a>
              <a className="text-white mb-2" href="products/b2b">
                <i className="fa fa-angle-right mr-2" />
                Bulk Shipments & B2B
              </a>
              <a className="text-white mb-2" href="products/b2c">
                <i className="fa fa-angle-right mr-2" />
                B2C
              </a>
              <a className="text-white mb-2" href="products/air">
                <i className="fa fa-angle-right mr-2" />
                Air Services
              </a>
              <a className="text-white" href="products/warehouse">
                <i className="fa fa-angle-right mr-2" />
                Wharehousing
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <h3 className="text-primary mb-4">Get In Touch</h3>
            <p>
              <i className="fa fa-map-marker-alt mr-2" />
              1202, Business Bay, Kamdhenu, Nerul Sector-1, Near Juinagar Railway Station, Navi-Mumbai 400-706.
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2" />
              95600-99686 / 73501-44999
            </p>
            <p>
              <i className="fa fa-envelope mr-2" />
              customer.support@logistos.in
            </p>
            
          </div>
         
        </div>
      </div>
      
    </div>
  </div>
  <div
    className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
    style={{ borderColor: "#3E3E4E !important" }}
  >
    <div className="row">
      <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
        <p className="m-0 text-white">
          © <a href="https://logistos.in/">Logistos Pvt. Ltd.</a> All Rights Reserved.
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          &nbsp; Designed by <a href=""> Cybronical India Pvt. Ltd.</a>
        </p>
      </div>
      <div className="col-lg-6 text-center text-md-right">
        <ul className="nav d-inline-flex">
          <li className="nav-item">
            <a className="nav-link text-white py-0" href="#">
              Privacy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white py-0" href="#">
              Terms
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white py-0" href="#">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white py-0" href="#">
              Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary back-to-top">
    <i className="fa fa-angle-double-up" />
  </a>
</>

    )

}

export default Footer;