<template>
  <div class="container">
    <div class="logo">
      <img src="src/assets/logo.svg" />
      <div class="logo-text">Arco Design Pro</div>
    </div>
    <LoginBanner />
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LoginBanner from './components/banner.vue';
import LoginForm from './components/login-form.vue';
import Footer from '@/components/footer/index.vue';

export default defineComponent({
  components: {
    LoginBanner,
    LoginForm,
    Footer,
  },
});
</script>
<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;

  .banner {
    width: 550px;
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding-bottom: 40px;
    position: relative;
  }

  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  display: inline-flex;
  align-items: center;
  z-index: 1;

  &-text {
    margin-left: 4px;
    margin-right: 4px;
    font-size: 20px;
    color: var(--color-fill-1);
  }
}
</style>
