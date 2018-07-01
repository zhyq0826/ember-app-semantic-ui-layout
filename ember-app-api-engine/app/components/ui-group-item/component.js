import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['cc-group-item'],
    actions: {
        toggleContent(){
            this.$('.js-content').toggle();
            this.toggleProperty('isOpenFolder');
        }
    },
    init(){
        this._super(arguments);
        this.set('isOpenFolder', true);
    }
});
