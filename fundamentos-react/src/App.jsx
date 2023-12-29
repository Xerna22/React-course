import imgUno from "./assets/images/img1.jpg"

const MyButton = () =>{
    return (
        <button>I'm a button</button>
    )
}

const OnlineText = ()=>{
    return (
        <div>
            <h3>Online</h3>
        </div>
    )
}

const OfflineText = ()=>{
    return (
        <div>
            <h3>Offline</h3>
        </div>
    )
}

const App = () =>{
    const title = "Mi titulo desde una constante"
    const user = false;
    // const pathImg = "src/assets/images/img1.jpg"
    const classColors = {
        primary: "text-primary",
        info: "text-info"
    }

    const fruits = [
        "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
        "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
        "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤔", "🤐", "😑",
        "😶", "😏", "😒", "🙄", "😬", "😌", "😔", "😪", "🤤", "😴",
        "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵",
        "🤯", "🤠", "🥳", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️",
        "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥",
        "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱",
        "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡",
        "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻",
        "😼", "😽", "🙀", "😿", "😾"
      ];

    console.log(imgUno)
    return(
        <>
            <h1 className={classColors.primary}>{title}</h1>
            <p className={classColors.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vluptatem eum tenetur minus debitis nemo accusantium, et saepe amet iste doloremque quos soluta consequatur. Voluptate tenetur voluptates magni quod quaerat maxime.</p>
            <MyButton></MyButton><br />
            <img src={imgUno} alt="loremPic" />
            {user ? <OnlineText></OnlineText> : <OfflineText></OfflineText>}
            <ul>
                {
                    fruits.map((fruit) =>(
                        <li>{fruit}</li>
                    ))
                }
            </ul>
        </>
    )
};

 export default App