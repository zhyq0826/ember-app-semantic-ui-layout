import Ember from 'ember';
import {find_project_by_name} from '../data/main';

export default Ember.Route.extend({
    model(param){
        return  find_project_by_name(param.org, param.project_name);
    }
});
