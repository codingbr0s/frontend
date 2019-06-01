import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {},
})

export default class MainPage extends Vue {

  public routeUpload() {
    this.$router.push({name: 'upload'});
  }
  private testLog() {
    console.log('Test');
  }
}
