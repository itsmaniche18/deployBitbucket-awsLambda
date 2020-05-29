const submit = require('../api/candidate');

test('status code should be 200', async () => {
    const data = (await submit.submit()).statusCode;
    expect(data).toBe(200);
  });