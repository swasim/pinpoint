// Template from: https://facebook.github.io/react-native/docs/tabbarios.html
import React, { Component, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../assets/styles/styles';
import Settings from '../containers/container_settings';
import Stats from '../containers/container_stats';
import Map from '../containers/container_map';

const ROUTES = { Settings, Stats, Map };

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'mapTab',
      notifCount: 0,
      presses: 0,
      data: null // any data needing to be passed between child views
    };
  }

  _renderContent(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  changeTab(tabName, data) {
    // if (tabName === 'logoutTab') {
    //   // this.props.logoutUser(this.props.navigator);
    //   this.renderScene('Settings')
    // } else {
      this.setState({ selectedTab: tabName, data });
    // }
  }
  
  renderScene(routeName) {
    var Component = ROUTES[routeName];
    return (
      <Component
        changeTab={this.changeTab.bind(this)}
        navigator={this.props.navigator}
        data={this.state.data}
      />
    );
  }

  render() {
    return (
      <TabBarIOS
        tintColor="black"
        barTintColor="white">
        <Icon.TabBarItem
          title="Statistics"
          iconName="stats-bars"
          selectedIconName="stats-bars"
          selected={this.state.selectedTab === 'statsTab'}
          onPress={() => this.changeTab('statsTab') }>
          {this.renderScene('Stats')}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Map"
          iconName="ios-navigate-outline"
          selectedIconName="ios-navigate"
          //badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'mapTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'mapTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this.renderScene('Map')}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Settings"
          iconName="ios-gear-outline"
          selectedIconName="ios-gear"
          selected={this.state.selectedTab === 'settingsTab'}
          onPress={() => this.changeTab('settingsTab') }>
          {this.renderScene('Settings')}
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }

}