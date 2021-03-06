const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNodes.prototype.selectDeep', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1,
                children: [{
                    text: 'B'
                }]
            }]
        });
    });

    it('exists', function() {
        expect(tree.nodes().selectDeep).to.be.a('function');
        expect(tree.selectDeep).to.be.a('function');
    });

    it('selects all nodes', function() {
        expect(tree.selected()).to.have.length(0);

        tree.selectDeep();

        expect(tree.selected()).to.have.length(1);
    });
});
