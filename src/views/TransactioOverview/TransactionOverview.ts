import {Component, Prop, Vue} from 'vue-property-decorator';
import {namespace} from 'vuex-class';

const CategoryModule = namespace('category');
const TransactionModule = namespace('transaction');

@Component({
  components: {},
  directives: {},
})
export default class TransactionOverview extends Vue {
  @CategoryModule.Action('getSubCategory') public actionGetSubCategory!: any;
  @CategoryModule.Action('setSubCategory') public actionSetSubCategory!: any;
  @CategoryModule.State('subCategory') public stateSubCategory!: any;

  @Prop(Number)
  private subCategoryId?: any;

  get subCategory(): string {
    return this.stateSubCategory;
  }

  public mounted() {
    this.actionGetSubCategory(this.subCategoryId).then((result: any) => {
      this.actionSetSubCategory(result.data);
    });
  }
}
