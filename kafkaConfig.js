const { Kafka } = require("kafkajs");

const kafkaIns = new Kafka({
  clientId: "topic-admin",
  brokers: ["localhost:9092","localhost:9094"] // if node inside docker ["host.docker.internal:9092","host.docker.internal:9094"]
});

module.exports = {kafkaIns};