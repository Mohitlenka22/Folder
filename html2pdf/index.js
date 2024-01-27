let pdf = document.getElementById("pdf");

const download = () => {
  html2pdf().from(pdf).save();
};
