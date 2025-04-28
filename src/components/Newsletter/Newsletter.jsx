import React from 'react'

const Newsletter = () => {
  return (
    <div className='container py-5 bg-info'>
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <div className="card shadow rounded-4 p-4 text-center">
                    <div className="mb-3">
                        <h1>Subscribe to our Newsletter</h1>
                    </div>
                    <div className="mb-4 text-muted">
                        <p>Stay updated with our latest news and offer </p>
                    </div>
                    <form className='row g-2' action="">
                        <div className="col-12 col-sm-8">
                            <input type="text" className="form-control" placeholder='Enter your Email'/>
                        </div>
                        <div className="col-12 col-sm-4">
                            <button className="btn btn-primary w-100">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter