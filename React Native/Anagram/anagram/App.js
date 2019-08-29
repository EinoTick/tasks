import React, {Component} from 'react';
import {Button, View, TextInput, Text, StatusBar} from 'react-native';

class AnagramTextInput1 extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable={true}
        maxLength={100}
      />
    );
  }
}

class AnagramTextInput2 extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable={true}
        maxLength={100}
      />
    );
  }
}

export default class AnagramChecker extends Component {
  constructor(props) {
    super(props);
    this.verifyAnagram = this.verifyAnagram.bind(this);
    this.resetAnagram = this.resetAnagram.bind(this);
    this.state = {
      text: 'Neutral Text!',
      anagramText: 'Add Word Here!',
      isAnagram: false,
      doesInputContainString: false,
      containInvalidCharacters: false,

      anagramText1: 'Add First Word Here!',
      isAnagram1: false,
      doesInputContainString1: false,

      anagramText2: 'Add Second Word Here!',
      isAnagram2: false,
      doesInputContainString2: false,
    };
  }

  verifyAnagram() {
    //Get input text and verify its exsitance
    const anagramWord1 = this.state.anagramText1;
    const anagramWord2 = this.state.anagramText2;
    var isInputFilled = anagramWord1 && anagramWord2;
    //Verify validity with regex
    var regexCharaters = new RegExp('[^A-Za-z]');
    var isInputValid1 = regexCharaters.test(anagramWord1);
    var isInputValid2 = regexCharaters.test(anagramWord2);
    var isInputValid = !isInputValid1 && !isInputValid2;
    //Categorize tasks based on conditions above
    //Inputs are filled and valid
    if (isInputFilled && isInputValid) {
      var sortedWord1 = anagramWord1
        .split('')
        .sort()
        .join('')
        .toLowerCase();
      var sortedWord2 = anagramWord2
        .split('')
        .sort()
        .join('')
        .toLowerCase();
      //Anagram Found
      if (sortedWord1 === sortedWord2) {
        this.setState({
          isAnagram: true,
          doesInputContainString: true,
          doesInputContainString1: true,
          doesInputContainString2: true,
          containInvalidCharacters: false,
          anagramText1: anagramWord1,
          anagramText2: anagramWord2,
        });
      } //Input is correct but words are not anagrams
      else {
        var itIsAnagram =
          '"' + anagramWord1 + ' and ' + anagramWord2 + '" are not a Anagrams';
        this.setState({
          isAnagram: false,
          doesInputContainString: true,
          doesInputContainString1: true,
          doesInputContainString2: true,
          containInvalidCharacters: false,
          anagramText1: anagramWord1,
          anagramText2: anagramWord2,
        });
      }
    } //Input contains invalid characters
    else if (isInputFilled && !isInputValid) {
      this.setState({
        isAnagram: false,
        doesInputContainString: true,
        doesInputContainString1: true,
        doesInputContainString2: true,
        containInvalidCharacters: true,
        anagramText1: anagramWord1,
        anagramText2: anagramWord2,
      });
    } //One or more of the inputs are empty
    else {
      this.setState({
        isAnagram: false,
        doesInputContainString: false,
        doesInputContainString1: false,
        doesInputContainString2: false,
        containInvalidCharacters: false,
        anagramText1: anagramWord1,
        anagramText2: anagramWord2,
      });
    }
  }

  resetAnagram() {
    this.setState({
      isAnagram: false,
      doesInputContainString: false,
      containInvalidCharacters: false,
      anagramText: '',

      isAnagram1: false,
      doesInputContainString1: false,
      containInvalidCharacters1: false,
      anagramText1: '',

      isAnagram2: false,
      doesInputContainString2: true,
      containInvalidCharacters2: false,
      anagramText2: '',
    });
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
      <View>
        <View>
          <StatusBar backgroundColor="green" barStyle="light-content" />
        </View>

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: 'lightgray',
            borderBottomColor: 'darkgray',
            borderBottomWidth: 1,
          }}>
          <AnagramTextInput1
            multiline={true}
            numberOfLines={4}
            onChangeText={anagramText1 => this.setState({anagramText1})}
            value={this.state.anagramText1}
          />
          <AnagramTextInput2
            multiline={true}
            numberOfLines={4}
            onChangeText={anagramText2 => this.setState({anagramText2})}
            value={this.state.anagramText2}
          />

          <Button
            onPress={this.verifyAnagram}
            title="Check"
            color="green"
            accessibilityLabel="Check Anagram!"
          />
          <Button
            onPress={this.resetAnagram}
            title="Clear"
            color="red"
            accessibilityLabel="Check Anagram!"
          />
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: this.state.text,
              paddingBottom: 2,
              height: 35,
            }}>
            {!this.state.doesInputContainString && (
              <Text>Please, fill the input form!</Text>
            )}
            {this.state.containInvalidCharacters && (
              <Text>
                Invalid Characters! Please use only letters(a-z), numbers(0-9),
                space and punctuation!!
              </Text>
            )}
            {this.state.doesInputContainString &&
              !this.state.isAnagram &&
              !this.state.containInvalidCharacters && (
                <Text>Not an Anagram</Text>
              )}
            {this.state.doesInputContainString &&
              this.state.isAnagram &&
              !this.state.containInvalidCharacters && (
                <Text>It Is an Anagram!</Text>
              )}
          </View>
        </View>

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: 'white',
            borderColor: 'darkgray',
            borderWidth: 1,
            height: 300,
          }}
        />
      </View>
    );
  }
}
