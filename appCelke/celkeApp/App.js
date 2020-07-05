import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import api from './services/api';

export default class Portfolio extends Component {

  state = {
    pgHome: "",
  }

  async componentDidMount() {
    const response = await api.get();
    this.setState({pgHome: response.data});
  }

  render() {
    const {portUmTitulo, portUmSubtitulo, portDoisTitulo, portDoisSubtitulo, portTresTitulo, portTresSubtitulo, portQuatroTitulo, portQuatroSubtitulo, portCincoTitulo, portCincoSubtitulo, portSeisTitulo, portSeisSubtitulo, portUmFileName, portDoisFileName, portTresFileName, portQuatroFileName, portCincoFileName, portSeisFileName} = this.state.pgHome;
    return (
      <ScrollView>
        {/* https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png */}
        <Image
          source={{ uri: portUmFileName }}
          style={{ width: 400, height: 200 }}
        />
        <Text>{portUmTitulo}</Text>
        <Text>{portUmSubtitulo}</Text>

        <Image
          source={{ uri: portDoisFileName }}
          style={{ width: 400, height: 200 }}
        />
        <Text>{portDoisTitulo}</Text>
        <Text>{portDoisSubtitulo}</Text>

        <Image
          source={{ uri: portTresFileName }}
          style={{ width: 400, height: 200 }}
        />
        <Text>{portTresTitulo}</Text>
        <Text>{portTresSubtitulo}</Text>

        <Image
          source={{ uri: portQuatroFileName }}
          style={{ width: 400, height: 200 }}
        />
        <Text>{portQuatroTitulo}</Text>
        <Text>{portQuatroSubtitulo}</Text>

        <Image
          source={{ uri: portCincoFileName }}
          style={{ width: 400, height: 200 }}
        />
        <Text>{portCincoTitulo}</Text>
        <Text>{portCincoSubtitulo}</Text>

        <Image
          source={{ uri: portSeisFileName }}
          style={{ width: 400, height: 200 }}
        />
        <Text>{portSeisTitulo}</Text>
        <Text>{portSeisSubtitulo}</Text>
      </ScrollView>
    );
  }
}