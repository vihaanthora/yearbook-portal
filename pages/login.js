
import cx from 'classnames';
import styles from '../styles/login.module.css'
import Link from 'next/link'

export default Signin;

function Signin() {
  return (
    <>

      <main className={cx(styles["form-signin"],"text-center","mt-10")}>
        <form>
          <h1 className="h3 mb-3 fw-normal">Please Login</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className={cx(styles.checkbox,"mb-3")}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
          <Link href="/signup"><a><h4>Don't have an account yet?</h4></a></Link>
        </form>
      </main>

    </>
  )
}