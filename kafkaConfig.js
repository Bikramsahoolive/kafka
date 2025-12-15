const { Kafka } = require("kafkajs");

const kafkaIns = new Kafka({
  clientId: "topic-admin",
  brokers: ["host.docker.internal:9092"]
});

module.exports = {kafkaIns};