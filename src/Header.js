
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./css/header.module.css"
import Logo from "./img/logo-black.web.webp"
import MenuLogo from "./img/menu-black.png"
import Nav from "./Nav"

function Header() {
  return(
          <>
              <nav className={`navbar bg-body-tertiary fixed-top ${style.extraNav}`}>
              <div className={`container-fluid ${style.headerContainer}`}>
                <div className={style.headerRight}>
                  <a href="#" className={`navbar-brand ${style.logo}`}>
                    <img src={Logo} alt={"img"} />
                  </a>
                </div>
                <Nav />
                <div className={style.headerLeft}>
                  <div className={style.searchIcon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <button className={style.menuIcon} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                   <img src={MenuLogo} alt={"img"} />
                  </button>
                </div>
                <div className={`offcanvas offcanvas-end p-4 ${style.mobileHeader}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className={` d-flex w-100 ${style.offcanvasContainer}`}>
                    <div className={`d-none d-lg-block ${style.offcanvasLeft}`}>
                      <img src={Logo} className="offcanvas-title" id="offcanvasNavbarLabel" alt={"logo"} />
                        <h5 className="mt-5">Follow us</h5>
                        <ul className="list-group">
                          <li className="list-group-item border-0 py-1">Dribbble</li>
                          <li className="list-group-item border-0 py-1">Behance</li>
                          <li className="list-group-item border-0 py-1">Instagram</li>
                          <li className="list-group-item border-0 py-1">Facebook</li>
                          <li className="list-group-item border-0 py-1">Twitter</li>
                          <li className="list-group-item border-0 py-1">YouTube</li>
                        </ul>
                    </div>
                    <div className={`p-4 ${style.offcanvasCenter}`}>
                    <div className="w-100">
                      <button type="button" className="btn-close float-end d-block d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                     </div>
                      <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            HOME
                          </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            <ul className="list-group">
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h2 className="ps-3 pt-3 fs-6 text-dark fw-normal">ABOUT</h2>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            SERVICE
                          </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                          <ul className="list-group">
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseForth" aria-expanded="false" aria-controls="flush-collapseForth">
                            PAGE
                          </button>
                        </h2>
                        <div id="flush-collapseForth" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                          <ul className="list-group">
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFith" aria-expanded="false" aria-controls="flush-collapseFith">
                            TEAM
                          </button>
                        </h2>
                        <div id="flush-collapseFith" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                          <ul className="list-group">
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Digital Maketing Dark</a>
                              </li>
                              <li className="list-group-item border-0">
                                <a href="#">Design Studio</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                    </div>
                    <div className={`ps-4 d-none d-lg-block ${style.offcanvasRight}`}>
                     <div className="w-100">
                      <button type="button" className="btn-close float-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                     </div>
                      <form className="d-flex mt-5 pt-5" role="search">
                        <input id="searchInput" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </>
        )
};
export default Header;