# USER SCHEMA

```javascript
const userSchema =  {
    firstName,
    lastName,
    mongooseValidation,
    email,
    password,
    phoneNumber,
    gender,
    isVerified,
    resetPassword,
    resetPasswordExpired,
    age,
    bookings:[{
      travelersInfo:[{age:Number,gender:String,name:String,seatNumber:String,price:Number}],
    }]
},

```

# CITY SCHEMA

```javascript
const citySchema = {
  cityName,
  Direction,
  stopPoints: [{ name, description }],
};
```

# Trips Schema

```javascript
const tripsSchema = {
  sourceCity: "cityId",
  destinationCity: "cityId",
  startTime: Number,
  endTime: Number,
  busId: "busId",
  boardingPoints: [{ stopId: "stopId", arrivalTime: Number }],
  dropingPoints: [{ stopId: "stopId", arrivalTime: Number }],
  prices: [{ seatNumber: String, price: Number }],
};
```

# Bus Schema

```javascript
const busSchema = {
  numberPlate: String,
  busParter: String,
  layout: {
    userDeck: [{ seatNumber: String, row: Number, col: Number }],
    lowerDeck: [{ seatNumber: String, row: Number, col: Number }],
  },
  amenities: [String],
  busType: [String],
  driverInfo: {
    phone: Number,
    name: String,
  },
  rating: {
    users: ["userIds"],
    avgRating: Number,
  },
};
```
