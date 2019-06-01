import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {},
  directives: {},
})
export default class TransactionConfirmPage extends Vue {

  public routeToUpload() {
    this.$router.push({name: 'upload'});
  }

  public routeToOverview() {
    this.$router.push({name: 'overview'});
  }
}
