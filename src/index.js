const { slugify } = require('utils');
const visit = require('unist-util-visit');

module.exports = function remarkHeadingCustomIds() {
    return function transformer(ast) {
        const headings = [];
        visit(ast, 'heading', (node) => {
            // eslint-disable-next-line no-param-reassign
            const data = node.data || (node.data = {});
            const props = data.hProperties || (data.hProperties = {});

            const children = node.children[node.children.length - 1];
            const { depth } = node;

            if (children && children.type === 'text') {
                const string = children.value;

                if (depth < 3) {
                    props.id = slugify(string);
                    headings.push(slugify(string));
                } else {
                    props.id = `${String(headings.at(-1))}-${String(slugify(string))}`;
                }
            }
        });
    };
};
