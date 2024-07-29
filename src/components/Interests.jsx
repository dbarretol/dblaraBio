// Interests.js
import React from 'react';
import myInterests from './../assets/data/interestsData'; // Importa los datos de intereses

function Interests() {
    return (
        <section id="Interests">
            <div className="container">
                <h2 className="sectionTitle">Intereses</h2>
                <div className="badge-container">
                    {myInterests.map((interes, index) => (
                        <div key={index} className="col-auto">
                            <div className="badgeTypeI">{interes}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Interests;