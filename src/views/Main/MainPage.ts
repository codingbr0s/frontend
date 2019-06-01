import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {},
})

export default class MainPage extends Vue {

  public routeUpload() {
    this.$router.push({name: 'upload'});
  }

  public routeTransaction() {
    this.$router.push({name: 'transaction'});
  }
  public routeFinance() {
    this.$router.push({name: 'finance'});
  }

  private testLog() {
    console.log('Test');
  }
}
