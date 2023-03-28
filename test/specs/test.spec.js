describe("Smoketest suite", () => {

    it("First test", async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors");
        await $("//button[text()='Add New Doctor']").click();
        await $(".doctor-name > input").setValue("John Doe");
        await $("//button[text()='Save']").click();

        const emailError = await $('label#Email-info');
        expect(await emailError.getText()).toEqual("Enter valid email")
    })
})