export const getDay = function() {
    const curDate = new Date();
    const startDate = new Date(process.env.START_DATE ?? "05 18 2023");
    const diffTime = Math.abs(curDate.getMilliseconds() - startDate.getMilliseconds());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}