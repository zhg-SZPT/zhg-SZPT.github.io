<template>
  <vue-tinymce
    v-model="content"
    :setting="setting"
    @change="input"
  />
</template>

<script>
import { imageUpload } from '../../../../../api/admin/public'
export default {
  data() {
    return {
      content: '',
      setting: {
        menubar: false,
        toolbar:
          'undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |',
        quickbars_selection_toolbar:
          'removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor',
        plugins: 'link image table lists fullscreen quickbars paste',
        paste_data_images: false,
        language: 'zh_CN',
        height: 600,
        images_upload_handler: function (blobInfo, succFun, failFun) {
          let formData = new FormData()
          let file = blobInfo.blob()
          formData.append('file', file)
          console.log(formData)
          imageUpload(formData)
            .then((res) => {
              succFun('http://' + res.data.fileUrl)
            })
            .catch((res) => {
              failFun()
            })
        },
      },
    }
  },
  props: {
    value: String,
  },
  watch: {
    value(newValue, oldValue) {
      this.content = newValue
    },
  },
  methods: {
    input() {
      this.$emit('input', this.content)
    },
  },
}
</script>

<style>
</style>