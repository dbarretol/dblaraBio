import React from 'react';
import AcademicEntry from './AcademicEntry';
import academicEntries from '../assets/data/academicEntries';

function AcademicMain() {
    return (
        <section className="AcademicBackground">
            <div className="container">
                <div className="row d-flex">
                    <h2 className="sectionTitle">Formación académica</h2>
                    {academicEntries.map((entry, index) => (
                        <AcademicEntry
                            key={index} // Añadir una key única para cada entrada
                            logoSrc={entry.logoSrc}
                            logoAlt={entry.logoAlt}
                            program={entry.program}
                            institution={entry.institution}
                            dates={entry.dates}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AcademicMain;