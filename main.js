
const {kafkaIns} = require("./kafkaConfig");
const admin = kafkaIns.admin();

async function listTopics() {
  await admin.connect();

  // Fetch the topics
  const topics = await admin.listTopics();

  console.log('Kafka Topics:', topics);

  await admin.disconnect();
}

listTopics().catch(console.error);