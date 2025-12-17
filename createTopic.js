const {kafkaIns} = require("./kafkaConfig");

const admin = kafkaIns.admin();

async function createTopic() {
  await admin.connect();
  
  await admin.createTopics({
    topics: [
      {
        topic: "mytopic",
        numPartitions: 2,  //partition for the topic
        replicationFactor: 2 //sync data with two brokers to avoid data loss
      }
    ],
  });

  console.log("Topic created");
  await admin.disconnect();
}

createTopic();
