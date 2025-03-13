import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck,faRotateLeft,faCircleCheck} from '@fortawesome/free-solid-svg-icons'

import '../index.css';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function Menu(){
    return(
        <>
        
        
        
        
        
        <main>
  <section id="slides">
    <div className="slides">
      <div className="side-group">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            Groceries &amp; Pets
          </a>
          <a href="#" className="list-group-item list-group-item-action ">
            Health &amp; Beauty
          </a>
          <a href="#" className="list-group-item list-group-item-action ">
            Men's Fashion
          </a>
          <a href="#" className="list-group-item list-group-item-action ">
            Women's Fashion
          </a>
          <a href="#" className="list-group-item list-group-item-action ">
            Mother &amp; Baby
          </a>
          <a href="#" className="list-group-item list-group-item-action ">
            Home &amp; Lifestyle
          </a>
          <a href="#" className="list-group-item list-group-item-action ">
            Electronic Devices
          </a>
          <a href="#" className="list-group-item list-group-item-action ">
            Electronic Accessories
          </a>
          <a href="#" className="list-group-item list-group-item-action ">
            TV &amp; Home Appliances
          </a>
          <a href="#" className="list-group-item list-group-item-action ">
            Sports &amp; Outdoor
          </a>
        </div>
      </div>
      <div className="slide-show">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ width: "100%" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://icms-image.slatic.net/images/ims-web/926e88c1-dce0-44a5-a354-b07c729d06b7.png"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://icms-image.slatic.net/images/ims-web/2408b169-2c14-45cd-94c5-632c217b69a2.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://icms-image.slatic.net/images/ims-web/926e88c1-dce0-44a5-a354-b07c729d06b7.png"
                className=" img-fluid"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section id="banner">
    <div className="first">
      <div className="first_nav_links">
        <ul className="list-group list-group-flush">
          <li className="list-group-item border-0">
            <a
              className="nav-link disabled"
              aria-current="page"
              href="#"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src="https://icms-image.slatic.net/images/ims-web/55c642f0-250b-4515-9c8a-42cce3327098.png"
                alt=""
                height="25px"
                style={{ marginRight: 10 }}
              />
              Safe Payments
            </a>
          </li>
          <li className="list-group-item border-0">
            <a
              className="nav-link disabled"
              href="#"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
                <FontAwesomeIcon icon={faTruck} style={{color: "#f85606",marginRight: 10, height: 25}} />
          
              Nationwide Delievery
            </a>
          </li>
          <li className="list-group-item border-0">
            <a
              className="nav-link disabled"
              href="#"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >

<FontAwesomeIcon icon={faRotateLeft} style={{color: "#f85606",height:'25px',marginRight:'10px'}} /> Free &amp; Easy Returns
            </a>
          </li>
          <li className="list-group-item border-0">
            <a
              className="nav-link disabled"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src="https://icms-image.slatic.net/images/ims-web/05352646-9b19-4283-a7b1-dcb16736663e.png"
                height="25px"
                style={{ marginRight: 10 }}
              />
              Best Price Guaranteed
            </a>
          </li>
          <li className="list-group-item border-0">
            <a
              className="nav-link disabled"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >

              <FontAwesomeIcon icon={faCircleCheck} style={{color: "#f85606", marginRight: 10 ,   height:"25px"}} />
              100% Authentic Products
            </a>
          </li>
          <li className="list-group-item border-0">
            <a
              className="nav-link disabled"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src="https://icms-image.slatic.net/images/ims-web/8faa565d-b52d-4e05-90e4-38466e764e84.png"
                alt=""
                height="25px"
                style={{ marginRight: 10 }}
              />
              Daraz Verified
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="sec">
      <div className="sec_nav_links">
        <img
          src="https://icms-image.slatic.net/images/ims-web/2408b169-2c14-45cd-94c5-632c217b69a2.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
    </div>
  </section>
  <section id="category" className="container-fluid p-5">
    <div className="container-fluid ">
      <div className="category-heading" style={{ height: 70 }}>
        <h2>Category</h2>
      </div>
      <div className="category-card">
        <div className="row row-cols-2  row-cols-lg-6 row-cols-md-5 row-cols-sm-2 g-4">
          <div className="col col-sm-5">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/093b8d7e5b8ad3b83909ee7fa008cf39.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">Headphones</p>
            </div>
          </div>
          <div className="col col-sm-5">
            <div className="card ">
              <img
                src="https://static-01.daraz.pk/p/174bf8802323a8343ab483ec0ad45725.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">Wireless Earbuds</p>
            </div>
          </div>
          <div className="col col-sm-5">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/8bd0c04f0af445cad3860868bc15e046.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">SmartWatches</p>
            </div>
          </div>
          <div className="col col-sm-5">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/75fb6d2c0f0619c3f837988c56d2ff27.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">Business</p>
            </div>
          </div>
          <div className="col col-sm-5">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/b569f2564ca9d109fc65242e5c7efdf5.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">Door hardware </p>
            </div>
          </div>
          <div className="col col-sm-5">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/6ec244bef48a83413bf84f4cef5aa882.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">Travel Size Bottles</p>
            </div>
          </div>
          <div className="col col-sm-5">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/05b43d7b3dc82cb4da781b4589e565ee.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">T-Shirts</p>
            </div>
          </div>
          <div className="col col-sm-5">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/f2885c741b3f37a38bdabb684912bdd3.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">Wall Decor</p>
            </div>
          </div>
          <div className="col col-sm-5">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/mdc/8bc4dfda3d6c21a758337e22010d9924.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">Moisturizers</p>
            </div>
          </div>
          <div className="col col-sm-5">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/a0a9704d8bf455020ae005ec829b7396.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">Wallpaper</p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/9b55dedd94db7e63e1deb5190a4d1429.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">Wall Decor</p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/17f21ed159e4f94466429a7d22fbc2ed.jpg"
                className="card-img-top"
                alt="..."
              />
              <p className="card-text">Gravity Water Dispenser</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    id="flash"
    className="container-fluid"
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className="flash ">
      <div className="flash-heading">
        <h2>Flash Sale</h2>
      </div>
      <div className="flash-cards">
        <div className="flash-head">
          <div
            className="card-fs-content-header J_FSHeader"
            data-count-down-bg-color="#ff6801"
          >
            <div className="card-fs-content-header-left J_FSHeaderLeft">
              <div className="card-fs-content-header-left-status pull-left">
                <div className="fs-status-text" style={{ color: "undefined" }}>
                  On Sale Now
                </div>
              </div>
            </div>
            <button
              className="card-fs-content-button J_ShopMo"
              style={{ color: "#f57224", borderColor: "#f57224" }}
            >
              SHOPMORE
            </button>
          </div>
        </div>
        <div className="flash-body">
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 cols-md-3 row-cols-sm-1 g-1 ">
            <div className="col">
              <div className="card">
                <img
                  src="https://static-01.daraz.pk/p/5fc3f1b7ded271b490539883eb823f7a.jpg"
                  className="card-img-center"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    FRAKIN Table Corner Protector / Bed Corner ...
                  </p>
                  <span className="card-text text">Rs.142</span>
                  <div className="card-inner">
                    <del>Rs.250</del>
                    <span>-43%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://static-01.daraz.pk/p/5fc3f1b7ded271b490539883eb823f7a.jpg"
                  className="card-img-center"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    FRAKIN Table Corner Protector / Bed Corner ...
                  </p>
                  <span className="card-text text">Rs.142</span>
                  <div className="card-inner">
                    <del>Rs.250</del>
                    <span>-43%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://static-01.daraz.pk/p/5fc3f1b7ded271b490539883eb823f7a.jpg"
                  className="card-img-center"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    FRAKIN Table Corner Protector / Bed Corner ...
                  </p>
                  <span className="card-text text">Rs.142</span>
                  <div className="card-inner">
                    <del>Rs.250</del>
                    <span>-43%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://pk-live-21.slatic.net/kf/Sdc79bd3dde67430cb7534101d321d836x.jpg"
                  className="card-img-center"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    1 Pair Summer Finger Sleeve Ice Cool Wearing...
                  </p>
                  <span className="card-text text">Rs.279</span>
                  <div className="card-inner">
                    <del>Rs.00</del>
                    <span>0%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://static-01.daraz.pk/p/e744b0b9d43a04bac05b0a95667e3879.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Ergonomic Dual Mode Bluetooth Feature and ...
                  </p>
                  <span className="card-text text">Rs.729</span>
                  <div className="card-inner">
                    <del>Rs.2219</del>
                    <span>-67%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://static-01.daraz.pk/p/674fce1cd7a26ab4db29f03dbe0c74f9.jpg_200x200q80-product.jpg_.webp"
                  className="card-img-center"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    P47 Wireless headphones with Microphone Blue...
                  </p>
                  <span className="card-text text">Rs.709</span>
                  <div className="card-inner">
                    <del>Rs.889</del>
                    <span>-20%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://static-01.daraz.pk/p/168d797258f280edcefd0c44f3b29220.jpg_200x200q80-product.jpg_.webp"
                  className="card-img-center"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    T9 Trimmer VINTAGE t9 trimmer metal
                  </p>
                  <span className="card-text text">Rs.749</span>
                  <div className="card-inner">
                    <del>Rs.1,200</del>
                    <span>-38%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://pk-live-21.slatic.net/kf/Sc6a37a13f4ce4b56a0f44ab885a4b668D.jpg"
                  className="card-img-center"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    2pcs Drain Soap Holder Leaf Shape Soap Box
                  </p>
                  <span className="card-text text">Rs.389</span>
                  <div className="card-inner">
                    <del>Rs.300</del>
                    <span>-47%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="foryou" className="container-fluid">
    <div className="foryou container-fluid" style={{ width: "94%" }}>
      <div className="foryou-heading">
        <h2>Just For You</h2>
      </div>
      <div className="foryou-cards">
        <div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 cols-md-3 row-cols-sm-1 g-3 ">
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/5fc3f1b7ded271b490539883eb823f7a.jpg"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  FRAKIN Table Corner Protector / Bed Corner ...
                </p>
                <span className="card-text text">Rs.142</span>
                <div className="card-inner">
                  <del>Rs.250</del>
                  <span>-43%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(3781)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://pk-live-21.slatic.net/kf/Sdc79bd3dde67430cb7534101d321d836x.jpg"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  1 Pair Summer Finger Sleeve Ice Cool Wearing...
                </p>
                <span className="card-text text">Rs.279</span>
                <div className="card-inner">
                  <del>Rs.00</del>
                  <span>0%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(3781)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/e744b0b9d43a04bac05b0a95667e3879.jpg"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Ergonomic Dual Mode Bluetooth Feature and ...
                </p>
                <span className="card-text text">Rs.729</span>
                <div className="card-inner">
                  <del>Rs.2219</del>
                  <span>-67%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(3781)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/674fce1cd7a26ab4db29f03dbe0c74f9.jpg_200x200q80-product.jpg_.webp"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  P47 Wireless headphones with Microphone Blue...
                </p>
                <span className="card-text text">Rs.709</span>
                <div className="card-inner">
                  <del>Rs.889</del>
                  <span>-20%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(3781)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/168d797258f280edcefd0c44f3b29220.jpg_200x200q80-product.jpg_.webp"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">T9 Trimmer VINTAGE t9 trimmer metal</p>
                <span className="card-text text">Rs.749</span>
                <div className="card-inner">
                  <del>Rs.1,200</del>
                  <span>-38%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(3781)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/16753cefe1a63b6dfe3a38ff685fd9b5.jpg_200x200q80-product.jpg_.webp"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Pack of 12 matte lipsticks Pack of 12 matte lipsticks
                </p>
                <span className="card-text text">Rs.599</span>
                <div className="card-inner">
                  <del>Rs.999</del>
                  <span>-40%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(3781)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/70988436f3b4f938491f343e4289672e.jpg_200x200q80-product.jpg_.webp"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  GLUPATONE Extreme Strong Whitening Emulsio...
                </p>
                <span className="card-text text">Rs.730</span>
                <div className="card-inner">
                  <del>Rs.800</del>
                  <span>-9%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(3781)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/168d797258f280edcefd0c44f3b29220.jpg_200x200q80-product.jpg_.webp"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">T9 Trimmer VINTAGE t9 trimmer metal</p>
                <span className="card-text text">Rs.749</span>
                <div className="card-inner">
                  <del>Rs.1,200</del>
                  <span>-38%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(3781)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/070c2d29064b9a7bd688ef947826f7e6.jpg_200x200q80-product.jpg_.webp"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Lifestyle Glory Brand Corner Decorative Butterfl...
                </p>
                <span className="card-text text">Rs.138</span>
                <div className="card-inner">
                  <del>Rs.500</del>
                  <span>-72%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(234)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/fb04c0ef4abe4624af83f6f085d5b8e3.png_200x200q80-product.jpg_.webp"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Beautious 5IN1 Super Skin Glowing Serum | 5%...
                </p>
                <span className="card-text text">Rs.269</span>
                <div className="card-inner">
                  <del>Rs.499</del>
                  <span>-46%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(1031)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://pk-live-21.slatic.net/kf/Sd859ab6f4279479bb671a32d6923234fb.jpg"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  USB Rechargeable Motion Sensor Light Under Cabine
                </p>
                <span className="card-text text">Rs.840</span>
                <div className="card-inner">
                  <del>Rs.2,112</del>
                  <span>-60%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(1709)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://pk-live-21.slatic.net/kf/Sa372d0cc38014f0ebafa209aa7eb56d2I.jpg"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  1 Pc Digital Thermometer Good Quality Clinical Oral
                </p>
                <span className="card-text text">Rs.279</span>
                <div className="card-inner">
                  <del>Rs.250</del>
                  <span>-43%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(1709)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://pk-live-21.slatic.net/kf/Sff0960f513054a0c957c00308d9383f1g.jpg"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  24 PCs Fake Nails with 1 Nail Glue and 1 Nail File
                </p>
                <span className="card-text text">Rs.329</span>
                <div className="card-inner">
                  <del>Rs.250</del>
                  <span>-43%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(206)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/168d797258f280edcefd0c44f3b29220.jpg_200x200q80-product.jpg_.webp"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">T9 Trimmer VINTAGE t9 trimmer metal</p>
                <span className="card-text text">Rs.749</span>
                <div className="card-inner">
                  <del>Rs.1,200</del>
                  <span>-38%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(3781)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/f4e0387ef204f78fd2600a02e8368afd.jpg_200x200q80-product.jpg_.webp"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Meclay London Hair Fall Defense Shampoo 660ml..
                </p>
                <span className="card-text text">Rs.1,410</span>
                <div className="card-inner">
                  <del>Rs.1,610</del>
                  <span>-12%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(660)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://pk-live-21.slatic.net/kf/S9ad8b9d6977943dc9a84f05812b1ed29U.jpg"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Wireless Bluetooth Headphones i 12 Tws
                </p>
                <span className="card-text text">Rs.449</span>
                <div className="card-inner">
                  <del>Rs.2,366</del>
                  <span>-81%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(3781)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static-01.daraz.pk/p/12bf8e2a45b00df7a214511b2057417b.jpg_200x200q80-product.jpg_.webp"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  4 in 1 Wireless Selfie Stick &amp; Tripod With Light -Tripo...
                </p>
                <span className="card-text text">Rs.625</span>
                <div className="card-inner">
                  <del>Rs.999</del>
                  <span>-37%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(144)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://pk-live-21.slatic.net/kf/S4de648a5959b4e6b9def6330d77e3c65M.jpg"
                className="card-img-center"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  90cmx150cm Palestinian Flag Polyester Material
                </p>
                <span className="card-text text">Rs.996</span>
                <div className="card-inner">
                  <del>Rs.2742</del>
                  <span>-64%</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                  </div>
                  <div className="number">(3)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foryou-button">
        <button>Load More</button>
      </div>
    </div>
  </section>
</main>
 
        
        
        
        
        
        
        
        </>
    )
}