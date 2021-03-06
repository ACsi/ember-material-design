import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({
    init: function() {
        var content = [
            {name: 'hbs', content: 'progress-linear.hbs' },
            {name: 'controller', content: 'progress-linear-controller.js' }
        ];

        this.setSourceFiles(content);
    },

    mode: 'query',
    determinateValue: 30,
    determinateValue2: 30,

    setupTimer: function() {
        Ember.run.later(this, function() {
            this.incrementProperty('determinateValue', 1);
            this.incrementProperty('determinateValue2', 1.5);
            if (this.get('determinateValue') > 100) {
                this.set('determinateValue', 30);
                this.set('determinateValue2', 30);
            }

            Ember.run.later(this, this.setupTimer);

        }, 100);
    },

    setupTimer2: function() {
        Ember.run.later(this, function() {
            this.set('mode', this.get('mode') == 'query' ? 'determinate' : 'query');
            Ember.run.later(this, this.setupTimer2);
        }, 7200);
    }
});
