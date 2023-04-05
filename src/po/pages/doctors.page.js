const BasePage = require('./base.page')

const { DoctorListHeader, AddDoctorModal, SpecialistCard } = require('./../components');

class DoctorsPage extends BasePage{

    constructor() {
        super('/showcase/angular/appointmentplanner/#/doctors')
        this.doctorListHeader = new DoctorListHeader();
        this.addDoctorModal = new AddDoctorModal()
    }

    async open() {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    }

    specialistCard(id) {
        return new SpecialistCard(id);
    }
}

module.exports = DoctorsPage;