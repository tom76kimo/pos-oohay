/* jshint ignore:start */
/** @jsx React.DOM */

var mockState = {
    items: [
        {
            image: {
                src: chrome.extension.getURL('images/d16449.jpg'),
                alt: ''
            },
            title: 'Car Accident',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['car accident'],
            watch: 2563,
            favorite: 1726,
            lastUpdate: 'Jan. 25, 2015'
        },
        {
            image: {
                src: chrome.extension.getURL('images/2.jpg'),
                alt: ''
            },
            title: 'Car Broken',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['car accident'],
            watch: 928,
            favorite: 753,
            lastUpdate: 'Feb. 17, 2015'
        },
        {
            image: {
                src: chrome.extension.getURL('images/3.jpg'),
                alt: ''
            },
            title: 'Wax the Car',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            keywords: ['car accident'],
            watch: 1026,
            favorite: 824,
            lastUpdate: 'Mar. 04, 2015'
        }
    ]
};

var SopItem = React.createClass({
    render: function () {
        return (
            <li className="sop-item">
                <a href="#">
                    <img className="sop-image" {...this.props.image} />
                    <h1 className="sop-title">{this.props.title}</h1>
                </a>
                <ul className="sop-info">
                    <li><i className="fa fa-eye"></i> {this.props.watch}</li>
                    <li><i className="fa fa-heart"></i> {this.props.favorite}</li>
                </ul>
                <div className="sop-update">{this.props.lastUpdate}</div>
            </li>
        );
    }
});

var SopBanner = React.createClass({
    render: function () {
        return (
            <div className="sop-banner">
                <span className="logo">Yahoo! SOP</span>
                <a className="more" href="#">more SOPs <i className="fa fa-chevron-right"></i></a>
            </div>
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
            <div ref="viewPort" className="dd sop-viewport">
                <SopBanner />
                <div className="sop-container">
                    {sopItems}
                </div>
            </div>
        );
    },
    componentDidMount: function () {
        var self = this;
        setTimeout(function () {    
            var viewPort = self.refs.viewPort.getDOMNode();
            viewPort.style.backgroundColor = 'transparent';
        }, 250);
    }
});

React.render(
    <Sop searchTerm={document.querySelector('#yschsp') ? document.getElementById('yschsp').value : document.getElementById('p').value} />,
    document.querySelector('#sop-block')
);

var fa = document.createElement('style');
    fa.type = 'text/css';
    fa.textContent = '@font-face { font-family: FontAwesome; src: url("'
        + chrome.extension.getURL('bower_components/font-awesome/fonts/fontawesome-webfont.woff')
        + '"); }';
document.head.appendChild(fa);
