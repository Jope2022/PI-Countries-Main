import Paginated from "../Paginated/Paginated";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountries } from "../redux/actions";

const PaginatedDetalle = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const { idPais } = useParams();

  const countriesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalCountries = countries.length;
  const totalPages = Math.ceil(totalCountries / countriesPerPage);

  const paginated = Array.from({ length: totalPages }, (_, index) => index + 1);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountry = countries.slice(firstCountry, lastCountry);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <Paginated
        countriesPerPage={countriesPerPage}
        totalCountries={totalCountries}
        paginated={paginated}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className="containerPag">
        {currentCountry.map((country) => {
          return (
            <div key={country.name}>
              <p>{country.name}</p>
              <img src={country.flag ? country.flag : "no hay banderas"} alt="" />
              <p>Id: {country.id}</p>
              <p>Capital: {country.capital}</p>
              <p>Continent: {country.continent}</p>
              <p>SubRegion: {country.subregion}</p>
              <p>Area: {country.area}</p>
              <p>Population: {country.population}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaginatedDetalle;

