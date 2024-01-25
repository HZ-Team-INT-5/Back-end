const { getTimeDif } = require('./dateHelper');

test('1 millisecond ago', () => {
    const oneMilliSecondAgo = new Date();
    oneMilliSecondAgo.setTime(oneMilliSecondAgo.getTime() - (1));
    expect(getTimeDif(oneMilliSecondAgo)).toBe('0 seconds ago');
});

test('1 second ago', () => {
    const oneSecondAgo = new Date();
    oneSecondAgo.setTime(oneSecondAgo.getTime() - (1000));
    expect(getTimeDif(oneSecondAgo)).toBe('1 second ago');
});

test('59 seconds ago', () => {
    const fiftyNineSecondsAgo = new Date();
    fiftyNineSecondsAgo.setTime(fiftyNineSecondsAgo.getTime() - (59 * 1000));
    expect(getTimeDif(fiftyNineSecondsAgo)).toBe('59 seconds ago');
});

test('1 minute ago', () => {
    const oneMinuteAgo = new Date();
    oneMinuteAgo.setTime(oneMinuteAgo.getTime() - (60 * 1000));
    expect(getTimeDif(oneMinuteAgo)).toBe('1 minute ago');
});

test('1 minute ago + 1 millisecond', () => {
    const oneMinuteAgooneMilliSecondAgo = new Date();
    oneMinuteAgooneMilliSecondAgo.setTime(oneMinuteAgooneMilliSecondAgo.getTime() - ((60 * 1000) + 1));
    expect(getTimeDif(oneMinuteAgooneMilliSecondAgo)).toBe('1 minute ago');
});

test('59 minutes ago', () => {
    const fiftyNineMinutesAgo = new Date();
    fiftyNineMinutesAgo.setTime(fiftyNineMinutesAgo.getTime() - (59 * 60 * 1000));
    expect(getTimeDif(fiftyNineMinutesAgo)).toBe('59 minutes ago');
});

test('1 hour ago', () => {
    const oneHourAgo = new Date();
    oneHourAgo.setTime(oneHourAgo.getTime() - (60 * 60 * 1000));
    expect(getTimeDif(oneHourAgo)).toBe('1 hour ago');
});

test('1 hour ago + 1 millisecond', () => {
    const oneHourAgooneMilliSecondAgo = new Date();
    oneHourAgooneMilliSecondAgo.setTime(oneHourAgooneMilliSecondAgo.getTime() - ((60 * 60 * 1000) + 1));
    expect(getTimeDif(oneHourAgooneMilliSecondAgo)).toBe('1 hour ago');
});

test('23 hours ago', () => {
    const twentyThreeHoursAgo = new Date();
    twentyThreeHoursAgo.setTime(twentyThreeHoursAgo.getTime() - (23 * 60 * 60 * 1000));
    expect(getTimeDif(twentyThreeHoursAgo)).toBe('23 hours ago');
});

test('1 day ago', () => {
    const oneDayAgo = new Date();
    oneDayAgo.setTime(oneDayAgo.getTime() - (24 * 60 * 60 * 1000));
    expect(getTimeDif(oneDayAgo)).toBe('1 day ago');
});


test('1 day ago + 1 millisecond', () => {
    const oneDayoneMilliSecondAgo = new Date();
    oneDayoneMilliSecondAgo.setTime(oneDayoneMilliSecondAgo.getTime() - ((24 * 60 * 60 * 1000) + 1));
    expect(getTimeDif(oneDayoneMilliSecondAgo)).toBe('1 day ago');
});

test('6 days ago', () => {
    const sixDaysAgo = new Date();
    sixDaysAgo.setTime(sixDaysAgo.getTime() - (6 * 24 * 60 * 60 * 1000));
    expect(getTimeDif(sixDaysAgo)).toBe('6 days ago');
});

test('1 week ago', () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setTime(oneWeekAgo.getTime() - (7 * 24 * 60 * 60 * 1000));
    expect(getTimeDif(oneWeekAgo)).toBe('1 week ago');
});

test('1 week ago + 1 millisecond', () => {
    const oneWeekoneMilliSecondAgo = new Date();
    oneWeekoneMilliSecondAgo.setTime(oneWeekoneMilliSecondAgo.getTime() - ((7 * 24 * 60 * 60 * 1000) + 1));
    expect(getTimeDif(oneWeekoneMilliSecondAgo)).toBe('1 week ago');
});

test('1 month ago', () => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    expect(getTimeDif(oneMonthAgo)).toBe('1 month ago');
});

test('1 month ago + 1 millisecond', () => {
    const oneMonthoneMilliSecondAgo = new Date();
    oneMonthoneMilliSecondAgo.setMonth(oneMonthoneMilliSecondAgo.getMonth() - 1);
    oneMonthoneMilliSecondAgo.setTime(oneMonthoneMilliSecondAgo.getTime() - (1));


    expect(getTimeDif(oneMonthoneMilliSecondAgo)).toBe('1 month ago');
});

test('11 months ago', () => {
    const elevenMonthsAgo = new Date();
    elevenMonthsAgo.setMonth(elevenMonthsAgo.getMonth() - 11);

    expect(getTimeDif(elevenMonthsAgo)).toBe('11 months ago');
});

test('1 year ago', () => {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    expect(getTimeDif(oneYearAgo)).toBe('1 year ago');
});

test('1 year ago + 1 millisecond', () => {
    const oneYearoneMilliSecondAgo = new Date();
    oneYearoneMilliSecondAgo.setFullYear(oneYearoneMilliSecondAgo.getFullYear() - 1);
    oneYearoneMilliSecondAgo.setTime(oneYearoneMilliSecondAgo.getTime() - (1));

    expect(getTimeDif(oneYearoneMilliSecondAgo)).toBe('1 year ago');
});

test('10 years ago', () => {
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

    expect(getTimeDif(tenYearsAgo)).toBe('10 years ago');
});

test('Invalid date object throws TypeError', () => {
    const invalidDate = new Date('invalidDateString');
    const t = () => {
        getTimeDif(invalidDate);
    };
    expect(t).toThrow(TypeError);
})

test('Non-date objects throw TypeError', () => {
    const notADate = '2023-12-31T23:59:59Z';
    const t = () => {
        getTimeDif(notADate);
    };
    expect(t).toThrow(TypeError);
})

test('Date in  future throws error', () => {
    const future = new Date();

    future.setTime(future.getTime() + (1));

    const t = () => {
        getTimeDif(future);
    };

    expect(t).toThrow(Error);
})