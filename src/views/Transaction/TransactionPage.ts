import {Component, Prop, Vue} from 'vue-property-decorator';
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
  @InvoiceModule.State('invoice') public stateInvoice!: Invoice;

  @Prop(Object)
  private invoiceInput?: Invoice;

  private money: any = {
    decimal: ',',
    thousands: '.',
    prefix: '',
    suffix: ' €',
    precision: 2,
    masked: false /* doesn't work with directive */};

  get invoice(): Invoice {
    return this.stateInvoice;
  }

  private mounted() {
    if (this.invoiceInput !== undefined && this.invoiceInput !== null) {
      this.stateInvoice = this.invoiceInput!;
    }
  }

}
