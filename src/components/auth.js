import "../assets/auth.scss";
import { useState } from "react";

export default function AuthPopup() {
  const [toggle, setToggle] = useState("SignUp");
  function handleToggle(event){
    event.preventDefault();
    setToggle((prev)=>{
        if(prev ==="SignIn"){
            return "SignUp";
        }
        else {
            return "SignIn";
        }
    });
  }
  function handleSubmit(event){
    event.preventDefault();
   
  }

  return (
    <>
       
        <div className="container">
          <header className="row text-center">
            <div className="col logo"></div>
          </header>
          <main className="main row">
            <div className="left col">
              <img
                src="https://img.freepik.com/premium-vector/young-woman-enjoy-sitting-reading-book-hygge-concept-vector-illustration_194708-2078.jpg"
                alt="reading-a-book"
              />
            </div>
            <div className="right col">
              <form className="sign-up">
                <h4>Find your next favorite book!</h4>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
                {   (toggle==='SignUp')?
                    (<button type="submit" className="btn submit-btn" onClick={handleSubmit}>
                    Create account
                    </button>):(
                        <button type="submit" className="btn submit-btn"  onClick={handleSubmit}>
                        Log In
                        </button>
                    )
                }
                <div className="sign-in">
                  {(toggle==='SignUp')?(<span>Already have an account?
                  <button className="btn" onClick={handleToggle}>Log In</button>
                  </span>)
                  :(<span>
                  Create an account?
                  <button className="btn">Sign Up</button>
                </span>)}
                </div>
              </form>

              <p className="hr-lines"> OR </p>
              <div className="social-sign-up">
                <button className="btn social">
                  <i className="fa-brands fa-google"></i> Sign up with Google
                </button>
              </div>
            </div>
          </main>
        </div>
      
    </>
  );
}
