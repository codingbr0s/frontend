import {Component, Vue, Watch} from 'vue-property-decorator';
import {namespace, State} from 'vuex-class';

const TransactionModule = namespace('transaction');
const CategoryModule = namespace('category');

@Component({
  components: {},
})
export default class App extends Vue {
  @State('showProgress') public stateShowProgress: any;
  @TransactionModule.Action('resetPayment') public actionResetPayment: any;
  @CategoryModule.Action('resetExpensesIncome') public actionResetExpensesIncome: any;

  get showProgress(): boolean {
    return this.stateShowProgress;
  }

  public isIndexPage() {
    if (this.$route.path === '/') {
      return true;
    }
    return false;
  }

  public goBackToIndex() {
    this.$router.push({name: 'main'});
  }

  public showMenu() {
    console.log('implement me');
  }

  public getCurrentPageTitel() {
    if (this.$route.path === '/') {
      return 'apoBanking';
    } else if (this.$route.path === '/upload') {
      return 'Rechnung Scannen';
    } else if (this.$route.path === '/transaction') {
      return 'Überweisung';
    } else if (this.$route.path === '/transaction-confirm') {
      return 'Wie soll es weiter gehen';
    } else if (this.$route.path === '/finance') {
      return 'Finanzübersicht';
    } else if (this.$route.path === '/finance-income') {
      return 'Ihre Einnahmen';
    } else if (this.$route.path === '/finance-expenses') {
      return 'Ihre Ausgaben';
    }
  }

  @Watch('$route')
  private onRouteChange(to: any, from: any) {
    if (from.name === 'transaction') {
      this.actionResetPayment();
    }
    if (from.name === 'finance' || from.name === 'financeExpenses' || from.name === 'financeIncome') {
      this.actionResetExpensesIncome();
    }
  }

}
