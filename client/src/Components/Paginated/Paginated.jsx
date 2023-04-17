import React from 'react'

const Paginated = ({ countriesPerPage, countries, paginated}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav className="paginadoContainer">
                <ul className="ul">
                    {
                        pageNumbers && pageNumbers.map(number =>(
                            <li key={number}>
                                <a href onClick={() => paginated(number)} className="numeroPaginado">{number}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Paginated