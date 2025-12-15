const {kafkaIns} = require("./kafkaConfig");


// Create a consumer
const consumer = kafkaIns.consumer({ groupId: 'test-group' });

async function consumeMessages() {
  try {
    // Connect the consumer
    await consumer.connect();
    console.log('Consumer connected');

    // Subscribe to topic
    await consumer.subscribe({ topic: 'mytopic', fromBeginning: true });

    // Consume messages one by one
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message: ${message.value.toString()}`);
        console.log(`Topic: ${topic}, Partition: ${partition}, Offset: ${message.offset}`);
      },
    });

  } catch (err) {
    console.error('Error consuming messages:', err);
  }
}

consumeMessages();