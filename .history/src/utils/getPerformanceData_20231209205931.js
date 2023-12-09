export class PerformanceData {
  constructor(data, employeeId) {
    this.data = data;
    this.employeeId = employeeId;
  }

  get chartData() {
    return this.data;
  }

  get employee() {
    return this.employeeId;
  }
}
