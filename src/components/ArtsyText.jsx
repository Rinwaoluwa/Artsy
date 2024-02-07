function ArtsyText() {
    const styles = {
            fontFamily: "var(--font-3)", // will this work ? or we should specify the actual font name
            fontWeight: "bold",
            fontSize: "var(--size-3)", // I think we should be using percentage on this for flexibility
    }
    return (
        <h1 style={styles} className="artsy-main-text">
            ARTSY.
        </h1>
    )
}

export default ArtsyText;
