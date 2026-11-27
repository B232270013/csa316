const {test}=require('node:test');
const assert=require('node:assert/strict');
const {validateEvent,createEvent}=require('../src/validation');
const now=Date.parse('2026-01-01');
test('valid event',()=>{const input={title:'Meeting',date:'2030-01-01'};const result=validateEvent(input,now);assert.equal(result.title,'Meeting');});
test('normalizes title and date',()=>{const result=validateEvent({title:'  Picnic  ',date:'2030-01-01'},now);assert.deepEqual(result,{title:'Picnic',description:'',date:'2030-01-01T00:00:00.000Z'});});
test('empty title',()=>assert.throws(()=>validateEvent({title:' ',date:'2030-01-01'},now),/Invalid title/));
test('past date',()=>assert.throws(()=>validateEvent({title:'Meeting',date:'2020-01-01'},now),/Invalid date/));
test('mock repository',async()=>{const calls=[];const repo={async create(e){calls.push(e);return {id:'mock',...e};}};const result=await createEvent(repo,{title:'Meeting',date:'2030-01-01'},now);assert.equal(result.id,'mock');assert.equal(calls.length,1);assert.equal(calls[0].title,'Meeting');});
