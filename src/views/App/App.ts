import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {},
})
export default class App extends Vue {

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
      return 'Bestätigen';
    }
  }

}
