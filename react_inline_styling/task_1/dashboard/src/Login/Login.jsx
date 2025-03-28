import { StyleSheet, css } from 'aphrodite';


function Login() {
    return (
        <>
            <div className={css(styles.body)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"></input>
                <button>OK</button>
            </div>
        </>
    );
}

const styles = StyleSheet.create({
   body: {
    marginTop: "50px",
    marginLeft: "30px",
    marginBottom: "350px",
   }
});

export default Login;
