import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component({
  components: {},
  directives: {},
})
export default class FinancePage extends Vue {
  public routeIncome() {
    this.$router.push({name: 'financeIncome'});
  }
}
