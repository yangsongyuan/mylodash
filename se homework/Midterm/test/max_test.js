// import {max} from '../src/max.js'
import _ from '../src/mod.js'
import{assert}from "https://deno.land/std@0.63.0/testing/asserts.ts";

Deno.test("max test", () => {
    const x = _.max([4, 2, 8, 6]); // => 8
    console.log('x=', x)
    assert(x===8)
    const y = _.max([]);
    assert(y==undefined)
// => undefined
    // assert(x==3)
  })