var React = require('react-native');
var SearchPage = require('./SearchPage');
var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    /* beautify preserve:start */
    return (
      <React.NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Property Finder',
        component: SearchPage
      }}/>
      );
  }
  /* beautify preserve:end */
}

React.AppRegistry.registerComponent('ReactProject', function() {
  return PropertyFinderApp
});