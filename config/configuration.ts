export default () => ({
  NATS_SERVER: process.env['NATS_SERVER'] || 'nats://localhost:4222',
  MONGODB_SERVER: process.env.MONOGDB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  SERVER_URL: process.env.SERVER_URL || 'http://localhost:3000/api/'
})
