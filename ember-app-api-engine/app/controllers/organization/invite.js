import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        inviteFinish(){
            this.transitionToRoute('organization-detail',{org: 'wecatch'})
        }
    }
});
