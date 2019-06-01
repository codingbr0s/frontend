import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {Invoice} from '../../shared/model/invoice';
import {invoice} from '../../shared/store/modules/invoice';
import {namespace} from 'vuex-class';
import {VMoney} from 'v-money';

const InvoiceModule = namespace('invoice');

@Component({
  components: {},
  directives: {money: VMoney},
})
export default class TransactionPage extends Vue {

  get invoice(): Invoice {
    return this.stateInvoice;
  }
  @InvoiceModule.State('invoice') public stateInvoice!: any;
  @InvoiceModule.Action('setInvoice') public actionSetInvoice!: any;
  @InvoiceModule.Action('createInvoice') public actionCreateInvoice!: any;

  public cards = [
    {title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
    {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
  ];

  @Prop(Object)
  private invoiceInput?: Invoice;

  private money: any = {
    decimal: ',',
    thousands: '.',
    prefix: '',
    suffix: ' €',
    precision: 2,
    masked: false /* doesn't work with directive */};

  public routeTransactionConfirm() {
    this.actionCreateInvoice(this.stateInvoice).then((result: any) => {
      this.$router.push({name: 'transactionConfirm'});
    }).catch((error: any) => {
      console.log('Es gab einen Fehler beim Überweisen. Bitte versuchen Sie es erneut');
    });
  }

  private mounted() {
    if (this.invoiceInput !== undefined && this.invoiceInput !== null) {
      this.actionSetInvoice(this.invoiceInput);
    }
  }
}
