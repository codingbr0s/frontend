import {Component, Vue} from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import UploadButton from 'vuetify-upload-button';

const invoiceModule = namespace('invoice');

@Component({
  components: {'upload-btn': UploadButton},
})
export default class UploadPage extends Vue {
  @invoiceModule.Action('createInvoice') public createInvoice: any;

  private async uploadInvoice(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    this.createInvoice(formData);
    // reset upload file input value
    const uploadButton = this.$refs.uploadButton as any;
    (document.getElementById(`${uploadButton._uid}uploadFile`) as any).value = '';
    uploadButton.uTitle = null;
  }
}
