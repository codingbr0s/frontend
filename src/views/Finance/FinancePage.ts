import {Component, Vue} from 'vue-property-decorator';
import {namespace} from 'vuex-class';

const CategoryModule = namespace('category');
const TransactionModule = namespace('transaction');

@Component({
  components: {},
  directives: {},
})
export default class FinancePage extends Vue {
  @CategoryModule.Action('getExpensesSum') public actionGetExpensesSum!: any;
  @CategoryModule.Action('setExpensesSum') public actionSetExpensesSum!: any;
  @CategoryModule.State('expensesSum') public stateExpensesSum!: any;
  @TransactionModule.Action('getNewTransaction') public actionGetNewTransactions!: any;
  @TransactionModule.Action('setNewTransactions') public actionSetNewTransactions!: any;
  @TransactionModule.State('newTransactions') public stateNewTransactions!: any;

  get newTransactions(): any {
    return this.stateNewTransactions;
  }

  get expensesSum(): string {
    return this.stateExpensesSum;
  }

  public mounted() {
    this.actionGetExpensesSum().then((result: any) => {
      this.actionSetExpensesSum(result.data);
    });
    this.actionGetNewTransactions().then((result: any) => {
      this.actionSetNewTransactions(result.data);
    });
  }

  public routeIncome() {
    this.$router.push({name: 'financeIncome'});
  }

  public routeExpenses() {
    this.$router.push({name: 'financeExpenses'});
  }
}
