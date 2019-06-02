import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {namespace} from 'vuex-class';

const CategoryModule = namespace('category');

@Component({
  components: {},
  directives: {},
})
export default class FinanceIncomePage extends Vue {
  @CategoryModule.Action('setCategories') public actionSetCategories!: any;
  @CategoryModule.Action('getIncome') public actionGetIncome!: any;
  @CategoryModule.State('categories') public stateCategories!: any;

  public mounted() {
    this.actionGetIncome().then((result: any) => {
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
