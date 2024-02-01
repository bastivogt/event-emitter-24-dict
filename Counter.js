"use strict";

import { EventEmitter } from "./sevo/events/EventEmitter.js";
import { CounterEvent } from "./CounterEvent.js";

export class Counter extends EventEmitter {
  _start;
  _end;
  _step;
  _count;

  get count() {
    return this._count;
  }

  constructor(start = 0, end = 10, step = 1) {
    super();
    this._start = start;
    this._end = end;
    this._step = step;
    this._count = this._start;
  }

  run() {
    this.emit(
      new CounterEvent(CounterEvent.COUNTER_STARTED, this, this._count)
    );
    for (; this._count < this._end; this._count += this._step) {
      this.emit(
        new CounterEvent(CounterEvent.COUNTER_UPDATED, this, this._count)
      );
    }
    this.emit(
      new CounterEvent(CounterEvent.COUNTER_FINISHED, this, this._count)
    );
  }
}
