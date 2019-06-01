import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {Transaction} from '../../shared/model/transaction';
import {transaction} from '../../shared/store/modules/transaction';
import {namespace} from 'vuex-class';
import {VMoney} from 'v-money';

const TransactionModule = namespace('transaction');

@Component({
  components: {},
  directives: {money: VMoney},
})
export default class TransactionPage extends Vue {

  get transaction(): Transaction {
    return this.stateTransaction;
  }
  @TransactionModule.State('transaction') public stateTransaction!: any;
  @TransactionModule.Action('setTransaction') public actionSetTransaction!: any;
  @TransactionModule.Action('createTransaction') public actionCreateTransaction!: any;

  public cards = [
    {title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
    {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
  ];

  @Prop(Object)
  private transactionInput?: Transaction;

  private money: any = {
    decimal: ',',
    thousands: '.',
    prefix: '',
    suffix: ' €',
    precision: 2,
    masked: false /* doesn't work with directive */};

  public routeTransactionConfirm() {
    this.actionCreateTransaction(this.stateTransaction).then((result: any) => {
      this.$router.push({name: 'transactionConfirm'});
    }).catch((error: any) => {
      console.log('Es gab einen Fehler beim Überweisen. Bitte versuchen Sie es erneut');
    });
  }

  private mounted() {
    if (this.transactionInput !== undefined && this.transactionInput !== null) {
      this.actionSetTransaction(this.transactionInput);
    }
  }
}
