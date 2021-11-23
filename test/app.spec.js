const assert = require('assert');
const { add }= require('../assets/app');
const { expect } =require('chai');
const { sub }= require('../assets/app');

describe(' add function ', () => {
    it("the add fucntion should add two numbers",()=> {
        const res= add(5,1);
        expect(res).to.be.eql(6);

    });

    it("the add fucntion should add two decimal numbers",()=> {
        const res= add(5.6,6.2);
        expect(res).to.be.eql(11.8);

    });

    it("the add fucntion should be able to handle 1 num",()=> {
        const res= add(5);
        expect(res).to.be.eql(5);

    });

    it("the add fucntion should be able to handle 0 num",()=> {
        const res= add();
        expect(res).to.be.eql(0);

    });

    it("the add fucntion should be able to handle if any num is not numerical",()=> {
        const res= add();
        expect(res).to.be.eql(0);

    });
    

});


describe(' sub function ', () => {
    it("the sub fucntion should subtract two numbers",()=> {
        const res1= sub(5,11);
        expect(res1).to.be.eql(-6);

    });

    it("the sub fucntion should be able to handle 1 num",()=> {
        const res= add(5);
        expect(res).to.be.eql(5);

    });

});

