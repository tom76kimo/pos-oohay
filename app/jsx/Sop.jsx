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
            keywords: ['aaa', 'bbb', 'ccc'],
            watch: 930,
            favorite: 26,
            lastUpdate: '01/25/2015'
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉AB',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['aaa', 'bbb'],
            watch: 930,
            favorite: 26,
            lastUpdate: '01/25/2015'
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉A',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['aaa'],
            watch: 930,
            favorite: 26,
            lastUpdate: '01/25/2015'
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉B',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['bbb'],
            watch: 930,
            favorite: 26,
            lastUpdate: '01/25/2015'
        },
        {
            image: {
                src: 'http://placekitten.com/g/140/140',
                alt: ''
            },
            title: '卸甲歸鄉C',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['ccc'],
            watch: 930,
            favorite: 26,
            lastUpdate: '01/25/2015'
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
                    <span><i className="fa fa-eye"></i> 最後更新: {this.props.lastUpdate}</span>
                </li>
            </a>
        );
    }
});

var SopBanner = React.createClass({
    render: function () {
        return <div className="sop-banner">Yahoo! SOP</div>;
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
                <SopBanner />
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

var fa = document.createElement('style');
    fa.type = 'text/css';
    fa.textContent = '@font-face { font-family: FontAwesome; src: url("'
        + chrome.extension.getURL('bower_components/font-awesome/fonts/fontawesome-webfont.woff')
        + '"); }';
document.head.appendChild(fa);
