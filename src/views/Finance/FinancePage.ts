import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {namespace} from 'vuex-class';

const CategoryModule = namespace('category');

@Component({
  components: {},
  directives: {},
})
export default class FinancePage extends Vue {
  @CategoryModule.Action('getExpenses') public actionGetExpenses!: any;
  @CategoryModule.Action('getIncome') public actionGetIncome!: any;
  @CategoryModule.State('expenses') public stateExpenses!: any;
  @CategoryModule.State('income') public stateIncome!: any;

  get expenses(): any {
    return this.stateExpenses;
  }
  get income(): any {
    return this.stateIncome;
  }

  public mounted() {
    this.actionGetExpenses();
    this.actionGetIncome();
  }

  public routeIncome() {
    this.$router.push({name: 'financeIncome'});
  }
}
