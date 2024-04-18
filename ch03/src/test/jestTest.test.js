import jestTest from "./jestTest";

describe('jestTest.jsx', () => {
    it('renders without crashing', () => {
        expect(jestTest(3, 2)).toBe(5);
    })
})