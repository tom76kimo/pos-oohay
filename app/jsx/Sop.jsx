/* jshint ignore:start */
/** @jsx React.DOM */

var mockState = {
    items: [
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉',
            desc: 'Lorem ipsum dolor sit amet, consectetur'
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉',
            desc: 'Lorem ipsum dolor sit amet, consectetur'
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉',
            desc: 'Lorem ipsum dolor sit amet, consectetur'
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉',
            desc: 'Lorem ipsum dolor sit amet, consectetur'
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉',
            desc: 'Lorem ipsum dolor sit amet, consectetur'
        }
    ]
};

var SopItem = React.createClass({
    render: function () {
        return (
            <a href="#">
                <li className="sop-item">
                    <img {...this.props.image} />
                    <h1 className="sop-title">{this.props.title}</h1>
                    <p className="sop-desc">{this.props.desc}</p>
                </li>
            </a>
        );
    }
});

var Sop = React.createClass({
    getInitialState: function() {
        return mockState;
    },
    render: function () {
        var sopItems = this.state.items.map(function (item, index) {
            return (
                <SopItem key={index} {...item} />
            );
        }, this);

        return (
            <div className="sop-viewport">
                <div className="sop-container">
                    {sopItems}
                </div>
            </div>
        );
    }
});

React.render(
    <Sop />,
    document.querySelector('#sop-block')
);
