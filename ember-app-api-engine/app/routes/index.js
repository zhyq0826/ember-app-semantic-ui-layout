import Ember from 'ember';
import {projects, orgs} from '../data/main';

export default Ember.Route.extend({
    model(){
        return {
            'projects': projects['zhyq0826'],
            'orgs': orgs
        }
    },
    templateName: 'my'
});
