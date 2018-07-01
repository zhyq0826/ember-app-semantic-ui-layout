import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createOrg(){
            this.transitionToRoute('organization.invite', {org: 'wecatch'});
        }
    }
});
