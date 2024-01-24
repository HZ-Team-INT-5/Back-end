const { getTimeDif } = require('./dateHelper');

test('1 second ago', () => {
    const oneSecondAgo = new Date();
    oneSecondAgo.setTime(oneSecondAgo.getTime() - (1 * 1000));
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

test('1 minute ago + 1 second', () => {
    const oneMinuteAgoOneSecondAgo = new Date();
    oneMinuteAgoOneSecondAgo.setTime(oneMinuteAgoOneSecondAgo.getTime() - (61 * 1000));
    expect(getTimeDif(oneMinuteAgoOneSecondAgo)).toBe('1 minute ago');
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

test('1 hour ago + 1 second', () => {
    const oneHourAgoOneSecondAgo = new Date();
    oneHourAgoOneSecondAgo.setTime(oneHourAgoOneSecondAgo.getTime() - ((60 * 60 * 1000) + 1000));
    expect(getTimeDif(oneHourAgoOneSecondAgo)).toBe('1 hour ago');
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


test('1 day ago + 1 second', () => {
    const oneDayOneSecondAgo = new Date();
    oneDayOneSecondAgo.setTime(oneDayOneSecondAgo.getTime() - ((24 * 60 * 60 * 1000) + 1000));
    expect(getTimeDif(oneDayOneSecondAgo)).toBe('1 day ago');
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

test('1 week ago + 1 second', () => {
    const oneWeekOneSecondAgo = new Date();
    oneWeekOneSecondAgo.setTime(oneWeekOneSecondAgo.getTime() - ((7 * 24 * 60 * 60 * 1000) + 1000));
    expect(getTimeDif(oneWeekOneSecondAgo)).toBe('1 week ago');
});

test('1 month ago', () => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    expect(getTimeDif(oneMonthAgo)).toBe('1 month ago');
});

test('1 month ago + 1 second', () => {
    const oneMonthOneSecondAgo = new Date();
    oneMonthOneSecondAgo.setMonth(oneMonthOneSecondAgo.getMonth() - 1);
    oneMonthOneSecondAgo.setTime(oneMonthOneSecondAgo.getTime() - (1 * 1000));


    expect(getTimeDif(oneMonthOneSecondAgo)).toBe('1 month ago');
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

test('1 year ago + 1 second', () => {
    const oneYearOneSecondAgo = new Date();
    oneYearOneSecondAgo.setFullYear(oneYearOneSecondAgo.getFullYear() - 1);
    oneYearOneSecondAgo.setTime(oneYearOneSecondAgo.getTime() - (1 * 1000));

    expect(getTimeDif(oneYearOneSecondAgo)).toBe('1 year ago');
});

test('10 years ago', () => {
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

    expect(getTimeDif(tenYearsAgo)).toBe('10 years ago');
});