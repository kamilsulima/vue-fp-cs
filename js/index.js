Vue.component("full-page", fullPage.default);

new Vue({
  el: "#app",
  mixins: [fullPageMixin.default],
  data: {
    options: {
      navigation: true,
      anchors: ["page1", "page2", "page3", "page4"]
      /* sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab'] */
    }
  },
  methods: {
    addSection: function(e) {
      e.preventDefault();
      var newSectionNumber = $(".fp-section").length + 1;

      //adding section
      $("#fullpage").append(
        `<div class="section"><h1>Section ${newSectionNumber}</h1></div>`
      );

      //adding anchor for the section
      this.options.anchors.push(`page${newSectionNumber}`);

      //we have to call `update` manually as DOM changes won't fire updates
      //requires the use of the attribute ref="fullpage" on the
      //component element, in this case, <full-page>
      this.$refs.fullpage.update();
    },
    removeSection: function() {
      $("#fullpage")
        .find(".fp-section")
        .last()
        .remove();
      this.options.anchors.pop();
    }
  }
});
//
// REALTXT
