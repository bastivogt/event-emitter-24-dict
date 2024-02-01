"use strict";

import { Event } from "./Event.js";

export class EventEmitter {
  _listeners;

  constructor() {
    this._listeners = {};
  }

  has(type) {
    if (type in this._listeners) {
      return true;
    }
    return false;
  }

  on(type, listener) {
    if (!this.has(type)) {
      this._listeners[type] = listener;
      return true;
    }
    return false;
  }

  off(type) {
    if (this.has(type)) {
      delete this._listeners[type];
      return true;
    }
    return false;
  }

  emit(event) {
    if (this.has(event.type)) {
      this._listeners[event.type](event);
      return true;
    }
    return false;
  }
}
