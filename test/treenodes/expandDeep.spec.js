const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNodes.prototype.expandDeep', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: []
        });
    });

    it('exists', function() {
        expect(tree.nodes().expandDeep).to.be.a('function');
        expect(tree.expandDeep).to.be.a('function');
    });

    it('returns a promise', function() {
        expect(tree.expandDeep().then).to.be.a('function');
    });
});
