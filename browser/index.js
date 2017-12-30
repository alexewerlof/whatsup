const getTemplate = (id) => document.getElementById(id).innerHTML
const guid = () => Math.round(Math.random() * 10000000)

Vue.component('report-item', {
    props: ['report', 'index']
});

const vm = new Vue({
  el: '#app',
  data: {
    currentReport: '',
    reports: []
  },
  methods: {
  	addReport: function () {
        const desc = this.currentReport;
        if (desc.trim() !== '') {
            this.reports.push({
                id: guid(),
                desc: this.currentReport
            });
            this.currentReport = '';
        }
    },
    moveReportUp: function (index) {
        if (index == 0) return;
        const target = this.reports[index];
        this.reports.splice(index, 1);
        this.reports.splice(index - 1, 0, target);
    },
    moveReportDown: function (index) {
        if (index >= this.reports.length - 1) return;
        const target = this.reports[index];
        this.reports.splice(index, 1);
        this.reports.splice(index + 1, 0, target);
    },
    deleteReport: function (index) {
        this.reports.splice(index, 1);
    }
  }
})

