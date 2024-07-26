const config = require('../config');

test('Should return status 200 code', async () => {
    let actualStatus = null;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE'
        });
        const data = await response.json();
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});

test('Response body should contain true', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE'
		});
		actualResponseBody = await response.json();
        console.log(actualResponseBody);
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok).toBe(true);
});