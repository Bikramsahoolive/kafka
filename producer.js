const { Kafka, Partitioners } = require('kafkajs');
const {kafkaIns} = require("./kafkaConfig");

const producer = kafkaIns.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
});

async function produceMessages() {

    // if(!message){
    //     res.status.send("message is required");
    //     return;
    // }
  try {
    // Connect producer
    await producer.connect();
    console.log('Producer connected');

    // Produce messages
    for (let i = 1; i <= 10; i++) {
      const message = {
        value: `this is message ${i}`,
      };

      await producer.send({
        topic: 'mytopic', // replace with your topic
        messages: [message],
      });

      console.log('Sent:', message.value);
    }

    // Disconnect producer
    await producer.disconnect();
    console.log('Producer disconnected');
  } catch (err) {
    console.error('Error producing messages:', err);
  }
}


produceMessages();
// module.exports = {produceMessages};