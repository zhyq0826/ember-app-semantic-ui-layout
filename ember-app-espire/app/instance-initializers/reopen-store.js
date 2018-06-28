import {set, get} from '@ember/object';
import { inject } from '@ember/service';


export function initialize(appInstance) {
    let store = appInstance.lookup('service:store');
    set(store, 'flashMessages', inject('flashMessages'));
    store.RESTSerializer=function(data){
        if(data.code===0){
            return data['res'];
        }else {
            if(data.code === 2){
                return window.location.reload();
            }
            let msg = data && data.msg || data;
            get(this, 'flashMessages').warning(msg);
            throw String(msg);
        }
    };
}

export default {
    name: 'reopen-store',
    initialize: initialize
};
