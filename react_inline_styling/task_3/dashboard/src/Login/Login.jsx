import { StyleSheet, css } from 'aphrodite';


function Login() {
    return (
        <>
            <div className={css(styles.body, styles.small)}>
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
   },

   small: {
    "@media (max-width: 900px)": {
      marginLeft: "0px",
      display: "flex",
      flexDirection: "column",
    }
    },
});

export default Login;
