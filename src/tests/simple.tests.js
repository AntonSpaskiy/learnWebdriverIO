const DashboardPage = require('./../po/pages/dashboard.page');
const DoctorsPage = require('./../po/pages/doctors.page');

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe("Doctors page", () => {
    beforeEach(async () =>{
        await dashboardPage.open();
    }),

    it ('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    }),

    it ('Open modal window for adding a new doctor', async () => {
        // click doctors item in the side menu (?)
        await dashboardPage.sideMenu.item('doctors').click();
        // click add new doctor btn
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        // verify that modal window is displayed
        await expect(doctorsPage.addDoctorModal.rootEl).toBeDisplayed();


    }),

    it("Add a new doctor", async () => {
        // click doctors item in the side menu (?)
        await dashboardPage.sideMenu.item('doctors').click();
        // click add new doctor btn
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click()
        // wait for visibility of modal window
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();
        // fill all required fields
        await $('[name="Name"]').setValue("John Doe");
        await $('#DoctorMobile').setValue("1111111111");
        await $('input[name="Email"]').setValue("johndoe@gmail.com");
        await $('input[name="Education"]').setValue("High Medical");
        await $('input[name="Designation"]').setValue("High Medical");
        // click "Save"
        await $("//button[text()='Save']").click();
        // check that the doctor creation pop-up has disappeared
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();
        // check that the information about create doctor is displayed
        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8').$('.education')).toHaveText('High Medical', {ignoreCase: true});
        await expect($('#Specialist_8').$('.specialization')).toBeDisplayed();
        await expect($('#Specialist_8').$('.experience')).toBeDisplayed();
    }),

    it ('Close modal window for adding a new doctor', async () => {
        // click doctors item in the side menu (?)
        await dashboardPage.sideMenu.item('doctors').click();
        // click add new doctor btn
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        // verify that modal window is displayed
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();
        // click close button
        await $('button[title="Close"]').click();
        // verify that modal window is not displayed anymore
        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
    })
})