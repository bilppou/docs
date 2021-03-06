const locales = require('./config/locales');

module.exports = ctx => ({
  base: '/',

  head: require('./config/head'),

  plugins: require('./config/plugins'),
  locales: locales.get(),

  head: [
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Mukta:wght@200;400;600&amp;display=swap', rel: 'stylesheet' }],
    ['script', {id: "scriptImporter"}, `
        (function() {
        var script = document.createElement("script");
        script.src = "/js/i18n.js";
        setTimeout(() => document.body.append(script))
        })();
    `]
  ],

  themeConfig: {
    logo: "/logo-docs.svg",

    docsRepo: 'bilpp/docs',
    docsDir: 'docs',
    editLinks: true,

    locales: locales.theme(),
  },
})
