import ItemFruit from "./ItemFruit";

const ListFruits = () => {
    const fruits = [
        "😀",
        "😃",
        "😄",
        "😁",
        "😆",
        "😅",
        "😂",
        "🤣",
        "😊",
        "😇",
        "🙂",
        "🙃",
        "😉",
        "😌",
    ];

    return (
    <ul>
        {fruits.map((fruit, index) => (
            <ItemFruit key={index} fruit={fruit} />
        ))}
    </ul>)
    
}


export default ListFruits