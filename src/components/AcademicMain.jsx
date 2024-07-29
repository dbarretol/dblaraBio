import React from 'react'
import AcademicEntry from './AcademicEntry';

function AcademicMain() {
    return (
        <section className="AcademicBackground">
            <div className="container">
                <div className="row d-flex">
                    <h2 className="sectionTitle">Formación academica</h2>
                    <AcademicEntry
                        logoSrc="/images/EdLogos/UNI.jpg"
                        logoAlt="logo UNI"
                        program="Doctorado en ciencias con mención en energética"
                        institution="Universidad Nacional de Ingeniería"
                        dates="2016 - 2020"
                    />
                    <AcademicEntry
                        logoSrc="/images/EdLogos/ESAN.jpg"
                        logoAlt="logo ESAN"
                        program="Maestría en administración de negocios (MBA)"
                        institution="ESAN Graduate School of Business"
                        dates="Julio/2023 - Agosto/2024"
                    />
                </div>
            </div>
        </section>
    )
}

export default AcademicMain