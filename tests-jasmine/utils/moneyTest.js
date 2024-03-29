import {formatCurrency} from "../../scripts/utils/money.js";

describe('test suite:formatcurrency',()=>{
    it ('convery cents into dollars', ()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with zero',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    describe('rounding',()=>{
        it('rounds down nearest cent',()=>{
            expect(formatCurrency(2000.4)).toEqual('20.00');
        });
        it('rounds upto nearest cent',()=>{
            expect(formatCurrency(2000.5)).toEqual('20.01');
        });
        it('works with negative numbers', () => {
            expect(formatCurrency(-500)).toEqual('-5.00');
        });
    })
});