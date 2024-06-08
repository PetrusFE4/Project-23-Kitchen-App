import { useNavigate } from "react-router-dom"

const Signup = () => {
  const Navigate = useNavigate ()
  return (

    <div>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className="row border rounded-5 p-3 bg-white shadow box-area">
      <div
        className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
        style={{ background: '#3D447A' }}
      >
        <div className="featured-image mb-3">
          <img src="/src/assets/iconseflog.png" className="img-fluid" style={{ width: '250px' }} alt="Featured" />
        </div>
        <p className="text-white fs-2" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 600 }}></p>
        <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: "'Courier New', Courier, monospace" }}>Pusat Informasi Seputar Masakan Untuk Kamu.</small>
      </div>
      
      <div className="col-md-6 right-box">
        <div className="row align-items-center">
          <div className="header-text mb-4">
            <h2>SIGN UP HERE</h2>
            <p>Create Your User Account Now</p>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Your Full Name" />
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Email address" />
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Password" />
          </div>
          <div className="input-group mb-1">
            <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Confirm Password" />
          </div>
          <div className="input-group mb-3">
            <button className="btn text-white btn-lg w-100 fs-6"style={{ background: '#3D447A' }} onClick={() => Navigate ('/Home')} > Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  )
}

export default Signup