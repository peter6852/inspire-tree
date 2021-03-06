const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNode.prototype.collapsed', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1,
                children: [{
                    text: 'AA'
                }]
            }]
        });
    });

    it('exists', function() {
        expect(tree.node(1).collapsed).to.be.a('function');
    });

    it('returns true when collapsed', function() {
        expect(tree.node(1).collapsed()).to.be.true;
    });

    it('returns false when expanded', function() {
        const node = tree.node(1);
        node.expand();

        expect(node.collapsed()).to.be.false;
    });
});
