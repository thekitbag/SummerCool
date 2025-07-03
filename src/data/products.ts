import { AirconUnit } from '../types';

export const airconUnits: AirconUnit[] = [
  {
    id: '1',
    name: 'MeacoCool MC Pro Series 9000CH',
    model: 'MC9000CH',
    btu: 9000,
    image: 'https://www.meacodehumidifiers.co.uk/cdn/shop/files/MeacoCool_Aircon_Small_9000CH_800x.png?v=1749732792',
    dailyRate: 31.99,
    weeklyRate: 199.99,
    features: [
      'Remote control included',
      'Wi-Fi and App control',
      'Sleep mode',
      '24-hour timer function',
      'Heating function (Heat Pump)',
      'Dehumidifier function',
      'Includes standard and flexible window kits'
    ],
    specifications: {
      dimensions: '701 x 341 x 335mm',
      weight: '24kg',
      powerConsumption: '1005W',
      coolingCapacity: '9,000 BTU/hr',
      noiseLevel: '52-54dB'
    },
    runningCostPerHour: 0.26
  },
  {
    id: '2',
    name: 'AEG Comfort 6000 / ChillFlex Pro',
    model: 'AXP26U339CW',
    btu: 9000,
    image: 'https://cdn.mos.cms.futurecdn.net/bTricZy7SM6azbvoS2ugjj.jpg',
    dailyRate: 67.99,
    weeklyRate: 399.99,
    features: [
      'Wi-Fi and AEG App control',
      'Timer function',
      'Dehumidifier function',
      'Fan only and Auto modes',
      'Uses eco-friendly R290 refrigerant',
      'LED Display'
    ],
    specifications: {
      dimensions: '705 x 472 x 383mm',
      weight: '31.5kg',
      powerConsumption: '1000W',
      coolingCapacity: '9,000 BTU/hr',
      noiseLevel: '≤64dB'
    },
    runningCostPerHour: 0.26
  },
  {
    id: '3',
    name: 'Bush 7K Air Conditioner',
    model: '458/6472',
    btu: 7000,
    image: 'https://media.4rgos.it/i/Argos/4586472_R_Z001A?w=1500&h=880&qlt=70&fmt=webp',
    dailyRate: 31.99,
    weeklyRate: 199.99,
    features: [
      'Castors for easy movement',
      '2 speed settings',
      '24 -hour timer'
    ],
    specifications: {
      dimensions: '634, 329, 318mm',
      weight: '36kg',
      powerConsumption: '790W',
      coolingCapacity: '7000 BTU/hr',
      noiseLevel: '62db'
    },
    runningCostPerHour: 0.21
  },
  {
    id: '4',
    name: 'HOMCOM Portable Air Conditioner',
    model: '823-010V70',
    btu: 5000,
    image: 'https://m.media-amazon.com/images/I/71NCljN97RL._AC_SX679_.jpg',
    dailyRate: 17.99,
    weeklyRate: 99.99,
    features: [
      'Remote Controlled', 
      '24 Hour Timer', 
      'Wheels',
      'Dehumidifier', 
      'Fast Cooling'
    ],
    specifications: {
      dimensions: '325 x 305 x 678 mm',
      weight: '19kg',
      powerConsumption: '560W',
      coolingCapacity: '5000 BTU/hr',
      noiseLevel: '52dB'
    },
    runningCostPerHour: 0.14
  },
  {
    id: '5',
    name: 'EUHOMY Air conditioning Uniy',
    model: 'OL-A016FF26N2',
    btu: 9000,
    image: 'https://m.media-amazon.com/images/I/71HItfHEthL._AC_SX679_.jpg',
    dailyRate: 29.99,
    weeklyRate: 199.99,
    features: [
      'Fast Cooling', 
      'Sleep Mode', 
      'Cooling Fan', 
      'Adjustable Speed', 
      'Removable Washable Filter', 
      'Digital Display', 
      'Child Lock'
    ],
    specifications: {
      dimensions: '303 x 290 x 673 mm',
      weight: '23kg',
      powerConsumption: '1000W',
      coolingCapacity: '9000 BTU/hr',
      noiseLevel: '49db'
    },
    runningCostPerHour: 0.27
  }
];

export const btuOptions = [5000, 7000, 9000];