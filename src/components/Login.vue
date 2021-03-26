<template>
  <a-row
    justify="center"
    align="middle"
    style="min-height: inherit"
    class="position-relative"
  >
    <a-col :span="auto">
      <a-form
        layout="inline"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item>
          <a-input
            v-model:value="formState.userEmail"
            type="email"
            placeholder="User email"
          >
            <template #prefix
              ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-model:value="formState.password"
            type="password"
            placeholder="Password"
          >
            <template #prefix
              ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            class="text-capitalize"
            type="primary"
            html-type="submit"
            :disabled="formState.userEmail === '' || formState.password === ''"
          >
            {{ $t("login") }}
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
import { computed, defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const formState = reactive({
      userEmail: "",
      password: "",
    });

    const handleFinish = (values) => {
      store
        .dispatch("login", {
          email: formState.userEmail,
          password: formState.password,
        })
        .then(() => {
          router.push({ path: "/" });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const handleFinishFailed = (errors) => {
      alert(errors);
    };

    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },

  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>
