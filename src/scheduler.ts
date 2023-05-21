import CronJob from "node-cron";
import bot from "./bot";
import Day from "./day";
import { getDay } from "./helpers";

const dayModel = new Day();

export const initScheduledJobs = () => {
  const scheduledJobFunction = CronJob.schedule("0 50 22 * * 1-5", async () => {
    const dayData = await dayModel.getDayByNumber(getDay());
    
    const header = `День ${getDay()}.\n`
    
    let gameMessage = "";

    if (dayData?.is_game_launched) {
      gameMessage = `🎮❌ Игра была запущена, название игры: ${dayData.game_name}. Тем не менее, игра была сразу выключена, <a href="https://github.com/sabadoryo/isGameLaunchedDetector/blob/588496c0f0ccad5c28cfa54ce35d8e5a456d31fb/index.js#LL31C1-L32C1">пруфы.</a>`
    } else {
      gameMessage = "🎮✅ Игры не были запущены."
    }

    let gymMessage = ""

    if (dayData?.is_gym_attended) {
      gymMessage = "🏋️‍♂️✅ Сегодня был поход в зал."
    } else {
      gymMessage = "🏋️‍♂️❌ Сегодня не было похода в зал."
    }

    let officeMessage = "";

    if(dayData?.is_office_attended) {
      officeMessage = "🏢✅ Сегодня он работал с офиса."
    }else {
      officeMessage = "🏢❌ Сегодня он работал из дома."
    }

    let sleepMessage = "";
  
    if (dayData?.sleep_end && dayData.sleep_start) {
      const hours = Math.ceil((dayData.sleep_end.valueOf() - dayData.sleep_start.valueOf()) / 36e5);

      if (hours === 8) {
        sleepMessage = `💤✅ Длительность сна идеальная: ${hours} часов`
      } else {
        sleepMessage = `💤❌ Длительность сна аномальная: ${hours} часов`
      }
    } else {
      sleepMessage = "💤❓ Нету данных."
    }

    let fapMessage = "💦🍆 Нету данных."

    const message = `${header}\n${gameMessage}\n${gymMessage}\n${officeMessage}\n${sleepMessage}\n${fapMessage}`;

    console.log(message);
    // 424232165
    // -1001800091038
    await bot.sendMessage("-1001800091038", message, {
        parse_mode: "HTML"
    });

  });
  
  scheduledJobFunction.start();
}