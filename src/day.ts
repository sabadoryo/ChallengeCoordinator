import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class Day {

    async upsertDay(day: number, update: Object) {
        return prisma.day.upsert({
            create: {
                created_at: new Date().toString(),
                day,
                ...update
            },
            update,
            where: {
                day
            }
        })
    }

    async getDayByNumber(day: number) {
        return prisma.day.findFirst({
            where: {
                day: day
            }
        })
    }
}

export default Day;