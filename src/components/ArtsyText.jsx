import { Link } from "react-router-dom";

function ArtsyText() {
    const styles = {
        fontFamily: "var(--font-3)",
        fontWeight: "bold",
        fontSize: "var(--size-3)", 
    }
    return (
        <h1 style={styles} className="artsy-main-text">
            <Link to={'/'}>ARTSY.</Link>
        </h1>
    )
}

export default ArtsyText;
