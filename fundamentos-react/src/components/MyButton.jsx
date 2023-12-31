const MyButton = ({ text }) => {
    const handleClick = (title) => {
        console.log("handle click" + title)
    }
    return <button onClick={() => handleClick(text)}>{text}</button>;
};

export default MyButton