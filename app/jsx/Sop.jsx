/* jshint ignore:start */
/** @jsx React.DOM */

var mockState = {
    items: [
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉ABC',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['aaa', 'bbb', 'ccc']
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉AB',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['aaa', 'bbb']
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉A',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['aaa']
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉B',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['bbb']
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉C',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['ccc']
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
        var pattern = new RegExp(this.props.searchTerm);
        var sopItems = this.state.items.map(function (item, index) {
            item.keywords = item.keywords || [];
            var matchKeywords = item.keywords.filter(function (keyword) {
                return pattern.test(keyword);
            });

            if (matchKeywords.length === 0) {
                return null;
            } else {
                return (<SopItem key={index} {...item} />);
            }
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
    <Sop searchTerm={document.getElementById('yschsp').value} />,
    document.querySelector('#sop-block')
);
