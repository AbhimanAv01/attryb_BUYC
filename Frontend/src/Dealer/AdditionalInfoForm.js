import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdditionalInfoForm = ({ car }) => {
  const [additionalInfo, setAdditionalInfo] = useState({
    kms_on_odometer: '',
    major_scratches: '',
    original_paint: '',
    accidents_reported: '',
    previous_buyers: '',
    registration_place: '',

  });

  const handleChange = (e) => {
    setAdditionalInfo({
      ...additionalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSave = {
    car_id: car._id, 
    model_name: car.model_name,
    year_of_model: car.year_of_model,
    list_price: car.list_price, 
    milleage: car.mileage, 
    power: car.power_bhp,
    max_speed: car.max_speed,
    available_colors:car.available_colors,
    img_url:car.img_url,
    additionalInfo: {
      original_paint: additionalInfo.original_paint,
      accidents_reported: additionalInfo.accidents_reported, 
      kms_on_odometer: additionalInfo.kms_on_odometer,
      major_scratches: additionalInfo.major_scratches,
      previous_buyers: additionalInfo.previous_buyers, 
      registration_place: additionalInfo.registration_place,
    }
    };

    try {
      console.log(dataToSave)
      const response = await axios.post('http://localhost:3010/api/inventory/add',dataToSave);
      // toast.success('Information saved successfully!');
      alert('Information saved successfully!')
      console.log('Data saved successfully:', response.data);
      
    } catch (error) {
      // toast.error('Failed to save information. Please try again.');
      alert('Failed to save information. Please try again.')
      console.error('Error saving data:', error.message);
      
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Additional Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="kms_on_odometer">Kms on Odometer</label>
          <input
            type="text"
            className="form-control"
            id="kms_on_odometer"
            name="kms_on_odometer"
            value={additionalInfo.kms_on_odometer}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="major_scratches">Major Scratches</label>
          <input
            type="text"
            className="form-control"
            id="major_scratches"
            name="major_scratches"
            value={additionalInfo.major_scratches}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="original_paint">Original Paint</label>
          <input
            type="text"
            className="form-control"
            id="original_paint"
            name="original_paint"
            value={additionalInfo.original_paint}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="accidents_reported">Accidents Reported</label>
          <input
            type="text"
            className="form-control"
            id="accidents_reported"
            name="accidents_reported"
            value={additionalInfo.accidents_reported}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="previous_buyers">Previous Buyers</label>
          <input
            type="text"
            className="form-control"
            id="previous_buyers"
            name="previous_buyers"
            value={additionalInfo.previous_buyers}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="registration_place">Registration Place</label>
          <input
            type="text"
            className="form-control"
            id="registration_place"
            name="registration_place"
            value={additionalInfo.registration_place}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Information</button>
      </form>
    </div>
  );
};

export default AdditionalInfoForm;
