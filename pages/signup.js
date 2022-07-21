import cx from 'classnames';
import styles from '../styles/signup.module.css'
import Link from 'next/link'

export default Signin;

function Signin() {
  return (
    <>

      <main className={cx(styles["form-signin"],"text-center","mt-10")}>
        <form>
          <h1 className="h3 mb-3 fw-normal">SIGN UP</h1>

          <div className="form-floating">
            <input type="Name" className="form-control" id="floatingInput" placeholder="Full Name" />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input type="Email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="Password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className={cx(styles.checkbox,"mb-5")}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
          <Link href="/login"><a><h4>Already have an account?</h4></a></Link>
        </form>
      </main>

    </>
  )
}