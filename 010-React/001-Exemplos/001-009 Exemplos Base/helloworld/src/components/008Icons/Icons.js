import { BsAirplaneEnginesFill } from "react-icons/bs";
import { DiApple } from "react-icons/di";
import styles from "./Icons.module.css"

function Icons() {
    return (

        <ul className={styles.socialMedia}>
            <li><BsAirplaneEnginesFill /></li>
            <li><DiApple /></li>
        </ul>
    )
     
}

export default Icons