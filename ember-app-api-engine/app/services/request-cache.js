import Ember from 'ember';

export default Ember.Service.extend({
    cache: {},
    set(key, value){
        this.get('cache')[key] = value;
    },
    get(key){
        return this.get('cache')[key];
    }
});
