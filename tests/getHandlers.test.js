const config = require('../config');

test('Should return status 200 code', async () => {
    
    let actualStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        actualStatus = response.status;
    } catch (error) {
       console.error('Error Reached:', error);
    }
    expect(actualStatus).toBe(200);
});

test('Response body should contain "For picnic"', async () => {

    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        actualResponseBody = await response.json();
    } catch (error) {
       console.error('Error Reached:', error);
    }

    expect(actualResponseBody.name).toBe("For picnic");
});