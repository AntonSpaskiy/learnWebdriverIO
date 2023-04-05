const BaseComponent = require ('./../common/base.component')

class AddDoctorComponent extends BaseComponent {

    constructor() {
        super('.new-doctor-dialog')
    };

    get saveBtn() {
        return this.rootEl.$('//button[text()=\'Save\']')
    };

    get closeBtn() {
        return this.rootEl.$('button[title="Close"]')
    }

    /**
     * 
     * @param {'name' | 'phone' | 'email' | 'education' | 'designation'} name 
     * @returns {*}
     */
    input(name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: 'input[name="Email"]',
            education: 'input[name="Education"]',
            designation: 'input[name="Designation"]',
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }

}

module.exports = AddDoctorComponent;