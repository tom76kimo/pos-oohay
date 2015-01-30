/** @jsx React.DOM */

var Sop = React.createClass({
    render: function () {
        return <div>React.js</div>;
    }
});

React.render(
    <Sop />,
    document.querySelector('#sop-block')
);