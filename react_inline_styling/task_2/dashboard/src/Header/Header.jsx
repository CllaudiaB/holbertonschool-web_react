import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from "../assets/holberton-logo.jpg";


function Header() {
    return (
        <>
            <div className={css(styles.header)}>
                <img src={holbertonLogo} alt="holberton logo" />
                <h1>School dashboard</h1>
            </div>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        borderBottom: "solid #e1003c",
        color: "#e1003c",
        alignItems:"center",
    },
});

export default Header;
