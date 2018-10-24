import Component from '@ember/component';
import cytoscape from 'cytoscape';

export default Component.extend({
    didInsertElement() {
        this._super(...arguments);
        cytoscape({
            container: this.$('#cy'),
            elements: this.elements,
            style: this.style,
            layout: this.layout,
        });
    },

    elements: [
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        { data: { id: 'ab', source: 'a', target: 'b' } }
    ],

    style: [
        {
            selector: 'node',
            style: {
                'background-color': '#666',
                'label': 'data(id)'
            }
        },
        {
            selector: 'edge',
            style: {
                'width': 3,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle'
            }
        }
    ],

    layout: {
        name: 'grid',
        rows: 1
    },
});
