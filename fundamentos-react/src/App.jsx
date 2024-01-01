import imgUno from "./assets/images/img1.jpg";
import MyButton from "./components/MyButton";
import WelcomText from "./components/WelcomeText";
import ListFruits from "./components/ListFruits";
import ButtonState from "./components/ButtonState";

const App = () => {
    const title = "Mi titulo desde una constante";
    const user = true;
    // const pathImg = "src/assets/images/img1.jpg"
    const classColors = {
        primary: "text-primary",
        info: "text-info",
    };

    console.log(imgUno);
    return (
        <>
            <h1 className={classColors.primary}>{title}</h1>
            <ButtonState/>
            <p className={classColors.info}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vluptatem eum
                tenetur minus debitis nemo accusantium, et saepe amet iste doloremque
                quos soluta consequatur. Voluptate tenetur voluptates magni quod quaerat
                maxime.
            </p>
            <MyButton text="botón 1" />
            <MyButton text="botón 2" />
            <MyButton text="botón 3" />
            <img src={imgUno} alt="loremPic" />
            <WelcomText user={user} />
            <ListFruits></ListFruits>
        </>
    );
};

export default App;
