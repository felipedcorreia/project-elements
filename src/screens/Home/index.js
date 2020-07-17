import React, { useState } from 'react';
import { View, StyleSheet, TouchableHighlight, } from 'react-native';
import { Button, Image, Input, Text, Header, Slider, Divider, Card, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { Picker } from '@react-native-community/picker';

import RadioButton from '../../components/RadioButton/RadionButton';


export default function HomeScreen({ navigation }) {
  const [distance, setStateSpinner] = useState(200);
  const [minDistance] = useState(0);
  const [maxDistance] = useState(1000);
  const [selectedValue, setSelectedValue] = useState();
  const [show, setShow] = useState(false);
  const options = [
    {
      key: '99',
      text: '99x R$9.999,99',
    },
    {
      key: '60',
      text: '60x R$19.999,99',
    },
    {
      key: '48',
      text: '48x R$22.999,99',
    },
    {
      key: '36',
      text: '36x R$25.999,99',
    },
    {
      key: '24',
      text: '24x R$28.999,99',
    },
  ];

  const ShowHideComponent = () => {
    if (show == true) {
      setShow(false);
      console.log(show)
    } else {
      setShow(true);
      console.log(show)
    }
  };

  return (
    <>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.openDrawer() }}
        centerComponent={<View style={styles.viewImage}>
          <Image
            style={styles.tinyLogo}
            source={require('../../images/KOMATSU_HEADER.jpg')}
          />
        </View>}
        rightComponent={{ icon: 'settings', color: '#fff' }}
        backgroundColor='#0e1371'
      />
      <Divider style={styles.viewHome}>
        <View style={styles.viewText}>
          <Text style={styles.text}>RESULTADO DA PRÉ-SIMULAÇÃO</Text>
          <Text style={styles.text}>ALTERE SUAS CONDIÇÕES COMO PREFERIR</Text>
        </View>
        <ScrollView>
          <Formik
            initialValues={{ valor: '' }}
            onSubmit={values => console.log(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.viewForm}>
                <View style={styles.viewSpinner}>
                  <Text >Entrada Minima</Text>
                  <Slider
                    value={distance}
                    step={25}
                    minimumValue={0}
                    maximumValue={1000}
                    onValueChange={val => setStateSpinner(val)}
                  />
                  <View style={styles.textSpinner}>
                    <Text >R${minDistance}</Text>
                    <Text >
                      {"R$" + distance}
                    </Text>
                    <Text >R${maxDistance}</Text>
                  </View>
                </View>

                <View style={styles.containerCampos}>
                  <Input
                    placeholder='R$'
                    inputStyle={styles.input}
                    placeholderTextColor="black"
                    keyboardType="number-pad"
                    label="Entrada"
                    onChangeText={handleChange('entrada')}
                    onBlur={handleBlur('entrada')}
                    value={values.entrada}
                  />
                  <View style={styles.viewValorParcela}>
                    <Input
                      placeholder='R$'
                      inputStyle={styles.inputValFin}
                      containerStyle={{ width: '70%' }}
                      placeholderTextColor="black"
                      keyboardType="number-pad"
                      label="Valor a ser Financiado"
                      onChangeText={handleChange('valor')}
                      onBlur={handleBlur('valor')}
                      value={values.valor}
                    />
                    <View style={styles.container}>
                      <Text style={styles.textParcela}>Parcelas</Text>
                      <Picker
                        label="Valor a ser Financiado"
                        selectedValue={selectedValue}
                        style={{ height: 30, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        value={values.parcela}
                      >
                        <Picker.Item label="6x" value="6" />
                        <Picker.Item label="12x" value="12" />
                        <Picker.Item label="24x" value="24" />
                        <Picker.Item label="36x" value="36" />
                        <Picker.Item label="48x" value="48" />
                        <Picker.Item label="60x" value="60" />
                      </Picker>


                    </View>

                  </View>
                </View>

                <View style={styles.containerInformation}>
                  <Button title="Outras Informações" type="clear"
                    buttonStyle={styles.buttonInformation}
                    disabled={true}/>
                  {show ? (
                    <Icon
                      name='chevron-up'
                      type='font-awesome'
                      style={styles.iconInformation}
                      onPress={ShowHideComponent} />
                  ) : <Icon
                      name='chevron-down'
                      type='font-awesome'
                      style={styles.iconInformation}
                      onPress={ShowHideComponent} />}
                </View>


                <View style={styles.viewButton}>


                  <Button
                    title="CALCULAR"
                    type="outline"
                    buttonStyle={styles.button}
                    raised
                    onPress={handleSubmit}
                  ></Button>
                </View>

                <View>
                  <Card title="<NOME DO PRODUTO>" containerStyle={styles.viewCard}>
                    <RadioButton options={options} />
                  </Card>
                </View>

                <View style={styles.viewText}>

                  <Text>
                    <Icon
                      name='arrow-down'
                      type='font-awesome'
                      style={styles.iconResultado} />
                    Resultado da Simulação
                    <Text style={styles.innerText}> BAIXAR</Text>
                  </Text>
                </View>


                <View style={styles.viewText}>
                  <Input
                    placeholder='Mensagem de oferta confeccionada ao cliente'
                    inputStyle={styles.inputTextArea}
                    multiline={true}
                    numberOfLines={2}
                    containerStyle={{ width: '100%' }}
                    placeholderTextColor="black"
                    keyboardType="number-pad"
                    disabled={true}
                  />
                </View>

                <View style={styles.viewButtonSimulation}>
                  <Button title="SALVAR PRÉ-SIMULAÇÃO"
                    type="outline"
                    buttonStyle={styles.button}
                    raised
                    onPress={handleSubmit} />
                </View>


              </View>
            )}

          </Formik>
        </ScrollView>
      </Divider>

    </>
  );
}

const styles = StyleSheet.create({
  viewHome: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 10,
    backgroundColor: "#f0f0f0"
  },
  viewText: {
    alignItems: "center",
    marginTop: 20
  },
  viewImage: {
    alignItems: "center",
  },
  viewSpinner: {
    marginTop: 20
  },
  viewButton: {
    flex: 1,
    paddingTop: 20,
  },
  viewButtonSimulation: {
    flex: 1,
    marginBottom: 20
  },
  viewCard: {
    flex: 1,
    paddingTop: 20,
  },
  containerCampos: {
    flex: 1,
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  containerInformation: {
    flex: 1,
    flexDirection: 'row'
  },
  tinyLogo: {
    width: 150,
    height: 45,
    alignSelf: "center",
  },
  buttonInformation: {
    width: "100%",
    marginRight: 45
  },
  text: {
    fontSize: 14,
    alignItems: "center"
  },
  innerText: {
    color: 'red'
  },
  textSpinner: {
    width: 310,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  textParcela: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7b8991",
    alignSelf: "flex-start",
    marginBottom: 10
  },
  input: {
    color: "#000000",
  },
  inputValFin: {
    color: "#000000",
  },
  inputTextArea: {
    color: "#000000",
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 12,
    textAlign: "center"
  },
  viewValorParcela: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  iconInformation: {
    marginTop: 10,
  },
  iconResultado: {
    marginRight: 10,
  },
});