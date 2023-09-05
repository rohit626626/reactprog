import React from 'react' 
import  {Link} from 'react-router-dom';
export default function Navbar(props) { 
return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">about</Link>
            </li>
        </ul>
       
   {/* <div className="d-flex"> */}
       {/* <div className='bg-primary rounded mx-2' onClick={()=>{props.toggleMode('primary')}} style={{height:"30px", width:"30px"}}></div> */}
       {/* <div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode('success')}} style={{height:"30px", width:"30px"}}></div> */}
       {/* <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height:"30px", width:"30px"}}></div> */}
       {/* <div className='bg-warning rounded mx-2' onClick={()=>{props.toggleMode('warning')}} style={{height:"30px", width:"30px"}}></div> */}
       {/* <div className='bg-light rounded mx-2' onClick={()=>{props.toggleMode('light')}} style={{height:"30px", width:"30px"}}></div> */}
   {/* </div> */}
             
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="from-check-input" onClick={()=>{props.toggleMode('null')}} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
        </div>


    </div>
</nav>
) }