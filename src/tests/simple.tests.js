const { pages } = require('./../po');

describe("Doctors page", () => {
    beforeEach(async () =>{
        await pages('dashboard').open();
    }),

    it ('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    }),

    it ('Open modal window for adding a new doctor', async () => {
        // click doctors item in the side menu (?)
        await pages('dashboard').sideMenu.item('doctors').click();
        // click add new doctor btn
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        // verify that modal window is displayed
        await expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed();


    }),

    it("Add a new doctor", async () => {
        // click doctors item in the side menu (?)
        await pages('dashboard').sideMenu.item('doctors').click();
        // click add new doctor btn
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click()
        // wait for visibility of modal window
        await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
        // fill all required fields
        await pages('doctors').addDoctorModal.input('name').setValue("John Doe");
        await pages('doctors').addDoctorModal.input('phone').setValue("1111111111");
        await pages('doctors').addDoctorModal.input('email').setValue("johndoe@gmail.com");
        await pages('doctors').addDoctorModal.input('education').setValue("High Medical");
        await pages('doctors').addDoctorModal.input('designation').setValue("Far away");
        // click "Save"
        await pages('doctors').addDoctorModal.saveBtn.click();
        // check that the doctor creation pop-up has disappeared
        await expect (pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
        // check that the information about create doctor is displayed

        await expect(pages('doctors').specialistCard(8).name).toHaveText('Dr. John Doe');
        await expect(pages('doctors').specialistCard(8).education).toHaveText('High Medical', {ignoreCase: true});
    }),

    it ('Close modal window for adding a new doctor', async () => {
        // click doctors item in the side menu (?)
        await pages('dashboard').sideMenu.item('doctors').click();
        // click add new doctor btn
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        // verify that modal window is displayed
        await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
        // click close button
        await pages('doctors').addDoctorModal.closeBtn.click();
        // verify that modal window is not displayed anymore
        await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
    })
})