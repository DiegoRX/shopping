import NavBar from "./components/NavBar"
import plants from './context/plants.json'
import Card from "./components/Card.jsx"
export default function Products() {

    const aromaticPlants = plants.filter((product) => product.type === "aromatic")
    const purifierPlants = plants.filter((product) => product.type === "purifier")

    return (
        <div>
            <NavBar />
            <h1>Products</h1>
            <h2>Aromatic Fragant Plants</h2>
            {aromaticPlants.map((product, index) => (
                <Card key={index} product={product} />
            ))}
            <h2>Air Purifying Plants</h2>
            {purifierPlants.map((product, index) => (
                <Card key={index} product={product} />
            ))}
        </div>
    )

}