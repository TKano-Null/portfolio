<template>
  <v-container class="wrapper">
    <!-- justify contentsを中央揃えに -->
    <v-row>
      <v-col>
        <v-sheet style="margin: 0 50px; text-align: center">
          <h2 style="text-align: center; padding-bottom: 20px">お問い合わせ</h2>
          <form action="" method="POST">
            <v-text-field
              v-model="formName.value.value"
              :counter="10"
              :error-messages="formName.errorMessage.value"
              label="お名前"
              name="user_name"
            ></v-text-field>

            <!--             <v-text-field
              v-model="formPhone.value.value"
              :counter="7"
              label="電話番号"
              name="phone"
            ></v-text-field> -->

            <v-text-field
              v-model="formEmail.value.value"
              label="メールアドレス"
              name="mail"
            ></v-text-field>

            <v-textarea label="お問い合わせ内容" name="message"></v-textarea>

            <v-btn class="bg-grey-darken-3 text-white" type="submit">
              送信
            </v-btn>
          </form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
export default {
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        formName(value) {
          if (value?.length >= 2) return true;
          return "お名前は2文字以上入力してください";
        },
        formPhone(value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true;
          return "電話番号は9桁で入力してください";
        },
        formEmail(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
          return "メールアドレスを確認してください";
        },
      },
    });
    const formName = useField("formName");
    const formPhone = useField("formPhone");
    const formEmail = useField("formEmail");
    const formText = useField("formText");
    const submit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });
    return { formName, formPhone, formEmail, formText, submit };
  },
};
</script>
