import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
    searchValue: '',
    actions: {
        searchValueChange(e){
            this.set('searchValue', e.target.value);
        }
    },
    filterModel: computed('model,searchValue', {
        get(){
            let searchValue = this.get('searchValue');
            if(searchValue){
                return this.get('model').filter(function(item, index) {
                    return item.name.indexOf(searchValue) >= 0;
                });
            }
            
            return this.get('model');
        }
    }),
});
