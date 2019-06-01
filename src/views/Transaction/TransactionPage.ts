import {Component, Vue} from 'vue-property-decorator';
import {Money} from 'v-money';

@Component({
  components: {},
  directives: {money: Money},
})
export default class TransactionPage extends Vue {

  public cards = [
    {title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
    {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
  ];

  public routeTransactionConfirm() {
    this.$router.push({name: 'transactionConfirm'});
  }
}
