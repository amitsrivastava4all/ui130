// Define the TestSuite
describe("Add Suite",function(){
    // Define the TestCase
    it("add two numbers",function(){
        var firstNumber = 10;
        var secondNumber = 20;
        var expectedResult = 30;
        var result = add(firstNumber,secondNumber);
        expect(expectedResult).toBe(result);
    });
    it("add two string in numbers form",function(){
        var firstNumber = "100";
        var secondNumber = "20";
        var expectedResult = 30;
        var result = add(firstNumber,secondNumber);
        expect(expectedResult).toBe(result);
    });
    it("add n numbers ",function(){
        var result =add(1,2,3,4,5,6,7,8,9,10);
        expect(55).toBe(result);
    });
    it("add n string form numbers ",function(){
        var result =add("1","2","3",4,5,6,7,8,9,10);
        expect(55).toBe(result);
    });
    it("add two string ",function(){
        var result =add("Hello","Bye");
        expect(0).toBe(result);
    });
    it("add two array numbers ",function(){
        var result =add([1,2,3],[4,5,6]);
        expect(21).toBe(result);
    });
    it("add two array string and  numbers ",function(){
        var result =add(["1",2,"3"],[4,"5","Hello"]);
        expect(15).toBe(result);
    });
    it("add n functions ",function(){
        function firstnumber(){
            return 1000;
        }
        function secondNumber(){
            return 2000;
        }
        var result =add(firstnumber,secondNumber,function(){
            return 3000;
        });
        expect(6000).toBe(result);
    });
    it("add all mix ",function(){
        var result =add("Hello","Bye",[1,2],function(){ return 1000},[4,5],2,3);
        expect(1017).toBe(result);
    });
})