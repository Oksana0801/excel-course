import {DomListener} from '@.core/DomListener';

export class ExcelComponent extends DomListener {
  // возвращает шаблон компонента
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];

    this.prepare();
  }
  // настраиваем наш компонент до инит
  prepare() {}

  // возвращает шаблон компонента
  toHTML() {
    return '';
  }

  // инициализируем комронент, добавляем DOM слушателей
  init() {
    this.initDOMListeners()
  }

  // Уведомляем слушателей про event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub);
  }
  // Удаляем комронент, чистим слушателя
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub());
  }
}
