import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createWorkspace(){
            this.transitionToRoute('workspaces',{owner_name: 'zhyq0826'});
        }
    }
});
