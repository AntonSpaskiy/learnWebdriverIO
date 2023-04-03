const BaseComponent = require ('./base.component')

class SideMenuComponent extends BaseComponent{

    constructor() {
        super('#plannerSiderBar');
    };

    get name () {
        return this.rootEl.$('.name');
    };

item(param) {
    const selectors = {
        dasboard: '[routerlink="/dashboard"]',
        schedule: '[routerlink="/calendar"]',
        doctors: '[routerlink="/doctors"]'
    };

    return this.rootEl.$(selectors[param.toLowerCase()]);
}
}

module.exports = SideMenuComponent;