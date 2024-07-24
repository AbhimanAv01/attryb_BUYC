## 1.Tables

### MarketplaceInventory

| Field                        | Type                                    | Required |
|------------------------------|-----------------------------------------|----------|
| car_id                       | mongoose.Schema.Types.ObjectId (ref: 'OEMSpecs') | Yes      |
| model_name                   | String                                  | Yes      |
| list_price                   | String                                  | Yes      |
| year_of_model                | String                                  | Yes      |
| mileage                      | String                                  | Yes      |
| power                        | String                                  | Yes      |
| max_speed                    | String                                  | Yes      |
| available_colors             | [String]                                | Yes      |
| img_url                      | [String]                                | Yes      |
| additionalInfo               | Object                                  | Yes      |
| additionalInfo.original_paint| String                                  | Yes      |
| additionalInfo.accidents_reported | String                             | Yes      |
| additionalInfo.kms_on_odometer | String                                | Yes      |
| additionalInfo.major_scratches | String                                | Yes      |
| additionalInfo.previous_buyers | String                                | Yes      |
| additionalInfo.registration_place | String                             | Yes      |

### OEMSpecs

| Field            | Type   | Required |
|------------------|--------|----------|
| model_name       | String | Yes      |
| year_of_model    | Number | Yes      |
| list_price       | Number | Yes      |
| available_colors | [String] | Yes    |
| mileage          | Number | Yes      |
| power_bhp        | Number | Yes      |
| max_speed        | Number | Yes      |

### Category

| Field           | Type   | Required |
|-----------------|--------|----------|
| category        | String | Yes      |
| title           | String | Yes      |
| img_url         | String | Yes      |




## API Endpoints

* Query the Number of OEM Models Available
API:[https://attryb-buyc-backend.onrender.com/api/oem-models/count](https://attryb-buyc-backend.onrender.com/api/oem-models/count)

* Search for Honda City 2015 OEM Specs
API:[https://attryb-buyc-backend.onrender.com/api/oem-specs/search?model_name=Honda%20City&year_of_model=2015](https://attryb-buyc-backend.onrender.com/api/oem-specs/search?model_name=Honda%20City&year_of_model=2015)
