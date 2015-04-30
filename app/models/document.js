import DS from 'ember-data';

export default DS.Model.extend({

      doc: DS.attr('string'),
      format: DS.attr('string'),
      rundate: DS.attr('date')
});
