// autotest for Postman
//https://api.staya.dog/v1/auth/password/recovery/request
//https://www.getpostman.com/collections/514460fb19b9fa3a8bb6

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Content-Type header is present", () => {
  pm.response.to.have.header("Content-Type");
});
pm.test("Response time is less than 200ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(1000);
});
const jsonData = pm.response.json();
pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
});
