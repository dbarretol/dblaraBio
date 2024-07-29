import React from 'react';

function AcademicEntry({ logoSrc, logoAlt, program, institution, dates }) {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px', margin: '0 auto', padding: '0' }}>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ padding: '0' }}>
                    <img src={logoSrc} className="img-fluid rounded-circle" alt={logoAlt} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="col-md-8" style={{ padding: '0' }}>
                    <div className="card-body" style={{ padding: '1rem' }}>
                        <h5 className="card-title" style={{ marginBottom: '0.5rem' }}>{program}</h5>
                        <p className="card-text" style={{ marginBottom: '0.5rem' }}>
                            {institution}
                        </p>
                        <p className="card-text" style={{ marginBottom: '0' }}>
                            <small className="text-body-secondary">{dates}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AcademicEntry;

{/*                  <div className="study-card">
                    <div>
                        <div className="row mb-3">
                            <div className="col-md-2">
                                <img src={logoSrc} alt={logoAlt} className='img-fluid rounded-circle' />
                            </div>
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-9">
                                        <p className="EducationalProgram">{program}</p>
                                        <p className="EducationalInstitution">{institution}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="Dates">{dates}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                
                
                
                
                
                
                
                        <div className="container">
            <div className="card card-horizontal">
                <div className="row g-0">
                    <div className="col-auto card-img-left">
                        <img src={logoSrc} className="img-fluid" alt={logoAlt} />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <div className="text-section">
                                <div className="d-inline-block pe-2">{program}</div>
                                <div className="d-inline-block">{institution}</div>
                                <div className="d-inline-block ps-2">{dates}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/}