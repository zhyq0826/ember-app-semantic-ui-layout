import Ember from 'ember';
import {orgs} from '../../data/main';
export default Ember.Route.extend({
    model(param){
        return orgs;
    }
});
