// import {max} from '../src/divide.js'
import{assert}from "https://deno.land/std@0.63.0/testing/asserts.ts";

Deno.test("divide test", () => {
  const x=_.divide(6, 4);// => 1.5
  console.log('x=', x)
  assert(x===1.5)
})