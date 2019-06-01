import {Component, Vue, Watch} from 'vue-property-decorator';
import {namespace} from 'vuex-class';

const InvoiceModule = namespace('invoice');

@Component({
  components: {},
})
export default class App extends Vue {
  @InvoiceModule.Action('resetInvoice') public actionResetInvoice: any;

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
    }
  }

  @Watch('$route')
  private onRouteChange(to: any, from: any) {
    if (from.name === 'transaction') {
      this.actionResetInvoice();
    }
  }

}
