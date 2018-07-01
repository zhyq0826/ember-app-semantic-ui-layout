import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('settings', function() {
    this.route('profile');
    this.route('account');
    this.route('projects');
    this.route('organizations');
  });
  this.route('new-workspace');
  this.route('new-organization');
  this.route('organization', function() {
    this.route('invite', {path: '/:org/invite'});
  });
  this.route('organization-detail', {path: '/:org'}, function() {
    this.route('workspace');
  });
  this.route('my', function() {
    this.route('workspace');
    this.route('orgs');
  });
  this.route('api');
  this.route('api-dashboard', function() {
    this.route('api-detail');
    this.route('env');
    this.route('new-end-point');
    this.route('new-group');
    this.route('new-model');
  });
  this.route('api-detail', {path:'/:org/:project_name'}, function() {
    this.route('testing');
    this.route('docs');
    this.route('settings');
    this.route('global');
    this.route('options');
  });
});

export default Router;
