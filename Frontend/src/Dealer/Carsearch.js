import React, { useEffect, useState } from 'react';
import Filters from './Carfilter';
import Carlist from './Carlist';
import AdditionalInfoForm from './AdditionalInfoForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarSearch = () => {
  const [filteredCars, setFilteredCars] = useState([]); 
  const [filters, setFilters] = useState({});
  const [selectedCar, setSelectedCar] = useState(null); 

  useEffect(() => {
    const fetchCars = async () => {
      if (Object.keys(filters).length > 0) {
        try {
          const queryString = new URLSearchParams(filters).toString();
          const response = await fetch(`http://localhost:3010/api/oem-specs/search?${queryString}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          const carData = Array.isArray(data) ? data : [data];
          setFilteredCars(carData);
        } catch (error) {
          console.error('Error fetching cars:', error.message);
        }
      }
    };

    fetchCars();
  }, [filters]);

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4"></h1>
      <Filters onFilterChange={setFilters} />
      <h2 className="mb-4">Car Listings</h2>
      <div className="row">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div className="col-md-4 mb-4" key={car._id}>
              <Carlist product={car} onSelect={() => handleSelectCar(car)} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>No cars found</p>
          </div>
        )}
      </div>
      {selectedCar && (
        <div className="mt-4">
          <h3 className="mb-3">Selected Car Information</h3>
          <div className="card p-4">
            <div className="card-body">
              <p><strong>Model Name:</strong> {selectedCar.model_name}</p>
              <p><strong>Year:</strong> {selectedCar.year_of_model}</p>
              <p><strong>Price:</strong> ${selectedCar.list_price.toFixed(2)}</p>
              <p><strong>Available Colors:</strong> {selectedCar.available_colors.join(', ')}</p>
            </div>
          </div>
          <div className="mt-4">
            <AdditionalInfoForm car={selectedCar} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarSearch;
