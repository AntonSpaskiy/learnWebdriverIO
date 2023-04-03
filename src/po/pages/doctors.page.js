const BasePage = require('./base.page')

const ListHeaderComponent = require('./../components/doctors/list-header.component');
const AddDoctorComponent = require('./../components/doctors/add-doctor.component');


class DoctorsPage extends BasePage{

    constructor() {
        super('/showcase/angular/appointmentplanner/#/doctors')
        this.doctorListHeader = new ListHeaderComponent();
        this.addDoctorModal = new AddDoctorComponent()
    }

    async open() {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    }
}

module.exports = DoctorsPage;