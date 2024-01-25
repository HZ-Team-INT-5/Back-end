const axios = require('axios');

describe('Add Event (POST Request)', () => {
  it('add a new event to the database', async () => {
    const newEvent = {
      title: 'New Event',
      start: '2024-02-01T12:00:00Z',
    };

    const response = await axios.post('http://localhost:3002/events', newEvent);

    //Check the response status code is 201
    expect(response.status).toBe(201);

    //Verify that the event is added to the database by fetching and comparing.
    const fetchedEventResponse = await axios.get(`http://localhost:3002/events/${responseQ.data.id}`);

    //Check if the fetched event matches the added event
    expect(fetchedEventResponse.data).toEqual(newEvent);
  });
});