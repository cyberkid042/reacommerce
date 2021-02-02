import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchProducts from "./FetchProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products: product, isLoading, error } = useFetchProducts(
    "https://fakestoreapi.com/products/" + id
  );

  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
  };

  let total = !isLoading ? quantity * product.price : "";
  let gst = 1.15 * total - total;
  let grandTotal = parseFloat(total + gst).toFixed(2);

  let buttonState = quantity < 1 && "true";

  return (
    <div className="container mt-5">
      {isLoading && <div className="text-center"> Loading...</div>}
      {error && <div className="text-center">{error}</div>}
      {product && (
        <div className="row justify-content-center">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-5">
                <div className="card shadow-sm border-light p-3">
                  <img src={product.image} alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <h5>{product.title}</h5>
                <div>
                  <small>{product.category}</small>
                  <small className="ml-5">${product.price.toFixed(2)}</small>
                </div>

                <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active pt-3"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <p>{product.description}</p>
                  </div>
                </div>
                <hr />
                <h5 className="text-center pb-4">Cart</h5>
                <p>Quantity</p>
                <div className="d-flex ">
                  <div className="d-flex align-items-baseline">
                    <button
                      onClick={decrementQuantity}
                      className="btn btn-sm bg-danger text-light mr-2"
                      disabled={buttonState}
                    >
                      -
                    </button>
                    <p className="mr-2">{quantity}</p>
                    <button
                      onClick={incrementQuantity}
                      className="btn btn-sm bg-success text-light"
                    >
                      +
                    </button>
                  </div>
                  <div className="ml-auto">
                    <h6>TOTAL: {!isLoading && total.toFixed(2)}</h6>
                    <h6>GST/HST: ${gst.toFixed(2)}</h6>
                    <h6 className="">
                      GROSS TOTAL: {!isLoading && grandTotal}
                    </h6>
                  </div>
                </div>
                <div className="my-4 d-flex">
                  <Link to="/" className="btn btn-sm bg-warning text-dark">
                    Go Back
                  </Link>
                  <button className="btn btn-sm bg-success text-light ml-2">
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
