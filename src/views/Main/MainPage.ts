import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {},
})
export default class MainPage extends Vue {

  private testLog() {
    console.log('Test');
  }

}
