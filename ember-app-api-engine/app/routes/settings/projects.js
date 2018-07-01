import Ember from 'ember';
import { projects } from '../../data/main';

export default Ember.Route.extend({
    model(){
        return projects['zhyq0826'];
    }
});
