export function generateCronExpression() {
    function getRandomOrWildcard(min: number, max: number) {
        if (Math.random() < 0.7) {
            return '*';
        } else {
            return getRandomIntInclusive(min, max)
        }
    }
    const minute = getRandomOrWildcard(0, 59);
    const hour = getRandomOrWildcard(0, 23);
    const dayOfMonth = getRandomOrWildcard(1, 31);
    const month = getRandomOrWildcard(1, 12);
    const dayOfWeek = getRandomOrWildcard(0, 6);

    return `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`
}

function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}