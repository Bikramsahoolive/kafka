const {kafkaIns} = require("../kafkaConfig");


// Create a consumer
const consumer = kafkaIns.consumer({ groupId: 'other-group' });

async function consumeMessages() {
  try {
    // Connect the consumer
    await consumer.connect();
    console.log('Consumer connected');

    // Subscribe to topic
    await consumer.subscribe({ topic: 'mytopic', fromBeginning: false });

    //--NOTE

    // OR there is a consumer.assign([{topic:"mytopic",partition:0}]); assign() in java that can help to asign a
    //  partition to the specific consumer.

    // fromBeginning: true : read messages from begaining if not offset, can not get offset data.
    //fromBeginning: false : can not sebscribe to previous messages, only read data produced after consumer joined.

    // Consume messages one by one
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message: ${message.value.toString()}`);
        // console.log(`Topic: ${topic}, Partition: ${partition}, Offset: ${message.offset}`);
      },
    });

  } catch (err) {
    console.error('Error consuming messages:', err);
  }
}

consumeMessages();