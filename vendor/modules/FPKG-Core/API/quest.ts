import { reactive, ref } from 'vue';

const dialog = ref(false);

const setDialog = (isOpen: boolean) => {
  dialog.value = isOpen;
};

export default { dialog, setDialog };
