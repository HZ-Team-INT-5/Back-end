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
    const oneWeekAgo = new Date();
    oneWeekAgo.setTime(oneWeekAgo.getTime() - ((7 * 24 * 60 * 60 * 1000) + 1000));
    expect(getTimeDif(oneWeekAgo)).toBe('1 week ago');
});