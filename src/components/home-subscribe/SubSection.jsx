import React from 'react';
import './SubSection.css'

const SubSection = () => {
    return (
        <section className='sub-sec text-center'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className='text-capitalize mb-4'>Subscribe To Our Newsletter</h2>
                        <p className='text-muted mb-4'>Receive an exclusive 10% discount code when you signup.</p>
                        <div className="form-sub">
                            <input type="email" placeholder='Enter Email *' />
                            <button>subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubSection
