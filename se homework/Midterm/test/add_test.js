// import {add} from '../src/add.js'
import _ from '../src/mod.js'
import{assert}from "https://deno.land/std@0.63.0/testing/asserts.ts";

Deno.test("add test", () => {
  const x=_.add(6, 4);// => 10
  console.log('x=', x)
  assert(x===10)
})