import {Component, Vue} from 'vue-property-decorator';
import {Action, namespace, State} from 'vuex-class';
import UploadButton from 'vuetify-upload-button';

const TransactionModule = namespace('transaction');

@Component({
  components: {'upload-btn': UploadButton},
})
export default class UploadPage extends Vue {
  @Action('setShowProgress') public actionSetShowProgress: any;
  @TransactionModule.Action('evaluatePayment') public evaluatePayment: any;

  private async uploadTransaction(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    // reset upload file input value
    const uploadButton = this.$refs.uploadButton as any;
    (document.getElementById(`${uploadButton._uid}uploadFile`) as any).value = '';
    uploadButton.uTitle = null;
    this.actionSetShowProgress(true);
    this.evaluatePayment(formData).then((result: any) => {
      this.actionSetShowProgress(false);
      this.$router.push({name: 'transaction', params: {paymentInput: result.data}});
    }).catch((error: any) => {
      console.log('Beim verarbeiten der Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    });

  }
}
