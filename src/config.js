module.exports = {
  // Server values
  port: process.env.PORT || 3000,
  host: process.env.VCAP_APP_HOST || 'localhost',
  simulate: {
    size: {
      small: 10,
      medium: 75,
      large: 1000,
    },
    days: [1, 2, 1, 1, 3, 1, 1, 1, 2], // days interval between status
    ReceivedinExcess_rate: 6, // in  X %
    LostParcel_rate: 3, // over 100 %
    SeizedorReturned_rate: 4, // over 100 %
    NoPreDes_rate: 6, // over 100 %
  },
  users: {
    username: ['US', 'GB', 'CN', 'CA', 'FR', 'DE', 'JP', 'AUS'],
    password: 'acit@1234',
  },
};
