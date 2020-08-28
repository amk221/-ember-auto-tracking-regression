import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MyComponent extends Component {
  @tracked value = 1;
  @tracked previousValue = null;

  constructor() {
    super(...arguments);

    this.previousValue = this.value;
    this.value = 2;
  }
}
