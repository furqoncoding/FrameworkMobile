import React from 'react';
import { View, Text, Alert } from 'react-native';
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import { homeFetchData } from "../../boot/actions";

class HomeScreenForm extends React.Component {
// class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.start()
  }

  async start()
  {
    var body_home = "TESSSSSSSSSS DARI REDUCER";
    await this.props.fetchDataHome(body_home);
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const HomeScreen = reduxForm({
  form: "HomeScreen"
})(HomeScreenForm);

function bindAction(dispatch) {
  return {
    fetchDataHome: body_home => dispatch(homeFetchData(body_home))
  };
}
const mapStateToProps = state => ({
  data_home: state.homeReducer.data_home
});


export default connect(mapStateToProps, bindAction)(HomeScreen);
// export default (HomeScreen);