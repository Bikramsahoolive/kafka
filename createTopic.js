const {kafkaIns} = require("./kafkaConfig");

const admin = kafkaIns.admin();

async function createTopic() {
  await admin.connect();
  
  await admin.createTopics({
    topics: [
      {
        topic: "mytopic",
        numPartitions: 3,
        replicationFactor: 1
      }
    ],
  });

  console.log("Topic created");
  await admin.disconnect();
}

createTopic();
