import express from 'express';
import dotenv from 'dotenv';
import Day from './day';
import { getDay } from './helpers';
import { initScheduledJobs } from './scheduler';

const app = express();
const port = 5000

dotenv.config();

const dayModel = new Day();

const CHANNEL_ID = "-1001800091038";

initScheduledJobs();

app.get('/', (req, res) => {
    console.log(req);
    res.send('CHALLENGER COORDINATOR')
})

app.post('/gym-attended', async (req, res) => {
    await dayModel.upsertDay(getDay(), {
        is_gym_attended: true,
        gym_attended_at: new Date(),

    })

    res.send('GYM ATTENDED')
})

app.post('/office-attended', async (req, res) => {
    await dayModel.upsertDay(getDay(), {
        is_office_attended: true,
        office_attended_at: new Date(),
        
    })
    res.send('ACCEPTED')
})

app.post('/game-was-opened', async (req, res) => {
    await dayModel.upsertDay(getDay(), {
        is_game_launched: true,
        game_name: req.query.game,
        
    })
    res.send('ACCEPTED');
})

app.post("/wake-up", async (req, res) => {
    let day = getDay() - 1;

    if (day == 0) {
        day = 1;
    }

    await dayModel.upsertDay(getDay(), {
        sleep_end: new Date(),
    })
    res.send('ACCEPTED');
})

app.post("/sleep-down", async (req, res) => {
    console.log(getDay());
    await dayModel.upsertDay(getDay(), {
        sleep_start: new Date(),
    })
    res.send('ACCEPTED');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}`)
})