const { kafkaIns } = require('./kafkaConfig');



async function deleteTopic() {
  const admin = kafkaIns.admin();

  try {
    await admin.connect();

    await admin.deleteTopics({
      topics: ['mytopic'],
      timeout: 5000,
    });

    console.log('Topic deleted successfully');
  } catch (err) {
    console.error('Error deleting topic:', err);
  } finally {
    await admin.disconnect();
  }
}

deleteTopic();
