import {Component, Prop, Vue} from 'vue-property-decorator';
import {Payment} from '../../shared/model/payment';

@Component({
  components: {},
  directives: {},
})
export default class TransactionConfirmPage extends Vue {

  @Prop(Object)
  private transactionInput?: any;

  public routeToUpload() {
    this.$router.push({name: 'upload'});
  }

  public routeToFinance() {
    this.$router.push({name: 'finance'});
  }
}
