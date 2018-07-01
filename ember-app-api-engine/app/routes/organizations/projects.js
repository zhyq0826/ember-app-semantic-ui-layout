import Ember from 'ember';
import { projects } from '../../data/main';

export default Ember.Route.extend({
    model(param){
        return {
            'projects': projects,
            'orgName': param.org
        };
    },
    // setupController(controller, model) {
    //     // Call _super for default behavior
    //     this._super(controller, model);
    //     // Implement your custom setup after
    //     this.controllerFor('organizations.projects').set('model', model.projects);
    // }
});
