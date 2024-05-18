import express from 'express';

const router = express.Router();

const dummyData = {
  team1: {
    name: "chicago",
    totalBet: 2933833,
    yourBet: 9283,
    data: [10, 20, 5, 15, 7],
    leaderBoard: [
      { name: "John", bet: 10000 },
      { name: "Doe", bet: 5000 },
    ],
  },
  team2: {
    name: "new york",
    totalBet: 2933833,
    yourBet: 9283,
    data: [20, 10, 5, 15, 7],
    leaderBoard: [
      { name: "Joshn", bet: 10600 },
      { name: "Does", bet: 5600 },
    ],
  },
};

router.get('/dummy', (req, res) => {
  res.json(dummyData);
});

router.post('/dummy', (req, res) => {
  const { data } = req.body;
  console.log('Received dummy data:', data);
  res.json({ message: 'Dummy data received', receivedData: data });
});

export default router;