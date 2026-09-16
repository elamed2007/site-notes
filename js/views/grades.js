// Grades data for the notes page (exam points, averages, coefficients, EFM)
function noExams() { return { exams: [], avg: "", efm: "" }; }

window.GRADES = {
  modules: [
    { name: "M104", coeff: 3, exams: [18, 12, 14], avg: "14.66", efm: 20 },
    { name: "M102", coeff: 2, exams: [13, 18, 17], avg: "16", efm: 18 },
    { name: "M105", coeff: 3, ...noExams() },
    { name: "M103", coeff: 2, ...noExams() },
    { name: "EGST103", coeff: 2, ...noExams() },
    { name: "EGST101", coeff: 2, ...noExams() },
    { name: "EGST102", coeff: 2, ...noExams() },
    { name: "EGSTA106", coeff: 2, ...noExams() },
    { name: "EGST108", coeff: 2, ...noExams() },
    { name: "M107", coeff: 3, ...noExams() },
    { name: "M106", coeff: 2, ...noExams() },
    { name: "M108", coeff: 1, ...noExams() }
  ],
  finalResult: { avg: "17/20", status: "Passed" }
};
