import socialDesktop from './images/social-desktop.PNG'
import socialMobile from './images/social-mobile.PNG'
import './page.css'
import {Link} from 'react-router-dom'


const Signup = () => {
    return(
        <div className="container login-container">
            <div className="row">
                <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                    <img className='socialDesktop' style={{height:'80%'}} src={socialDesktop} alt='Reactogram' />
                    <img className='socialMobile' src={socialMobile} alt='mobilelogo' />
                </div>
                <div className="col-md-5">
                    <div className='card shadow'>
                        <div className='card-body px-5'>
                            <h4 className='card-title text-center mt-3 fw-bold'>Sign Up</h4>
                            <form>
                                <input type='phone' className='p-2 mt-4 mb-4 form-control input-bg' placeholder='Phone number'></input>
                                <input type='email' className='p-2 mt-4 mb-4 form-control input-bg' placeholder='Email'></input>
                                <input type='text' className='p-2 mt-4 mb-4 form-control input-bg' placeholder='Full Name'></input>
                                <input type='password' className='p-2 mt-3 mb-4 form-control input-bg' placeholder='Password'></input>
                                <div className='d-grid'>
                                    <button type='submit' className='custom-btn custom-btn-blue'> Log In</button>
                                </div>
                                <div>
                                    <hr className='text-muted'/>
                                    <h5 className='text-muted text-center'>OR</h5>
                                    <hr className='text-muted'/>
                                </div>
                                <div className='d-grid'>
                                <button type='submit' className='custom-btn custom-btn-white'>
                                    <span className='text-muted'>Already have an account?</span>
                                    <Link to={'/Login'} className='ms-1 text-info'>Log In</Link>
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Signup