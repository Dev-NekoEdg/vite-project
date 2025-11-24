interface ItemCounterProps {
    name: string;
    quantity?: number;
    // quantity1: number | undefined; // otra forma de definir una propiedad opcional pero esta aparece al momento de declarar el componente
}

export const ItemCounter = (prop: ItemCounterProps) => {

    const handleClick = () => {
        console.log(`click en el item: ${prop.name}.`);
    }

    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
        }}>
            <span>{prop.name}</span>
            <button
                onMouseEnter={() => { console.log(prop.name); }}
            >-1</button>
            <span>{prop.quantity ?? 0}</span>
            <button
                onClick={handleClick}
            >+1</button>
        </section>
    )
}