import { Link } from "react-router-dom";

function slugify(string) {
  return (
    string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      // .replace(/[^\w\-]+/g, "")
      // .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "")
  );
}

const ProductList = ({ products }) => {
  return (
    <div className="container mb-5">
      <div className="row row-cols-1 row-cols-md-3">
        {products.map((product) => (
          <div className="" key={product.id}>
            <div className="col mb-4">
              <div className="card border-light shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top container"
                  alt="..."
                />
                <div className="card-body">
                  <Link
                    className="card-title text-info text-decoration-none"
                    to={`/products/${product.id}/${slugify(product.title)}`}
                  >
                    {product.title}
                  </Link>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
