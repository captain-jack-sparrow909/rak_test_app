import { ApiRequest } from "./Api";

//write a unit test for the Api service
describe('ApiRequest', () => {
    test('should return true after 2 seconds', async () => {
        const result = await ApiRequest();
        expect(result).toBe(true);
    });
    });
