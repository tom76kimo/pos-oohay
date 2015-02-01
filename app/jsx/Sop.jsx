/* jshint ignore:start */
/** @jsx React.DOM */

var SopItem = React.createClass({
    render: function () {
        return (
            <li className="sop-item">
                <img src="http://placekitten.com/g/140/140" alt="" />
                <h1 className="sop-title">卸甲歸鄉</h1>
                <p className="sop-desc">Lorem ipsum dolor sit amet, consectetur</p>
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
