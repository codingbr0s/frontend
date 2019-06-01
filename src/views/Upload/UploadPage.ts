import {Component, Vue} from 'vue-property-decorator';
import UploadButton from 'vuetify-upload-button';

@Component({
  components: {'upload-btn': UploadButton},
})
export default class UploadPage extends Vue {

}
