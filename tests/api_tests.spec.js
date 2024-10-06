const { test, expect } = require('@playwright/test');

test('API GET Request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet');
    console.log(await response.json());

});
test('API post request', async({ request }) => {
    const response = await request.post('https://reqres.in/api/users/', {
        data:
        {
            "name": "Sumithra",
            "job": "QA"
        }

    })
    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('Sumithra');
    console.log(await response.json());


})

test('API PUT request', async({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data:
        {
            "name": "Sumithra",
            "job": "QA"
        }

    })
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Sumithra');
    console.log(await response.json());


})

test('API DELETE Request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204);

});