<template>
  <div>
    <v-row justify="center" class="my-4">
      <v-btn @click="btnClick('template')">Template</v-btn>
      <v-btn @click="btnClick('procedural')">Procedural</v-btn>
      <v-btn @click="btnClick('nested', 1)">Nested</v-btn>
    </v-row>
    <ModalView/>
    <df-modal v-model="showTemplate">
      <div slot="title">Modal as template</div>
      <div slot="body">
        <p>This modal is created as a template in this demo page.</p>
        <p>
          It should be trivial to insert any markup you wish.
          <b>This bold</b> is just for testing whether everything works
        </p>
      </div>
      <div slot="actions">This won't be a div, but an Actions component when it's done</div>
    </df-modal>
  </div>
</template>

<script>
import DialogSize from '../components/classes/dialog_size';
import { DfModal, ModalView } from '../components/modal';

/*
// verjetno ne bo potrebno?
import Modal from '';

Vue.use(Modal);
*/

export default {
  name: 'ModalDemo',
  components: { DfModal, ModalView },
  data() { return { showTemplate: false }; },
  computed: { DialogSize() { return DialogSize; } },
  methods: {
    async btnClick(which, level) {
      switch (which) {
      case 'template':
        this.showTemplate = !this.showTemplate;
        break;
      case 'procedural': {
        const res = await this.$dfModal.yesNo(
          'Procedural modal dialog',
          'This modal was shown by calling a method from your code.\nWe\'re currently waiting for you to click one' +
          ' of the buttons',
        );
        await this.$dfModal.message('Result', `You clicked the "${res.label}" button`);
        break;
      }
      case 'nested': {
        const suggestedSize = [DialogSize.SMALL, DialogSize.DEFAULT, DialogSize.LARGE][Math.floor(Math.random() * 3)];
        console.log(suggestedSize);
        await this.$dfModal.message(
          'Nested dialogs example',
          `This is dialog nesting ${level}\n` +
          'Click "Nest" to generate another dialog',
          [
            // this.$modal.button('close')
            { name: 'nest', label: 'Nest', action: () => { this.btnClick('nested', level + 1); } },
            { name: 'close' },
          ],
          { size: suggestedSize },
        );
        break;
      }
      default:
        break;
      }
    },
  },
};
</script>
