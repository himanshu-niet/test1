const Header=({active})=>{
    return(
        <>
        <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center text-white">
                    <small><i className="fa fa-phone-alt mr-2"></i>+91 9560099686</small>
                    <small className="px-3">|</small>
                    <small><i className="fa fa-envelope mr-2"></i>customer.support@logistos.in</small>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-white px-2" href="">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-white px-2" href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-white px-2" href="">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-white px-2" href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-white pl-2" href="">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
            <a href="/" className="navbar-brand ml-lg-3">
                <h2 className="m-0 display-6 text-uppercase text-primary"><img className="mr-3" style={{height:'65px'}} src="/img/Logistos-4.png"/>Logistos</h2>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div className="navbar-nav m-auto py-0">
                    <a href="/" className={`nav-item nav-link ${active==1?'active':''}`}>Home</a>
                    <a href="/about" className={`nav-item nav-link ${active==2?'active':''}`}>About</a>
                   
                  
                    <div className="nav-item dropdown">
                        <a href="#" className={`nav-item nav-link dropdown-toggle ${active==3?'active':''}`} data-toggle="dropdown">Calculator</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="/calculator/domestic" className="dropdown-item">Domestic</a>
                            <a href="/calculator/international" className="dropdown-item">International</a>
                           
                            
                        </div>
                    </div>

                    <div className="nav-item dropdown">
                        <a href="#" className={`nav-item nav-link dropdown-toggle ${active==4?'active':''}`} data-toggle="dropdown">Products</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="/products/ftl" className="dropdown-item">E-commercce Shipping</a>
                            <a href="/products/b2b" className="dropdown-item">Bulk Shipments & B2B</a>
                            <a href="/products/b2c" className="dropdown-item">B2C</a>
                            <a href="/products/air" className="dropdown-item">Air Services</a>
                            <a href="/products/warehouse" className="dropdown-item">Wharehousing</a>
                            <a href="/products/supply" className="dropdown-item">Supply Chain</a>
                            
                        </div>
                    </div>
                   
                    <a href="/contact" className={`nav-item nav-link ${active==5?'active':''}`}>Contact</a>
                   </div>
                  
                    <div className="nav-item dropdown btn btn-primary  d-none d-lg-block">
                        <a href="#" className="nav-link dropdown-toggle text-white py-2 px-4" data-toggle="dropdown">Login</a>
                        <div className="dropdown-menu rounded-0 m-0">
                        <a href="/auth/signin" className="dropdown-item">Login</a>
                            <a href="/auth/signup" className="dropdown-item">Register</a>
                            
                        </div>
                    </div>
                
            </div>
        </nav>
    </div>
    </>
    )
}

export default Header;