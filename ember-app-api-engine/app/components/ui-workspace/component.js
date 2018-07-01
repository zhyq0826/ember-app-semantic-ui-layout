import Ember from 'ember';

const projects = [{"id":11269206,"name":"tornado-asyn","owner_name":"zhyq0826","description":"tornado 中的异步","active":null,"private":false,"admin":true},
    {"id":10498860,"name":"docker-about","owner_name":"zhyq0826","description":"about docker ","active":null,"private":false,"admin":true},
    {"id":10234094,"name":"let-us-code","owner_name":"zhyq0826","description":"let us code to solve problem","active":null,"private":false,"admin":true},
    {"id":10056116,"name":"weixinpay","owner_name":"zhyq0826","description":"微信支付-Python","active":null,"private":false,"admin":true},
    {"id":9530558,"name":"python-network-cookbook","owner_name":"zhyq0826","description":"python network programming cookbook code","active":null,"private":false,"admin":true},];

export default Ember.Component.extend({
    projects: projects
});
