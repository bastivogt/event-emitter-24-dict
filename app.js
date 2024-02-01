"use strict";

import { Counter } from "./Counter.js";
import { Counter2 } from "./Counter2.js";

import { CounterEvent } from "./CounterEvent.js";
import { EventEmitter } from "./sevo/events/EventEmitter.js";

const counter = new Counter();

counter.on(CounterEvent.COUNTER_STARTED, (event) => {
  console.log(`${event.type} count: ${event.count}`);
  console.log(event);
});

counter.on(CounterEvent.COUNTER_UPDATED, (event) => {
  console.log(`${event.type} count: ${event.count}`);
  console.log(event);
});

counter.on(CounterEvent.COUNTER_FINISHED, (event) => {
  console.log(`${event.type} count: ${event.count}`);
  console.log(event);
});

//counter.off(CounterEvent.COUNTER_UPDATED);

counter.run();

console.log("counter", counter);

console.log("-----------------------------------------------------");

const counter2 = new Counter2(10, 20, 2);

counter2.eventEmitter.on(CounterEvent.COUNTER_STARTED, (event) => {
  console.log(`${event.type} count: ${event.count}`);
  console.log(event);
});

counter2.eventEmitter.on(CounterEvent.COUNTER_UPDATED, (event) => {
  console.log(`${event.type} count: ${event.count}`);
  console.log(event);
});

counter2.eventEmitter.on(CounterEvent.COUNTER_FINISHED, (event) => {
  console.log(`${event.type} count: ${event.count}`);
  console.log(event);
});

counter2.eventEmitter.off(CounterEvent.COUNTER_UPDATED);

counter2.run();
console.log("counter2", counter2);

console.log("new EventEmitter", new EventEmitter());
