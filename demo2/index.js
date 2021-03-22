const defaultList = ["变更中", "未生效", "作废", "正常", "审核中"];
var ele = new Vue({
  el: '.box',
  data: {
    searchValue: "",
    isShowDownBox: false,
    checkedNames: [],
    filterList: defaultList
  },
  methods: {
    search: function () {
      if (this.searchValue.length) {
        this.filterList = defaultList.filter((item) =>
          item.match(this.searchValue)
        );
      } else {
        this.filterList = defaultList;
      }
    },
    ifShowDownBox: function (event) {
      if (event.currentTarget.className === "resultBox") {
        this.isShowDownBox = !this.isShowDownBox;
      }
    },
    deleteItem: function (event) {
      let index = this.checkedNames.indexOf(event.currentTarget.id);
      this.checkedNames.splice(index, 1);
    }
  }
})