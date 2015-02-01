/* jshint ignore:start */
/** @jsx React.DOM */

var SopItem = React.createClass({
    render: function () {
        return (
            <li class="sop-item">
                <img src="http://placekitten.com/g/135/135" alt="" />
                <h1>卸甲歸鄉</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
        );
    }
});

var Sop = React.createClass({
    render: function () {
        return (
            <div className="sop-viewport">
                <div className="sop-container">
                    {[<SopItem />, <SopItem />, <SopItem />, <SopItem />, <SopItem />]}
                </div>
            </div>
        );
    }
});

React.render(
    <Sop />,
    document.querySelector('#sop-block')
);
