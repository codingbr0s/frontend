import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {Payment} from '../../shared/model/payment';
import {namespace} from 'vuex-class';
import {VMoney} from 'v-money';

const TransactionModule = namespace('transaction');

@Component({
  components: {},
  directives: {money: VMoney},
})
export default class TransactionPage extends Vue {

  get payment(): Payment {
    return this.statePayment;
  }
  @TransactionModule.State('payment') public statePayment!: any;
  @TransactionModule.Action('setPayment') public actionSetPayment!: any;
  @TransactionModule.Action('createTransaction') public actionCreateTransaction!: any;

  public cards = [
    {title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
    {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
  ];

  private debugPayload: any = null;

  @Prop(Object)
  private paymentInput?: Payment;

  private money: any = {
    decimal: ',',
    thousands: '.',
    prefix: '',
    suffix: ' €',
    precision: 2,
    masked: false /* doesn't work with directive */};

  public routeTransactionConfirm() {
    this.actionCreateTransaction(this.statePayment).then((result: any) => {
      this.$router.push({name: 'transactionConfirm'});
    }).catch((error: any) => {
      console.log('Es gab einen Fehler beim Überweisen. Bitte versuchen Sie es erneut');
    });
  }

  private mounted() {
    if (this.paymentInput !== undefined && this.paymentInput !== null) {
      this.debugPayload = this.paymentInput;
      this.actionSetPayment(this.paymentInput);
    }
  }
}
