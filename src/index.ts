import express from 'express';
import dotenv from 'dotenv';
import Day from './day';
import { getDay } from './helpers';
import { initScheduledJobs } from './scheduler';

process.env.TZ = 'Asia/Almaty';

const app = express();
const port = process.env.PORT ?? 5000

dotenv.config();

const dayModel = new Day();

const CHANNEL_ID = "-1001800091038";

initScheduledJobs();

app.get('/', (req, res) => {
    res.send('CHALLENGER COORDINATOR')
})

app.post('/gym-attended', async (req, res) => {
    await dayModel.upsertDay(getDay(), {
        is_gym_attended: true,
        gym_attended_at: new Date(),

    })

    res.send('GYM ATTENDED')
})

app.post('/gym-left', async (req, res) => {
    await dayModel.upsertDay(getDay(), {
        is_gym_attended: true,
        gym_left_at: new Date(),

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

app.post('/office-left', async (req, res) => {
    await dayModel.upsertDay(getDay(), {
        is_office_attended: true,
        office_left_at: new Date(),
        
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

app.post('/game-was-not-found', async (req, res) => {
    await dayModel.upsertDay(getDay(), {
        is_game_launched: false,
        game_name: "",
        
    })
    res.send('ACCEPTED');
})

app.post("/wake-up", async (req, res) => {
    await dayModel.upsertDay(getDay(), {
        sleep_end: new Date(),
    })
    res.send('ACCEPTED');
})

app.post("/sleep-down", async (req, res) => {
    await dayModel.upsertDay(getDay() + 1, {
        sleep_start: new Date(),
    })
    res.send('ACCEPTED');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT ?? port}`)
})