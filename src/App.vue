<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Read now!</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <footer id="footer">
      <span style="font-size: 0.6em;"
        >Icons made by
        <a href='https://www.flaticon.com/authors/freepik"' title="Freepik"
          >Freepik</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com</a
        ></span
      >
    </footer>
  </div>
</template>

<style lang="scss">
@import './assets/styles/normalize.css';
@import './assets/styles/theme.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $fgcolor;
  background: $bgcolor;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  background: $dark;

  a {
    font-weight: bold;
    color: $medium;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}

#footer {
  background: $light;
  border-bottom: 0.5rem solid $light-tint;
  padding: 1rem 0;
  margin-bottom: 0;
  a {
    text-decoration: none;
    color: $primary;
  }
}
</style>
