export function getMinutesBetweenDates(pastDate: Date, currentDate: Date) {
    return Math.round(((currentDate.valueOf() - pastDate.valueOf()) / 1000) / 60);
}

export function getSecondsBetweenDates(pastDate: Date, currentDate: Date) {
    return Math.abs((currentDate.getTime() - pastDate.getTime()) / 1000);
}

export function getHoursBetweenDates(pastDate: Date, currentDate: Date) {
    return Math.abs(currentDate.valueOf() - pastDate.valueOf()) / 36e5;
}

export function getMilisecondsBetweenDates(pastDate: Date, currentDate: Date) {
    return currentDate.getTime() - pastDate.getTime();
}
