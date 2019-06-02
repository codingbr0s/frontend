import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {namespace} from 'vuex-class';

const CategoryModule = namespace('category');

@Component({
  components: {},
})
export default class FinanceExpensesPage extends Vue {
  @CategoryModule.Action('setCategories') public actionSetCategories!: any;
  @CategoryModule.Action('getExpenses') public actionGetExpenses!: any;
  @CategoryModule.State('categories') public stateCategories!: any;

  public mounted() {
    this.actionGetExpenses().then((result: any) => {
      this.actionSetCategories(result.data);
    });
  }

  get categories(): any[] {
    return this.stateCategories;
  }

  public routeIncome() {
    this.$router.push({name: 'financeIncome'});
  }

  public routeTransactionOverview(catid: any) {
    this.$router.push({name: 'transactionOverview', params: {subCategoryId: catid}});
  }
}
