import { useState } from "react"

const ButtonState = () => {
    //let count = 0

    const [count, setCount] = useState(1)
    //const stateNumber = arrayState[0]
    //const stateFunction = arrayState[1]

    const handleClick = () =>{
        //count += 1
        //console.log(`Handle click ${count}`)
        setCount(count +1)
    }

    return <button onClick={handleClick}>buttonstate: {count}</button>
}

export default ButtonState