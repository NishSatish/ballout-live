export default () => ({
  NATS_SERVER: process.env['NATS_SERVER'] || 'nats://localhost:4222'
})
