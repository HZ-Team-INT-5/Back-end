function getTimeDif(date) {

    let returnString = '';
    const now = new Date();
    const difference = now - date;

    if (!(date instanceof Date) || isNaN(date)) {
        throw new TypeError('Invalid input: date must be a valid Date object.');
    }

    if (date >= now) {
        throw new Error('Invalid input: date must be a time in the past.');
    }

    const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const millisecondsInHour = 60 * 60 * 1000;
    const millisecondsInMinute = 60 * 1000;
    const millisecondsInSeconds = 1000;

    var yearDiff = now.getFullYear() - date.getFullYear();
    var monthDiff = now.getMonth() - date.getMonth();
    const dayDiff = now.getDate() - date.getDate();

    if (dayDiff < 0) { //if date day of month > today's day of month, add 1 month to the dif
        monthDiff -= 1;
    }
    if (monthDiff < 0 && yearDiff >= 1) { //if date's month is ahead of current month but in a previous year, don't count month as negative but count backwards
        monthDiff += 12;
        yearDiff -= 1;
    }
    if (yearDiff > 0 && monthDiff < 12 && dayDiff < 0) { // if year has not crossed over yet, don't count as full year yet
        yearDiff -= 1;
    }

    const weeksDifference = Math.floor(difference / millisecondsInWeek)
    const daysDifference = Math.floor(difference / millisecondsInDay);
    const hoursDifference = Math.floor(difference / millisecondsInHour);
    const minutesDifference = Math.floor(difference / millisecondsInMinute);
    const secondsDifference = Math.floor(difference / millisecondsInSeconds);




    if (difference < millisecondsInMinute) { // if dif < 1min
        returnString = `${secondsDifference} second`; // show dif in seconds
    } else if (difference < millisecondsInHour) { // else if dif < 1 hr
        returnString = `${minutesDifference} minute`; // show dif in min
    } else if (difference < millisecondsInDay) { // else if dif < 1 day
        returnString = `${hoursDifference} hour`; // show dif in hours
    } else if (difference < millisecondsInWeek) { // else if dif < 1 week
        returnString = `${daysDifference} day`; // show dif in days
    } else if (monthDiff < 1 && yearDiff == 0) { // else if dif < 1 month
        returnString = `${weeksDifference} week`; // show dif in weeks
    } else if (yearDiff < 1) { // else if dif < 1 year
        returnString = `${monthDiff} month` // show dif in months
    } else { // else
        returnString = `${yearDiff} year` // show dif in years
    }

    if (!returnString.startsWith('1 ')) {
        returnString += 's';
    }
    returnString += ' ago';

    return returnString;
}

module.exports = { getTimeDif };