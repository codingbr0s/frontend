import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {namespace} from 'vuex-class';

const CategoryModule = namespace('category');

@Component({
  components: {},
})
export default class FinanceExpensesPage extends Vue {
  @CategoryModule.Action('getCategories') public actionGetCategories!: any;
  @CategoryModule.Action('setCategories') public actionSetCategories!: any;
  @CategoryModule.State('categories') public stateCategories!: any;

  public mounted() {
    this.actionGetCategories().then((result: any) => {
      this.actionSetCategories(result.data);
    });
  }

  get categories(): any[] {
    return this.stateCategories;
  }

  public routeIncome() {
    this.$router.push({name: 'financeIncome'});
  }
}
