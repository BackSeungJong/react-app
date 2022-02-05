import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
    return (
        // <button style={{ // css 적용방법 2
        //     backgroundColor: "tomato",
        //     color: "white",
        // }}>
        <button className={styles.btn}>{text}</button> // css 모듈화 적용방법 3
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;