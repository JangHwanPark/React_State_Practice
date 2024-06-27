import logo from './logo.svg';
import './App.css';
import ProductItem from "./components/ProductItem";
import useProducts from "./hooks/useProducts";
import Users from "./components/pages/Users";

function App() {
    const { data, error, isLoading } = useProducts();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="App">
            {/*{data.map((product) => (
                <ProductItem key={product.userId} product={product} />
            ))}*/}
            <h1>Users</h1>
            <Users/>
        </div>
    );
}

export default App;