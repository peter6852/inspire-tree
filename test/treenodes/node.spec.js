const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNodes.prototype.node', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1
            }]
        });
    });

    it('exists', function() {
        expect(tree.nodes().node).to.be.a('function');
        expect(tree.node).to.be.a('function');
    });

    it('returns a node', function() {
        expect(tree.node(1).id).to.equal(1);
    });
});
