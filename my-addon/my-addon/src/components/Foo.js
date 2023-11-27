import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class Foo extends Component {
  @service router;

  @action
  bar() {
    this.router.transitionTo('something');
  }
}
