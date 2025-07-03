export interface AirconUnit {
  id: string;
  name: string;
  model: string;
  btu: number;
  image: string;
  dailyRate: number;
  weeklyRate: number;
  features: string[];
  specifications: {
    dimensions: string;
    weight: string;
    powerConsumption: string;
    coolingCapacity: string;
    noiseLevel: string;
  };
  runningCostPerHour: number;
}

export interface RentalPeriod {
  days: number;
  weeks: number;
}

export interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
  deliveryDate: string;
  pickupDate: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}