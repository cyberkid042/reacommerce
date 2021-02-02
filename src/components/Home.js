import useFetchProducts from "./FetchProducts";
import ProductList from "./ProductList";

const Home = () => {
  const { products, error, isLoading } = useFetchProducts(
    "https://fakestoreapi.com/products"
  );

  return (
    <div>
      <h2 className="text-center mt-4 mb-5">Welcome to the store</h2>
      {error && <div className="text-center text-danger"> {error}</div>}
      {isLoading && <div className="text-center">Loading...</div>}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default Home;
