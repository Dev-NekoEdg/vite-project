import { ItemCounter } from "./ItemCounter"
interface ItemInCart {
    productName: string;
    quantity: number;
}

const cartItems: ItemInCart[] = [
    {productName: 'nintendo switch 2', quantity: 1},
    {productName: 'Play station 5', quantity: 2},
    {productName: 'Xbox series X', quantity: 1},
    {productName: 'PC gamer', quantity: 1},
    {productName: 'laptop pro', quantity: 3},
];
    
export const ShoppingMain = () => {
    return (
        <>
<h1>Shopping Cart Main</h1>

{
//expresion de mapeo
cartItems.map( (item) => (
    // Cuando se muestran muchos componenetes de una lista es recomendable agregar la propiedad key!
    // no esrecomendable usar el indice del arreglo como key.
    <ItemCounter key={item.productName} name={item.productName} quantity={item.quantity}></ItemCounter>
))
}

            {/* <ItemCounter name="nintendo switch 2"></ItemCounter>
            <ItemCounter name="Play station 5" quantity={2}></ItemCounter>
            <ItemCounter name="Xbox series X"></ItemCounter> */}
        </>
    )
}