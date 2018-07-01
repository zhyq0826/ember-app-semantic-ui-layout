import Ember from 'ember';
import {groups} from '../data/main';

export default Ember.Route.extend({
    model(){
        return {
            'groups': groups
        };
    }
});
