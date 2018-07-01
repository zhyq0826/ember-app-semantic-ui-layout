import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['ui', 'form'],
    actions: {
        addNewForm(){
            let newForm = this.makeNewForm();
            this.get('model').pushObject(newForm);
        },
        removeForm(obj){
            this.get('model').removeObject(obj);
        }
    },
    makeNewForm(){
        return  Ember.Object.create({name: '',value: ''});
    },
    init(){
        this._super(arguments);
        if(!this.get('model')){
            this.set('model', Ember.A([this.makeNewForm()]));
        }
    }
});
