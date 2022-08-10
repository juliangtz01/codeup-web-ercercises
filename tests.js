// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });

});


// Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("If input equals Alex, then we return Hello, Alex! else return Hello, Jane!", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
});


// Unit tests for the isFive function
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when 5 is passed', function() {
        expect(isFive(5)).toBe(true);
    });
});


// Unit tests for the isEven function
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return boolean when called', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when 2 is passed', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when -4 is passed', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when 3 is passed', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when banana is passed', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when "8" is passed', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return true when Infinity is passed', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when a boolean is passed', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when called without an argument', function() {
        expect(isEven()).toBe(false);
    });
});