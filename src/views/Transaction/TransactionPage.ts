import {Component, Vue} from 'vue-property-decorator';
import {Money} from 'v-money';

@Component({
  components: {},
  directives: {money: Money},
})
export default class TransactionPage extends Vue {

}
